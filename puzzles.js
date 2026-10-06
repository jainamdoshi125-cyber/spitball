// Spitball puzzles, one per day, keyed by date (YYYY-MM-DD).
// To add a day: copy an entry, change the date key, and fill it in. See README.md for the writing rules.
window.SPITBALL_PUZZLES = {
  "2026-10-06": {
    rebus: {
      tiles: [{ e: "🚂" }, { e: "💰" }],
      alt: "Rebus: a steam train, plus a bag of money",
      answers: ["trainrobbery", "trainrobber", "trainrobbers", "trainheist", "greattrainrobbery", "firsttrainrobbery", "robatrain", "moneytrain"],
      display: "Train Robbery",
      hint: "Two words. The first picture is what it looks like. The second word is what outlaws did to it to get the money."
    },
    theme: "Trains",
    hype: ["Right on track!", "Full steam ahead!", "A first-class guess."],
    oof: ["That one went off the rails.", "Wrong platform.", "You missed the train."],
    snippet: "On this day, the <strong>Reno Gang</strong> boarded a train as it pulled out of Seymour, Indiana, broke open one safe and shoved a second off the moving cars. It was the first peacetime train robbery in U.S. history. So today is all about trains.",
    questions: [
      { level: "Easy", q: "What number is painted on the side of Thomas the Tank Engine?", a: 1, type: "ratio", spread: 40, unit: "",
        fact: "Number 1. His friends Edward, Henry, Gordon and James are numbers 2 through 5." },
      { level: "Easy-medium", q: "How fast do Japan's fastest bullet trains run in regular service, in miles per hour?", a: 200, type: "ratio", spread: 40, unit: "mph",
        fact: "About 200 miles per hour (320 km/h), on the line running north from Tokyo." },
      { level: "Medium", q: "In what year did the first U.S. train robbery take place?", a: 1866, type: "year", spread: 35, unit: "year",
        fact: "October 6, 1866, a year and a half after the Civil War ended. The case made the Pinkerton detectives famous." },
      { level: "Medium-hard", q: "How many stations does the New York City subway have?", a: 472, type: "ratio", spread: 50, unit: "stations",
        fact: "472 by the MTA's count, more than any other subway system in the world." },
      { level: "Hard", q: "How many miles long is the Trans-Siberian Railway, the longest rail line in the world?", a: 5772, type: "ratio", spread: 60, unit: "miles",
        fact: "5,772 miles from Moscow to Vladivostok, crossing eight time zones. The full ride takes about a week." }
    ]
  }
};
