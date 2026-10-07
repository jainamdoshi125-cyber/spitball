# Spitball

A daily guessing game. Solve the picture rebus to unlock the day's theme, then answer five questions with a number. The closer the guess, the higher the score.

## Files

- `index.html` is the whole game: layout, styling, scoring and the share popup.
- `puzzles.js` holds the puzzles, one per day, keyed by date (`YYYY-MM-DD`).

The puzzle changes for everyone at 12:01 AM Eastern time. If a day has no puzzle, the most recent earlier one is shown.

## Adding a day's puzzle

Add an entry to `puzzles.js` under the new date. Each entry has:

- `rebus`: `tiles` (pictures only), `alt` (a description for screen readers), `answers` (accepted answers in lowercase with no spaces), `display` (the answer as shown) and `hint`.
- `theme`: the day's broad topic.
- `hype` and `oof`: three themed reaction lines each, for great and terrible guesses.
- `snippet`: the "on this day" story. It must not give away any answer.
- `questions`: five, from easy to hard. Each has `q`, `a`, `level`, `type` (`"ratio"` for numbers, `"year"` for years), `unit` and `fact`, plus an optional `spread`.

## Writing rules

- The hook is a real event from that date. The theme is one level broader (a film becomes the movies).
- At most one or two questions about the event itself. The rest should be things anyone can reason toward.
- Every answer is a number. State the unit.
- Numbers score by plain distance from the answer. The `level` sets the range, which is how far off (as a percent of the answer) earns 50 points: Easy 40, Easy-medium 47, Medium 55, Medium-hard 63, Hard 70.
- Only add `spread` to a question that should break from its level's range.
- For years, `spread` is a percent of how long ago the event was (35 is standard).
- End every `fact` with one emoji that fits it, after the final period.
- Check every fact against a source before publishing.

## Scoring

Each question gives 0 to 100 for closeness. Questions 1 and 2 count once, question 3 counts double, and questions 4 and 5 count triple, for a maximum of 1,000.
