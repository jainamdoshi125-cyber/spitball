# Spitball: project notes

Spitball is a daily guessing game owned by Jai (GitHub: `jainamdoshi125-cyber`). A picture rebus unlocks the day's theme, then the player answers five questions with a number. The closer the guess, the higher the score. It is modeled on quick daily games like Wordle, MapTap and Krillion.

Jai is a product manager, not an engineer. Explain changes in plain language, say what was tested and what was not, and never ask him to edit code himself.

## Where it lives

- Live game: https://spitball-kappa.vercel.app/ (Vercel, free Hobby plan)
- Second copy: https://jainamdoshi125-cyber.github.io/spitball/ (GitHub Pages)
- Code: https://github.com/jainamdoshi125-cyber/spitball, branch `main`

Pushing to `main` publishes to both addresses automatically within a minute or two. There is no build step.

## Files

- `index.html`: the whole game. Layout, styling, scoring, share popup and keyboard handling are all in this one file.
- `puzzles.js`: the puzzles, one per day, keyed by date (`YYYY-MM-DD`).
- `README.md`: how to add a puzzle and the writing rules.
- `admin.html`: the private admin page with the analytics charts. It lives at `/admin.html` on the live site and needs the admin login.
- `supabase/setup.sql`: the database setup (tables, locks and the one function the game calls). Safe to run again.

## Analytics

The game sends one anonymous record per round to a small Supabase database (free plan, project `ynvrlordngosyrxebsqr`, owned by Jai). There is no login for players and no name: just a random ID saved on the device.

- The game's public key (in `index.html` and `admin.html`) can only call `log_round`, which adds or updates one round. It cannot read anything. It is meant to be public.
- Reading the data needs a Supabase login that is listed in the `admins` table. Jai's login is the only one.
- Never put the database password or a secret key in this repository. It is public.
- The game sends the whole round so far after each step, and the database keeps the fullest version. Every send is fire-and-forget: if it fails, the game carries on.
- A device's second round on the same day is marked `replay` once it has seen the theme screen. The admin page leaves replays out of guesses, scores and rebus answers, because the player already knows the answers.
- Copies opened on `localhost` do not report, so test runs stay out of the numbers.
- The admin page downloads every round and adds the numbers up in the browser. That is fine for thousands of rounds. If the game grows far past that, move the adding-up into the database.
- "Share Your Results" (the text message button) is tracked by a listener on the page as a whole, not on the link, so the link stays a plain `sms:` link.
- Supabase pauses a free project after about a week with no activity.

## How a day works

1. Rebus screen. Pictures only, never letters. Three tries. A hint appears after the second wrong guess. "Give up and show me" is always available. The rebus earns no points.
2. Theme screen. Shows the theme and a short "on this day" story.
3. Five number questions, easy to hard.
4. Final score, a per-question breakdown, and a share popup.

The puzzle changes for everyone at 12:01 AM Eastern time. If a day has no puzzle, the most recent earlier one is shown.

## Daily puzzle workflow

Jai asks for the next day's puzzle the day before. Send him the hook, rebus, theme, snippet, five questions, answers, spreads and a source for every fact. Publish only after he approves.

`puzzles.js` is public, so anyone can read it. Add a puzzle the evening before it goes live, never weeks ahead.

## Puzzle writing rules

- The hook is a real event that happened on that calendar date. Verify the date with a web search.
- The theme is one level broader than the hook (a film becomes the movies, a shipwreck becomes the ocean). Narrow single-topic days exclude people, so avoid them.
- At most one or two questions about the hook itself. The other questions should be things anyone can reason toward.
- Every answer is a number, and every question states its unit.
- The snippet must not give away any answer, including the year if a question asks for it.
- The rebus can be loose and does not need to be exact. Accept reasonable alternative readings in `answers` (lowercase, no spaces).
- Each puzzle carries three themed `hype` lines and three themed `oof` lines for great and terrible guesses.
- Every fun fact ends with one emoji that fits the fact, after the final period.
- Check every fact against a source before publishing.

## Scoring

Each question gives a closeness score from 0 to 100. An exact answer is 100, and anything else caps at 99.

- Weights: questions 1 and 2 count once, question 3 counts double, questions 4 and 5 count triple. A perfect day is 1,000.
- Numbers: percent off is `max(guess/answer, answer/guess) - 1`, so half and double count the same. Closeness is `100 / (1 + (percentOff / spread)^1.5)`. The default spread is 43, which makes 10% off worth 90.
- Years: percent off is years off divided by how long ago the event was (treated as at least 20 years), then the same curve. The default spread is 35.
- Whole-number answers also score by steps away (`105 - 20 * steps`: one away is 85, two away is 65), and the player keeps the higher of the two scores.
- `spread` is how far off earns 50. Set it by how guessable the answer is: about 30 for anchored facts, about 50 for things you can reason toward, 80 to 100 for shots in the dark.

Jai's preferences on scoring: avoid giving 0 unless a guess is far off, and do not make scoring so generous that everyone lands in the same range.

## Result screens and sharing

- After each answer: a themed reaction line, a bar showing where the guess landed, "You said" and "Answer", a fun fact, and the points. Only a true 0 touches the end of the bar.
- The final screen shows the score as a number only (no "out of 1,000"), a verdict badge and the breakdown.
- Never show "Play again" or "How scoring works".
- The share popup opens just after the final score appears. It has "Share Your Results" (opens a text message with the result filled in), "Copy to clipboard" and a close button.

The shared text is exactly this shape:

```
Spitball: 421
🧩Rebus: Try 2
100👑 12🙈 87👌 45🤷 0💩
Oct-6-26
```

- The score digits are Unicode bold digits, because text messages cannot carry real bold.
- The text starts with an invisible zero-width space. Without it, iPhones read "Spitball:" as a web address and paste the result percent-encoded. Do not remove it.
- Emoji by closeness: 100 👑, 90+ 🤏, 75+ 👌, 60+ 👍, 40+ 🤷, 20+ 🫣, 10+ 🙈, under 10 💩.
- "Share Your Results" is a plain `sms:` link with no script attached. Keep it that way.

## Design

The look is called Arcade: a single dark design with a purple-black background, hot pink buttons, a cyan outline on the card, squarer corners and uppercase buttons. There is no light mode. Colors are tokens on `:root` in `index.html`.

The game is built for phones first. Jai tests on an iPhone 16 in Safari.

## iPhone keyboard handling

Safari shifts the screen when the keyboard opens. The game works around this in `index.html`:

- A tap on an answer box is handled directly and focuses it with `preventScroll`.
- The box is invisible for an instant as it takes focus (`calmFocus`), because Safari does not shift the screen for a box it cannot see.
- A wrong rebus guess updates the card in place so the keyboard stays up.

Do not make the rebus screen smaller to solve keyboard problems. Jai likes its current size.

## Before pushing a change

- Play a full round in a headless browser at phone size (about 390 pixels wide) and check for script errors.
- For scoring changes, print sample scores and include them in the summary to Jai.
- Real iPhone behavior (keyboard, Messages, clipboard) cannot be tested from a cloud session. Say so, and ask Jai to confirm on his phone.

## Writing style

- Never use the em dash character anywhere: replies, code comments, or game copy.
- Game copy is short, plain and playful.

## Roadmap, in Jai's order

1. **Analytics and a private admin page.** Built in October 2026 (see Analytics above). Original brief: needs a small database (Supabase free tier was the suggestion; Jai creates the account). The game sends one anonymous record per round, keyed by a random ID saved on the device, with no login. Collect:
   - daily unique players (bar per day)
   - hour of day played (bar chart: hour across the bottom, players up the side)
   - average closeness per question (five bars per day)
   - every guess on every question, to set spreads from real data
   - wrong rebus answers people typed, to find answers worth accepting
   - drop-off: opened, solved the rebus, finished all five, shared
   - share rate, split by text and copy
   - returning players day over day
   - how many different days each player has played so far (added at Jai's request, next to returning players)
   - the spread of total scores
2. **Custom domain.** Jai will buy one. Attach it in Vercel, then add the address as its own line in the shared text so it becomes a tappable link.
3. **Saved results and streaks.** One play per day, saved on the device first, accounts later if needed.
4. **Smaller upgrades and mobile polish** as Jai reports them.

## Things to keep in mind

- The name "Spitball" passed one web search for existing games. It has not been checked against the trademark database, and no domain has been bought.
- Vercel's free plan is for personal, non-commercial use. If the game ever makes money, it needs a paid plan or a different host.
- Earlier names were Ballpark Daily, The More You Know, and Give or Take. "Give or Take" and "Ballpark" are existing daily estimation games, which is why they were dropped.
