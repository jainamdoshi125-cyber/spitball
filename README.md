# Spitball

A daily guessing game. Solve the picture rebus to unlock the day's theme, then answer five questions with a number. The closer the guess, the higher the score.

## Files

- `index.html` is the whole game: layout, styling, scoring and the share popup.
- `puzzles.js` holds the puzzles, one per day, keyed by date (`YYYY-MM-DD`).

Players get the puzzle for their own calendar day. If a day has no puzzle, the most recent earlier one is shown.

## Adding a day's puzzle

Add an entry to `puzzles.js` under the new date. Each entry has:

- `rebus`: `tiles` (pictures only), `alt` (a description for screen readers), `answers` (accepted answers in lowercase with no spaces), `display` (the answer as shown) and `hint`.
- `theme`: the day's broad topic.
- `hype` and `oof`: three themed reaction lines each, for great and terrible guesses.
- `snippet`: the "on this day" story. It must not give away any answer.
- `questions`: five, from easy to hard. Each has `q`, `a`, `type` (`"ratio"` for numbers, `"year"` for years), `spread`, `unit` and `fact`.

## Writing rules

- The hook is a real event from that date. The theme is one level broader (a film becomes the movies).
- At most one or two questions about the event itself. The rest should be things anyone can reason toward.
- Every answer is a number. State the unit.
- `spread` is how far off earns 50 points, as a percent. Set it by how guessable the answer is, not how hard the question sounds:
  - about 30 for facts people can anchor on (keys on a piano)
  - about 50 for things you can reason toward (the speed of a train)
  - 80 to 100 for shots in the dark (stations in a subway system)
- For years, `spread` is a percent of how long ago the event was (35 is standard).
- Check every fact against a source before publishing.

## Scoring

Each question gives 0 to 100 for closeness. Questions 1 and 2 count once, question 3 counts double, and questions 4 and 5 count triple, for a maximum of 1,000.
