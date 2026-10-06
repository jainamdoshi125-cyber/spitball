// Spitball puzzles, one per day, keyed by date (YYYY-MM-DD).
// To add a day: copy an entry, change the date key, and fill it in. See README.md for the writing rules.
window.SPITBALL_PUZZLES = {
  "2026-10-06": {
    rebus: {
      tiles: [{ e: "💰" }, { e: "🥷" }],
      alt: "Rebus: a bag of money, plus a masked thief",
      answers: ["moneyheist", "heist", "moneyrobbery", "moneyrobber", "moneythief", "moneyheists", "cashheist", "robbery", "trainrobbery", "bankrobbery", "bankrobber", "bankheist"],
      display: "Money Heist",
      hint: "Two words, and also the name of a hit TV show. The first is what is in the bag. The second is a big, planned robbery."
    },
    theme: "Trains",
    hype: ["Right on track!", "Full steam ahead!", "A first-class guess."],
    oof: ["That one went off the rails.", "Wrong platform.", "You missed the train."],
    snippet: "On this day, the <strong>Reno Gang</strong> pulled off a famous money heist. They boarded a train as it pulled out of Seymour, Indiana, broke open one safe and shoved a second off the moving cars. It was the first peacetime train robbery in U.S. history. So today is all about trains.",
    questions: [
      { level: "Easy", q: "What number is painted on the side of Thomas the Tank Engine?", a: 1, type: "ratio", spread: 40, unit: "",
        fact: "Number 1. His friends Edward, Henry, Gordon and James are numbers 2 through 5." },
      { level: "Easy-medium", q: "How fast do Japan's fastest bullet trains run in regular service, in miles per hour?", a: 200, type: "ratio", spread: 40, unit: "mph",
        fact: "About 200 miles per hour (320 km/h), on the line running north from Tokyo." },
      { level: "Medium", q: "In what year did the first U.S. train robbery take place?", a: 1866, type: "year", spread: 35, unit: "year",
        fact: "October 6, 1866, a year and a half after the Civil War ended. The case made the Pinkerton detectives famous." },
      { level: "Medium-hard", q: "How many stations does the New York City subway have?", a: 472, type: "ratio", spread: 80, unit: "stations",
        fact: "472 by the MTA's count, more than any other subway system in the world." },
      { level: "Hard", q: "The longest train ever run was a record-setting freight train in Australia. How many cars did it have?", a: 682, type: "ratio", spread: 90, unit: "cars",
        fact: "682 cars of iron ore, pulled by eight locomotives. End to end, it stretched about four and a half miles." }
    ]
  }
};
