// Spitball puzzles, one per day, keyed by date (YYYY-MM-DD).
// To add a day: copy an entry, change the date key, and fill it in. See README.md for the writing rules.
window.SPITBALL_PUZZLES = {
  "2026-10-06": {
  rebus: {
    tiles: [{ e: "🎷" }, { e: "🎤" }],
    alt: "Rebus: a saxophone, plus a microphone",
    answers: ["jazzsinger", "jazzsingers", "ajazzsinger"],
    display: "The Jazz Singer",
    hint: "Two words, and a very old movie. The first is the music a saxophone is famous for. The second is the person holding the microphone."
  },
  theme: "Sound and Music",
  hype: ["Music to my ears!", "Pitch perfect.", "Encore!"],
  oof: ["That one fell flat.", "Way out of tune.", "Someone cut the mic."],
  snippet: "On this day, <strong>The Jazz Singer</strong> premiered in New York City. It was the first feature film in which audiences heard the actors sing and speak, and it ended the silent era almost overnight. So today is all about sound and music.",
  questions: [
    { level: "Easy", q: "How many strings does a standard guitar have?", a: 6, type: "ratio", spread: 35, unit: "strings",
      fact: "Six. A bass guitar usually has four, and a ukulele has four too." },
    { level: "Easy-medium", q: "How many keys are on a standard piano?", a: 88, type: "ratio", spread: 30, unit: "keys",
      fact: "88 in total: 52 white and 36 black." },
    { level: "Medium", q: "In what year did The Jazz Singer premiere?", a: 1927, type: "year", spread: 35, unit: "year",
      fact: "October 6, 1927. Within about three years, Hollywood had all but stopped making silent films." },
    { level: "Medium-hard", q: "How fast does sound travel through air, in miles per hour?", a: 767, type: "ratio", spread: 50, unit: "mph",
      fact: "About 767 miles per hour at sea level. That is why thunder arrives after the lightning." },
    { level: "Hard", q: "Orchestras tune to the note A. How many vibrations per second is that note?", a: 440, type: "ratio", spread: 60, unit: "per second",
      fact: "440 per second, known as A440. It became the international standard in 1955." }
  ]
}
};
