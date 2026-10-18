-- Spitball analytics: database setup for Supabase.
-- Run this once in the Supabase SQL editor. It is safe to run again.
--
-- What it creates:
--   rounds     one row per round played (anonymous, keyed by a random ID saved on the device)
--   admins     the short list of logins allowed to read the data
--   log_round  the only door the public game can use: it adds or updates one round, and cannot read anything
--
-- The game's public key can call log_round and nothing else. Reading rounds needs an admin login.

create table if not exists public.rounds (
  id            uuid primary key,                      -- random ID for this round, made in the browser
  device_id     uuid not null,                         -- random ID saved on the device (no login, no name)
  puzzle_day    date not null,                         -- which day's puzzle was played
  play_number   integer not null default 1,            -- 1 = first time this device opened that day's puzzle
  replay        boolean not null default false,        -- true if this device had already seen that day's theme
  opened_at     timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  local_hour    smallint,                              -- hour of day on the player's own clock, 0 to 23
  rebus_wrong   text[] not null default '{}',          -- wrong rebus answers, as typed
  rebus_result  text,                                  -- solved, revealed (gave up) or failed (out of tries)
  rebus_try     smallint,                              -- which try solved it
  started       boolean not null default false,        -- tapped "Start the questions"
  guesses       double precision[] not null default '{}',
  scores        smallint[] not null default '{}',      -- closeness 0 to 100 for each answered question
  total         integer,                               -- final score out of 1,000
  finished      boolean not null default false,        -- answered all five
  share_opened  boolean not null default false,        -- the share popup appeared
  shared_text   boolean not null default false,        -- tapped "Text your results"
  shared_copy   boolean not null default false         -- tapped "Copy to clipboard"
);
create index if not exists rounds_puzzle_day_idx on public.rounds (puzzle_day);
create index if not exists rounds_device_idx on public.rounds (device_id);

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

-- Lock both tables. With row level security on and no rule for the public, the public key can read nothing.
alter table public.rounds enable row level security;
alter table public.admins enable row level security;
revoke all on public.rounds from anon, authenticated;
revoke all on public.admins from anon, authenticated;
grant select on public.rounds to authenticated;
grant select on public.admins to authenticated;

drop policy if exists "admins can see their own entry" on public.admins;
create policy "admins can see their own entry" on public.admins
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "admins can read rounds" on public.rounds;
create policy "admins can read rounds" on public.rounds
  for select to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

-- The game calls this after each step of a round, always sending the whole round so far.
-- A round only ever moves forward: later, fuller information replaces earlier information, never the reverse.
create or replace function public.log_round(r jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_wrong   text[];
  v_guesses double precision[];
  v_scores  smallint[];
  v_result  text;
begin
  if r is null or jsonb_typeof(r) <> 'object' or length(r::text) > 4000 then
    return;
  end if;

  select coalesce(array_agg(left(x.v, 60) order by x.n), '{}') into v_wrong
    from jsonb_array_elements_text(coalesce(r -> 'rebus_wrong', '[]'::jsonb)) with ordinality as x (v, n)
    where x.n <= 3;
  select coalesce(array_agg(x.v::double precision order by x.n), '{}') into v_guesses
    from jsonb_array_elements_text(coalesce(r -> 'guesses', '[]'::jsonb)) with ordinality as x (v, n)
    where x.n <= 5;
  select coalesce(array_agg(greatest(0, least(100, x.v::numeric))::smallint order by x.n), '{}') into v_scores
    from jsonb_array_elements_text(coalesce(r -> 'scores', '[]'::jsonb)) with ordinality as x (v, n)
    where x.n <= 5;
  v_result := r ->> 'rebus_result';
  if v_result not in ('solved', 'revealed', 'failed') then
    v_result := null;
  end if;

  insert into public.rounds as t (
    id, device_id, puzzle_day, play_number, replay, local_hour,
    rebus_wrong, rebus_result, rebus_try, started, guesses, scores, total,
    finished, share_opened, shared_text, shared_copy
  ) values (
    (r ->> 'id')::uuid,
    (r ->> 'device_id')::uuid,
    (r ->> 'day')::date,
    greatest(1, least(999, coalesce((r ->> 'play_number')::integer, 1))),
    coalesce((r ->> 'replay')::boolean, false),
    case when r ->> 'local_hour' is null then null else greatest(0, least(23, (r ->> 'local_hour')::integer))::smallint end,
    v_wrong, v_result,
    case when r ->> 'rebus_try' is null then null else greatest(1, least(3, (r ->> 'rebus_try')::integer))::smallint end,
    coalesce((r ->> 'started')::boolean, false),
    v_guesses, v_scores,
    case when r ->> 'total' is null then null else greatest(0, least(1000, (r ->> 'total')::integer)) end,
    coalesce((r ->> 'finished')::boolean, false),
    coalesce((r ->> 'share_opened')::boolean, false),
    coalesce((r ->> 'shared_text')::boolean, false),
    coalesce((r ->> 'shared_copy')::boolean, false)
  )
  on conflict (id) do update set
    updated_at   = now(),
    rebus_wrong  = case when cardinality(excluded.rebus_wrong) >= cardinality(t.rebus_wrong) then excluded.rebus_wrong else t.rebus_wrong end,
    rebus_result = coalesce(excluded.rebus_result, t.rebus_result),
    rebus_try    = coalesce(excluded.rebus_try, t.rebus_try),
    started      = t.started or excluded.started,
    guesses      = case when cardinality(excluded.guesses) >= cardinality(t.guesses) then excluded.guesses else t.guesses end,
    scores       = case when cardinality(excluded.scores) >= cardinality(t.scores) then excluded.scores else t.scores end,
    total        = coalesce(excluded.total, t.total),
    finished     = t.finished or excluded.finished,
    share_opened = t.share_opened or excluded.share_opened,
    shared_text  = t.shared_text or excluded.shared_text,
    shared_copy  = t.shared_copy or excluded.shared_copy
  where t.device_id = excluded.device_id;
exception when others then
  return;   -- a malformed record is dropped quietly; the game never waits on this
end;
$$;

revoke all on function public.log_round(jsonb) from public;
grant execute on function public.log_round(jsonb) to anon, authenticated;

-- Devices to leave out of the numbers (Jai's own phones and computers). The admin page adds the browser it is
-- opened in, and filters these devices out of every chart. Only admins can see or change this list.
create table if not exists public.ignored_devices (
  device_id uuid primary key,
  added_at  timestamptz not null default now()
);
alter table public.ignored_devices enable row level security;
revoke all on public.ignored_devices from anon, authenticated;
grant select, insert, delete on public.ignored_devices to authenticated;
drop policy if exists "admins manage ignored devices" on public.ignored_devices;
create policy "admins manage ignored devices" on public.ignored_devices
  for all to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())))
  with check (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

-- Today's high score. The public game may ask for the best finished score on one puzzle day and gets back numbers
-- only: the best score from other players (so the game can tell this player whether they beat it), the best overall,
-- and how many players finished. Second goes at the same day (replays) and Jai's own devices never count.
create or replace function public.day_high(d date, me uuid default null)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select jsonb_build_object(
    'others_best', max(r.total) filter (where me is null or r.device_id <> me),
    'best', max(r.total),
    'finishers', count(distinct r.device_id)
  )
  from public.rounds r
  where r.puzzle_day = d
    and r.finished
    and r.total is not null
    and not r.replay
    and not exists (select 1 from public.ignored_devices i where i.device_id = r.device_id);
$$;
revoke all on function public.day_high(date, uuid) from public;
grant execute on function public.day_high(date, uuid) to anon, authenticated;

-- A player's own stats, for the final screen. The game sends its own device ID and today's puzzle day, and gets back
-- numbers for that device only, from days BEFORE today (the game adds today's score itself): its best finished score,
-- how many days it has finished, and the count and sum of its scores over the 6 days before today (so with today
-- that makes a 7-day window). Only first plays count, one per day.
create or replace function public.my_stats(me uuid, today date)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  with mine as (
    select distinct on (r.puzzle_day) r.puzzle_day, r.total
    from public.rounds r
    where r.device_id = me
      and r.puzzle_day < today
      and r.finished
      and r.total is not null
      and not r.replay
    order by r.puzzle_day, r.opened_at
  )
  select jsonb_build_object(
    'best', max(total),
    'games', count(*),
    'games7', count(*) filter (where puzzle_day >= today - 6),
    'sum7', coalesce(sum(total) filter (where puzzle_day >= today - 6), 0)
  )
  from mine;
$$;
revoke all on function public.my_stats(uuid, date) from public;
grant execute on function public.my_stats(uuid, date) to anon, authenticated;

-- Today's leaderboard (Jai's design, October 2026). Players who finish in the top 10 may add a name. The board shows
-- named entries whose current rank is 10 or better, with their true rank among everyone who finished (ties share a
-- rank). Names are public by design, at most 16 characters, and Jai can hide one from the admin page.
create table if not exists public.board_names (
  device_id  uuid not null,
  puzzle_day date not null,
  name       text not null,
  round_id   uuid not null,
  hidden     boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (device_id, puzzle_day)
);
alter table public.board_names enable row level security;
revoke all on public.board_names from anon, authenticated;
grant select, update on public.board_names to authenticated;
drop policy if exists "admins read board names" on public.board_names;
create policy "admins read board names" on public.board_names
  for select to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));
drop policy if exists "admins hide board names" on public.board_names;
create policy "admins hide board names" on public.board_names
  for update to authenticated
  using (exists (select 1 from public.admins a where a.user_id = (select auth.uid())))
  with check (exists (select 1 from public.admins a where a.user_id = (select auth.uid())));

-- The board for one day. Returns the named top 10 (rank, name, score), how many finished, how many finished above
-- the given score (so the game can work out the player's rank from its own score), and the asking device's own
-- board entry, if it has one. No device IDs leave the database.
create or replace function public.day_board(d date, me uuid default null, score integer default null)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  with f as (
    select distinct on (r.device_id) r.device_id, r.total
    from public.rounds r
    where r.puzzle_day = d
      and r.finished
      and r.total is not null
      and not r.replay
      and not exists (select 1 from public.ignored_devices i where i.device_id = r.device_id)
    order by r.device_id, r.opened_at
  ),
  ranked as (
    select f.device_id, f.total, rank() over (order by f.total desc) as rk from f
  )
  select jsonb_build_object(
    'top', coalesce((
      select jsonb_agg(jsonb_build_object('rank', x.rk, 'name', b.name, 'score', x.total, 'mine', x.device_id = me)
                       order by x.rk, b.updated_at)
      from ranked x
      join public.board_names b on b.device_id = x.device_id and b.puzzle_day = d and not b.hidden
      where x.rk <= 10), '[]'::jsonb),
    'finishers', (select count(*) from f),
    'above', case when score is null then null else (select count(*) from f where f.total > score) end,
    'my_name', (select b.name from public.board_names b where b.device_id = me and b.puzzle_day = d)
  );
$$;
revoke all on function public.day_board(date, uuid, integer) from public;
grant execute on function public.day_board(date, uuid, integer) to anon, authenticated;

-- Add or change a name on the board. Only a finished first play in the current top 10 can, from the device that
-- played it. A name Jai has hidden stays hidden even if it is changed.
create or replace function public.board_submit(r uuid, me uuid, nm text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_day   date;
  v_total integer;
  v_above integer;
  v_name  text;
begin
  v_name := left(btrim(regexp_replace(coalesce(nm, ''), '\s+', ' ', 'g')), 16);
  if length(v_name) < 1 then return jsonb_build_object('ok', false, 'why', 'name'); end if;
  select x.puzzle_day, x.total into v_day, v_total
    from public.rounds x
    where x.id = r and x.device_id = me and x.finished and x.total is not null and not x.replay;
  if v_day is null then return jsonb_build_object('ok', false, 'why', 'round'); end if;
  if exists (select 1 from public.ignored_devices i where i.device_id = me) then
    return jsonb_build_object('ok', false, 'why', 'ignored');
  end if;
  select count(distinct x.device_id) into v_above
    from public.rounds x
    where x.puzzle_day = v_day and x.finished and x.total is not null and not x.replay
      and x.total > v_total and x.device_id <> me
      and not exists (select 1 from public.ignored_devices i where i.device_id = x.device_id);
  if v_above >= 10 then return jsonb_build_object('ok', false, 'why', 'rank'); end if;
  insert into public.board_names (device_id, puzzle_day, name, round_id)
    values (me, v_day, v_name, r)
    on conflict (device_id, puzzle_day) do update
      set name = excluded.name, round_id = excluded.round_id, updated_at = now();
  return jsonb_build_object('ok', true, 'name', v_name, 'rank', v_above + 1);
end;
$$;
revoke all on function public.board_submit(uuid, uuid, text) from public;
grant execute on function public.board_submit(uuid, uuid, text) to anon, authenticated;
