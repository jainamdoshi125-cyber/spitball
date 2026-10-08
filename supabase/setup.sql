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
