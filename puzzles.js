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
        fact: "Number 1. His friends Edward, Henry, Gordon and James are numbers 2 through 5. 🚂" },
      { level: "Easy-medium", q: "How fast do Japan's fastest bullet trains run in regular service, in miles per hour?", a: 200, type: "ratio", spread: 40, unit: "mph",
        fact: "About 200 miles per hour (320 km/h), on the line running north from Tokyo. 🚄" },
      { level: "Medium", q: "In what year did the first U.S. train robbery take place?", a: 1866, type: "year", spread: 35, unit: "year",
        fact: "October 6, 1866, a year and a half after the Civil War ended. The case made the Pinkerton detectives famous. 🤠" },
      { level: "Medium-hard", q: "How many stations does the New York City subway have?", a: 472, type: "ratio", spread: 80, unit: "stations",
        fact: "472 by the MTA's count, more than any other subway system in the world. 🚇" },
      { level: "Hard", q: "The longest train ever run was a record-setting freight train in Australia. How many cars did it have?", a: 682, type: "ratio", spread: 90, unit: "cars",
        fact: "682 cars of iron ore, pulled by eight locomotives. End to end, it stretched about four and a half miles. 🚃" }
    ]
  },
  "2026-10-07": {
    rebus: {
      tiles: [{ e: "🌙" }, { e: "🥃" }],
      alt: "Rebus: a crescent moon, plus a small glass of liquor",
      answers: ["moonshot", "moonshots", "moonshine", "moonshooter", "lunarshot"],
      display: "Moon Shot",
      hint: "Two words. The first is up in the night sky. The second is a small drink you knock back in one go."
    },
    theme: "The Moon",
    hype: ["Over the moon!", "One giant leap!", "Houston, we have a winner."],
    oof: ["Houston, we have a problem.", "Lost in space.", "Failure to launch."],
    snippet: "On this day, the Soviet probe <strong>Luna 3</strong> pulled off a true moon shot. It swung around behind the Moon and snapped the first photos ever taken of its far side, a view no human had seen before. So today is all about the Moon.",
    questions: [
      { level: "Easy", q: "How many people have walked on the Moon?", a: 12, type: "ratio", spread: 40, unit: "people",
        fact: "Twelve, all between 1969 and 1972. Nobody has been back since. 👨‍🚀" },
      { level: "Easy-medium", q: "How many days does the Moon take to circle the Earth once?", a: 27, type: "ratio", spread: 40, unit: "days",
        fact: "About 27 days. Full moon to full moon takes closer to 29, because the Earth is moving too. 🌕" },
      { level: "Medium", q: "In what year were the first photos of the far side of the Moon taken?", a: 1959, type: "year", spread: 35, unit: "year",
        fact: "October 7, 1959. Luna 3 developed its own film on board, then scanned the pictures and radioed them home. 📸" },
      { level: "Medium-hard", q: "On average, how far away is the Moon, in miles?", a: 238855, type: "ratio", spread: 100, unit: "miles",
        fact: "About 238,855 miles. You could line up 30 Earths in the gap. 🌍" },
      { level: "Hard", q: "Earth has one moon. How many does Saturn have?", a: 293, type: "ratio", by: "distance", spread: 68, unit: "moons",
        fact: "293 confirmed, more than every other planet combined. Astronomers keep finding more, so the count keeps climbing. 🪐" }
    ]
  },
  "2026-10-08": {
    rebus: {
      tiles: [{ e: "💨" }, { e: "🚤" }],
      alt: "Rebus: a puff of rushing air, plus a small boat",
      answers: ["speedboat", "speedboats", "fastboat", "motorboat", "powerboat", "jetboat"],
      display: "Speedboat",
      hint: "One word. The puff of air means going fast. The second half floats."
    },
    theme: "Speed",
    hype: ["Blazing fast!", "Pedal to the metal!", "Photo finish!"],
    oof: ["Stuck in first gear.", "Flat tire.", "Stalled at the start."],
    snippet: "On this day in 1978, <strong>Ken Warby</strong> drove a speedboat he built in his backyard to 317 miles per hour on a lake in Australia. Nobody has gone faster on water since. So today is all about speed.",
    questions: [
      { level: "Easy", q: "What was Usain Bolt's top speed, in miles per hour?", a: 28, type: "ratio", unit: "mph",
        fact: "About 28 miles per hour, clocked partway through his world record 100 meters in 2009. 🏃" },
      { level: "Easy-medium", q: "What is the highest posted speed limit in the United States, in miles per hour?", a: 85, type: "ratio", unit: "mph",
        fact: "85, on a stretch of toll road outside Austin, Texas. 🤠" },
      { level: "Medium", q: "How fast is the world's fastest roller coaster, in miles per hour?", a: 155, type: "ratio", unit: "mph",
        fact: "155 miles per hour. Falcons Flight in Saudi Arabia took the record when it opened at the end of 2025. 🎢" },
      { level: "Medium-hard", q: "How fast does sound travel through the air, in miles per hour?", a: 767, type: "ratio", unit: "mph",
        fact: "About 767 miles per hour on a mild day. Sound slows down as the air gets colder. 🔊" },
      { level: "Hard", q: "What is the fastest anyone has gone on a bicycle, in miles per hour?", a: 184, type: "ratio", unit: "mph",
        fact: "184 miles per hour. Denise Mueller-Korenek did it in 2018, tucked in behind a race car on Utah's salt flats. 🚴" }
    ]
  },
  "2026-10-09": {
    rebus: {
      tiles: [{ e: "💍" }, { e: "🎵" }],
      alt: "Rebus: a diamond ring, plus musical notes",
      answers: ["ringtone", "ringtones", "ringtune", "ringsong"],
      display: "Ringtone",
      hint: "One word, and your phone plays one when someone calls. The first part goes on a finger."
    },
    theme: "Phones",
    hype: ["Loud and clear!", "Full bars!", "You're on the line!"],
    oof: ["Dropped call.", "Wrong number.", "No signal."],
    snippet: "On this day in 1876, <strong>Alexander Graham Bell</strong> and his assistant Thomas Watson held the first two-way phone conversation over outdoor wires. One was in Boston and the other in Cambridge. So today is all about phones.",
    questions: [
      { level: "Easy", q: "How many digits are in a US phone number, including the area code?", a: 10, type: "ratio", unit: "digits",
        fact: "Ten: a three-digit area code, then seven more. 📞" },
      { level: "Easy-medium", q: "How much did the first iPhone cost when it came out in 2007, in dollars?", a: 499, type: "ratio", unit: "dollars",
        fact: "$499 for the smaller model and $599 for the bigger one, with a two-year contract. Ten weeks later, Apple cut the price by $200. 📱" },
      { level: "Medium", q: "How many miles apart were Bell and Watson on that first two-way call?", a: 2, type: "ratio", unit: "miles",
        fact: "About two miles. They talked for around three hours, and both sides were written down and published. ☎️" },
      { level: "Medium-hard", q: "The first handheld cell phone came out in the 1980s. How many minutes could you talk before its battery died?", a: 30, type: "ratio", unit: "minutes",
        fact: "About 30 minutes, and then it needed roughly 10 hours to recharge. 🔋" },
      { level: "Hard", q: "How much did that first handheld cell phone cost when it went on sale, in dollars?", a: 3995, type: "ratio", unit: "dollars",
        fact: "$3,995 in 1984, which is more than $12,000 in today's money. It was 10 inches long and earned the nickname \"the brick.\" 🧱" }
    ]
  },
  "2026-10-10": {
    rebus: {
      tiles: [{ e: "🌍" }, { e: "💿" }],
      alt: "Rebus: the globe, plus a disc",
      answers: ["worldrecord", "worldrecords", "globalrecord", "earthrecord"],
      display: "World Record",
      hint: "Two words. Every Olympian dreams of breaking one. The first picture is the whole planet."
    },
    theme: "The Olympics",
    hype: ["Going for gold!", "On the podium!", "Gold medal guess!"],
    oof: ["False start.", "Disqualified!", "Didn't make the podium."],
    snippet: "On this day in 1964, the <strong>Tokyo Olympics</strong> opened, the first Games ever held in Asia. The runner who lit the cauldron was a 19-year-old born in Hiroshima on the day the atomic bomb fell. So today is all about the Olympics.",
    questions: [
      { level: "Easy", q: "How long is a marathon, in miles?", a: 26.2, type: "ratio", unit: "miles",
        fact: "26.2 miles. The odd length comes from the 1908 London Olympics, where the course ran from Windsor Castle to finish in front of the royal box. 🏃" },
      { level: "Easy-medium", q: "How many Olympic medals has Michael Phelps won in total?", a: 28, type: "ratio", unit: "medals",
        fact: "28, including 23 golds. Both are the most of any Olympian ever. 🏊" },
      { level: "Medium", q: "How many steps did Usain Bolt take to run his 100 meter world record?", a: 41, type: "ratio", unit: "steps",
        fact: "41 steps, in 9.58 seconds, in Berlin in 2009. 👟" },
      { level: "Medium-hard", q: "How old was the oldest person ever to win an Olympic medal?", a: 72, type: "ratio", unit: "years old",
        fact: "72. Oscar Swahn of Sweden won a silver medal in shooting at the 1920 Games. 🎯" },
      { level: "Hard", q: "Jesse Owens' 1936 gold medal is the most expensive Olympic medal ever sold at auction. How much did it go for, in dollars?", a: 1466574, type: "ratio", unit: "dollars",
        fact: "$1,466,574 in 2013, the most ever paid for any piece of Olympic memorabilia. Owens won four golds in Berlin. 🥇" }
    ]
  }
};
