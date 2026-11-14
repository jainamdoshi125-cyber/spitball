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
  },
  "2026-10-11": {
    rebus: {
      tiles: [{ e: "🛋️" }, { e: "🥔" }],
      alt: "Rebus: a couch, plus a potato",
      answers: ["couchpotato", "couchpotatoes", "couchpotatos", "sofapotato"],
      display: "Couch Potato",
      hint: "Two words for someone who watches TV all day. Where you sit, plus a vegetable."
    },
    theme: "TV",
    hype: ["Must-see TV!", "Instant classic!", "Renewed for another season!"],
    oof: ["Cue the laugh track.", "Change the channel.", "Canceled after one episode."],
    snippet: "On this day in 1975, <strong>Saturday Night Live</strong> aired for the first time, with George Carlin as host. So today is all about TV.",
    questions: [
      { level: "Easy", q: "How many seasons of Friends were there?", a: 10, type: "ratio", unit: "seasons",
        fact: "10 seasons and 236 episodes, from 1994 to 2004. ☕" },
      { level: "Easy-medium", q: "How old was the youngest person ever to host Saturday Night Live?", a: 7, type: "ratio", unit: "years old",
        fact: "7. Drew Barrymore hosted in 1982, months after E.T. came out, and still holds the record. 🎬" },
      { level: "Medium", q: "How many Jeopardy! games in a row did Ken Jennings win?", a: 74, type: "ratio", unit: "games",
        fact: "74 wins in a row in 2004, worth $2,520,700. Today he hosts the show. 🧠" },
      { level: "Medium-hard", q: "NBC begged Jerry Seinfeld to make one more season of Seinfeld, and he said no. How much did they offer him per episode, in millions of dollars?", a: 5, type: "ratio", unit: "million dollars",
        fact: "$5 million an episode, and he walked away anyway. The show ended in 1998 while it was the top-rated show on TV. 💸" },
      { level: "Hard", q: "In what year did the first official TV commercial air?", a: 1941, type: "year", unit: "year",
        fact: "1941. A Bulova watch ad aired in New York before a baseball game, and it cost $9. ⌚" }
    ]
  },
  "2026-10-12": {
    rebus: {
      tiles: [{ e: "⚪" }, { e: "🏠" }],
      alt: "Rebus: a white circle, plus a house",
      answers: ["whitehouse", "whitehouses", "whitehome"],
      display: "White House",
      hint: "Two words. The most famous address in America. A color, plus where you live."
    },
    theme: "Homes",
    hype: ["Right at home!", "Move-in ready!", "Home run!"],
    oof: ["Wrong address.", "Needs a fixer-upper.", "Back to the drawing board."],
    snippet: "On this day in 1901, <strong>Theodore Roosevelt</strong> made it official: the president's house would be called the White House. Before that, most people called it the Executive Mansion. So today is all about homes.",
    questions: [
      { level: "Easy", q: "How many years long is a standard US home mortgage?", a: 30, type: "ratio", unit: "years",
        fact: "30 years, though 15-year loans are popular too. 🏡" },
      { level: "Easy-medium", q: "How many bathrooms are in the White House?", a: 35, type: "ratio", unit: "bathrooms",
        fact: "35 bathrooms, spread over six floors. 🛁" },
      { level: "Medium", q: "How many hotels does Disney own and run at Walt Disney World in Florida?", a: 31, type: "ratio", unit: "hotels",
        fact: "31 Disney hotels, with about 23,000 rooms between them. The whole resort is bigger than Manhattan. 🏰" },
      { level: "Medium-hard", q: "How many rooms are in the White House?", a: 132, type: "ratio", unit: "rooms",
        fact: "132 rooms, plus 412 doors, 147 windows and 28 fireplaces. 🇺🇸" },
      { level: "Hard", q: "How many trees are in the gardens of Versailles?", a: 200000, type: "ratio", unit: "trees",
        fact: "About 200,000 trees, spread across roughly 2,000 acres of gardens. 🌳" }
    ]
  },
  "2026-10-13": {
    rebus: {
      tiles: [{ e: "⏰" }, { e: "🦉" }],
      alt: "Rebus: an alarm clock, plus an owl",
      answers: ["clockwise", "clockwize", "clockwyse"],
      display: "Clockwise",
      hint: "One word for the direction a clock's hands turn. The second picture is a very wise bird."
    },
    theme: "Time",
    hype: ["Right on time!", "Like clockwork!", "Perfect timing!"],
    oof: ["Fashionably late.", "Wrong time zone.", "Time to try again."],
    snippet: "On this day in 1884, countries meeting in Washington voted to make <strong>Greenwich, England</strong> the starting line for the world's clocks. So today is all about time.",
    questions: [
      { level: "Easy", q: "How many hours ahead of New York is London?", a: 5, type: "ratio", unit: "hours",
        fact: "5 hours for most of the year. For a few weeks each spring and about a week each fall it's 4, because the US and UK change their clocks on different dates. 🇬🇧" },
      { level: "Easy-medium", q: "How many time zones do the 50 US states cover?", a: 6, type: "ratio", unit: "time zones",
        fact: "6: Eastern, Central, Mountain, Pacific, Alaska and Hawaii-Aleutian. Count the US territories too and it's 9. 🗺️" },
      { level: "Medium", q: "How many US states skip daylight saving time and never change their clocks?", a: 2, type: "ratio", unit: "states",
        fact: "2: Hawaii and Arizona. Inside Arizona, though, the Navajo Nation does change its clocks. ☀️" },
      { level: "Medium-hard", q: "How many times a day do the hour and minute hands on a clock line up exactly?", a: 22, type: "ratio", unit: "times",
        fact: "22. They meet about every 65 minutes, so it happens 11 times every 12 hours, not 12. 🕰️" },
      { level: "Hard", q: "The world's earliest and latest time zones are far apart. At any moment, how many hours apart can two places on Earth be?", a: 26, type: "ratio", unit: "hours",
        fact: "26. Kiribati's Line Islands run 14 hours ahead of Greenwich, while tiny, empty Baker Island sits 12 hours behind. 🌐" }
    ]
  },
  "2026-10-14": {
    rebus: {
      tiles: [{ e: "📦" }, { e: "🏢" }],
      alt: "Rebus: a cardboard box, plus an office building",
      answers: ["boxoffice", "boxoffices", "boxofice"],
      display: "Box Office",
      hint: "Two words. Where a movie's ticket sales get counted. A cardboard container, plus a work building."
    },
    theme: "The Movies",
    hype: ["Oscar-worthy!", "That's a wrap!", "Blockbuster guess!"],
    oof: ["Straight to DVD.", "Cut from the final edit.", "Box office flop."],
    snippet: "On this day in 1888, <strong>Louis Le Prince</strong> filmed a few people strolling around a garden in Leeds, England. It lasts about two seconds, and it is the oldest film that still survives. So today is all about the movies.",
    questions: [
      { level: "Easy", q: "How many Harry Potter movies are there?", a: 8, type: "ratio", unit: "movies",
        fact: "8 movies, from 2001 to 2011. The last book was split into two films. ⚡" },
      { level: "Easy-medium", q: "How many movies are in the main Star Wars \"Skywalker saga\"?", a: 9, type: "ratio", unit: "movies",
        fact: "9, from the first film in 1977 to The Rise of Skywalker in 2019. 🌌" },
      { level: "Medium", q: "Meryl Streep holds the record for the most Oscar nominations by any actor. How many has she had?", a: 21, type: "ratio", unit: "nominations",
        fact: "21 nominations, and she won 3 of them. 🏆" },
      { level: "Medium-hard", q: "How many official James Bond movies have been made?", a: 25, type: "ratio", unit: "movies",
        fact: "25 official films, from Dr. No in 1962 to No Time to Die in 2021. 🍸" },
      { level: "Hard", q: "The movie Titanic cost more to make than the real ship did back in 1912. How much did the movie cost, in millions of dollars?", a: 200, type: "ratio", unit: "million dollars",
        fact: "$200 million, the most expensive movie ever made at the time. The real ship cost about $7.5 million to build. 🚢" }
    ]
  },
  "2026-10-15": {
    rebus: {
      tiles: [{ e: "☀️" }, { e: "💡" }],
      alt: "Rebus: a shining sun, plus a light bulb",
      answers: ["brightidea", "brightideas", "sunlight", "brightlight"],
      display: "Bright Idea",
      hint: "Two words for a clever thought. Something very shiny, plus what a light bulb means over someone's head."
    },
    theme: "Light",
    hype: ["Bright idea!", "Lit!", "Shining bright!"],
    oof: ["Lights out.", "Total blackout.", "Blown fuse."],
    snippet: "On this day in 1878, <strong>Thomas Edison</strong> started the Edison Electric Light Company to bring electric light into people's homes. So today is all about light.",
    questions: [
      { level: "Easy", q: "How many colors are in a rainbow?", a: 7, type: "ratio", unit: "colors",
        fact: "7: red, orange, yellow, green, blue, indigo and violet. Isaac Newton picked seven to match the notes of a musical scale. 🌈" },
      { level: "Easy-medium", q: "How many minutes does sunlight take to reach Earth?", a: 8, type: "ratio", unit: "minutes",
        fact: "About 8 minutes, plus a few seconds. The sunshine on your face left the sun before you started this puzzle. ☀️" },
      { level: "Medium", q: "Every night, the Eiffel Tower sparkles for five minutes at the top of each hour. How many light bulbs make it sparkle?", a: 20000, type: "ratio", unit: "bulbs",
        fact: "20,000 bulbs. The sparkle first lit up at midnight on New Year's Eve 1999. ✨" },
      { level: "Medium-hard", q: "How fast does light travel, in miles per second?", a: 186282, type: "ratio", unit: "miles per second",
        fact: "About 186,282 miles per second. That's fast enough to circle the Earth more than 7 times in one second. ⚡" },
      { level: "Hard", q: "Lightning strikes somewhere on Earth constantly. About how many times per second?", a: 44, type: "ratio", unit: "strikes per second",
        fact: "About 44 times a second, or roughly 1.4 billion flashes a year. The stormiest spot on Earth is a lake in Venezuela. 🌩️" }
    ]
  },
  "2026-10-16": {
    rebus: {
      tiles: [{ e: "🚗" }, { e: "🎵" }],
      alt: "Rebus: a car, plus musical notes",
      answers: ["cartoon", "cartoons", "cartune", "cartunes"],
      display: "Cartoon",
      hint: "One word for an animated show. Say a car and a tune together, fast."
    },
    theme: "Cartoons",
    hype: ["That's all, folks!", "Animated genius!", "Toon-tastic!"],
    oof: ["Back to the drawing board.", "Cartoon logic.", "Sufferin' succotash!"],
    snippet: "On this day in 1923, brothers <strong>Walt and Roy Disney</strong> started a little cartoon studio in Los Angeles. You might have heard of it. So today is all about cartoons.",
    questions: [
      { level: "Easy", q: "How many members are in Scooby-Doo's Mystery Inc. gang, counting Scooby?", a: 5, type: "ratio", unit: "members",
        fact: "5: Fred, Daphne, Velma, Shaggy and Scooby. 🐶" },
      { level: "Easy-medium", q: "How many Disney theme parks are there around the world?", a: 12, type: "ratio", unit: "parks",
        fact: "12 parks across six resorts: Florida, California, Tokyo, Paris, Hong Kong and Shanghai. 🏰" },
      { level: "Medium", q: "How old was Walt Disney when Mickey Mouse made his big screen debut in 1928?", a: 26, type: "ratio", unit: "years old",
        fact: "26. Walt also did Mickey's voice himself until 1947. 🐭" },
      { level: "Medium-hard", q: "Lightning McQueen's race number in Cars is a secret nod to the year Toy Story came out. What number is painted on his car?", a: 95, type: "ratio", unit: "",
        fact: "95, for 1995, the year Toy Story came out. It was almost 57, the birth year of director John Lasseter. 🏎️" },
      { level: "Hard", q: "Toy Story 3 was the first animated movie ever to pass a big box office milestone. How much did it make worldwide, in millions of dollars?", a: 1067, type: "ratio", unit: "million dollars",
        fact: "About $1,067 million, just over a billion dollars. It was the first animated movie to pass the billion-dollar mark. 🤠" }
    ]
  },
  "2026-10-17": {
    rebus: {
      tiles: [{ e: "🧠" }, { e: "⛈️" }],
      alt: "Rebus: a brain, plus a thunderstorm",
      answers: ["brainstorm", "brainstorms", "brainstorming"],
      display: "Brainstorm",
      hint: "One word for coming up with lots of ideas. A thinking organ, plus wild weather."
    },
    theme: "The Human Body",
    hype: ["Big brain energy!", "Genius!", "Nailed it, Einstein!"],
    oof: ["Brain freeze.", "Funny bone.", "Skipped a beat."],
    snippet: "On this day in 1933, <strong>Albert Einstein</strong> arrived in America to start a new life. His brain was so famous that after he died, a doctor kept it to study. So today is all about the human body.",
    questions: [
      { level: "Easy", q: "How many teeth does an adult have, counting wisdom teeth?", a: 32, type: "ratio", unit: "teeth",
        fact: "32, including 4 wisdom teeth. Kids have just 20 baby teeth. 🦷" },
      { level: "Easy-medium", q: "How many bones are in the adult human body?", a: 206, type: "ratio", unit: "bones",
        fact: "206. Babies are born with about 270, and some fuse together as they grow. 🦴" },
      { level: "Medium", q: "About how many pounds does an adult human brain weigh?", a: 3, type: "ratio", unit: "pounds",
        fact: "About 3 pounds. Einstein's weighed about 2.7, a little under average. 🧠" },
      { level: "Medium-hard", q: "The oldest person ever recorded was a French woman named Jeanne Calment. How old did she live to be?", a: 122, type: "ratio", unit: "years old",
        fact: "122 years and 164 days. She kept riding her bicycle until she turned 100. 🚲" },
      { level: "Hard", q: "About how many times does your heart beat in one day?", a: 100000, type: "ratio", unit: "beats",
        fact: "About 100,000 beats a day, or around 3 billion over a lifetime. ❤️" }
    ]
  },
  "2026-10-18": {
    rebus: {
      tiles: [{ e: "🧊" }, { e: "📦" }],
      alt: "Rebus: an ice cube, plus a cardboard box",
      answers: ["icebox", "iceboxes", "icechest"],
      display: "Icebox",
      hint: "One word: an old name for a fridge, and what critics called Alaska. Frozen water, plus a container."
    },
    theme: "The 50 States",
    hype: ["Coast to coast!", "State champion!", "All-American!"],
    oof: ["Lost on the map.", "Wrong turn at Albuquerque.", "Missed the exit."],
    snippet: "On this day in 1867, the US officially took over <strong>Alaska</strong>, bought from Russia. Critics called it a frozen waste of money. So today is all about the 50 states.",
    questions: [
      { level: "Easy", q: "How many US states touch the Pacific Ocean?", a: 5, type: "ratio", unit: "states",
        fact: "5: Washington, Oregon, California, Alaska and Hawaii. 🌊" },
      { level: "Easy-medium", q: "How many US states share a border with Canada?", a: 13, type: "ratio", unit: "states",
        fact: "13, from Alaska and Washington all the way to Maine. 🍁" },
      { level: "Medium", q: "How much did the US pay Russia for Alaska, in millions of dollars?", a: 7.2, type: "ratio", unit: "million dollars",
        fact: "$7.2 million, which works out to about 2 cents an acre. 💰" },
      { level: "Medium-hard", q: "Alaska is the biggest state by far. About how many times bigger is it than Texas?", a: 2.5, type: "ratio", unit: "times bigger",
        fact: "About 2.5 times: roughly 665,000 square miles to Texas's 269,000. 🐻" },
      { level: "Hard", q: "How many national parks does the United States have?", a: 63, type: "ratio", unit: "national parks",
        fact: "63, and California has the most with 9. 🏞️" }
    ]
  },
  "2026-10-19": {
    rebus: {
      tiles: [{ e: "🐂" }, { e: "🛒" }],
      alt: "Rebus: a bull, plus a shopping cart",
      answers: ["bullmarket", "bullmarkets"],
      display: "Bull Market",
      hint: "Two words for when stocks keep going up. A big horned animal, plus where you shop for groceries."
    },
    theme: "Money",
    hype: ["Cha-ching!", "Money in the bank!", "Jackpot!"],
    oof: ["Bankrupt.", "Overdrawn.", "Two cents short."],
    snippet: "On this day in 1987, the stock market had its worst day ever, a crash known as <strong>Black Monday</strong>. So today is all about money.",
    questions: [
      { level: "Easy", q: "In Monopoly, how much money do you collect when you pass Go?", a: 200, type: "ratio", unit: "dollars",
        fact: "$200 every time. Each player starts the game with $1,500. 🎩" },
      { level: "Easy-medium", q: "How many quarters come in a standard bank roll?", a: 40, type: "ratio", unit: "quarters",
        fact: "40 quarters, so a roll is worth $10. 🪙" },
      { level: "Medium", q: "Counting old bills that are no longer made, how many different dollar amounts has the US ever printed bills in, from $1 up?", a: 12, type: "ratio", unit: "amounts",
        fact: "12, from $1 all the way to $100,000. The big bills were last printed in 1945, and the $100,000 one was only ever used between banks. 💵" },
      { level: "Medium-hard", q: "How many European countries use the euro as their money?", a: 21, type: "ratio", unit: "countries",
        fact: "21. Bulgaria became the newest member in January 2026. 💶" },
      { level: "Hard", q: "In 2010, a programmer made the first known purchase with bitcoin: two pizzas. How many bitcoins did he pay?", a: 10000, type: "ratio", unit: "bitcoins",
        fact: "10,000 bitcoins, on May 22, 2010. Fans now celebrate it every year as Bitcoin Pizza Day. 🍕" }
    ]
  },
  "2026-10-20": {
    rebus: {
      tiles: [{ e: "📖" }, { e: "🪱" }],
      alt: "Rebus: an open book, plus a worm",
      answers: ["bookworm", "bookworms", "bookwurm"],
      display: "Bookworm",
      hint: "One word for someone who loves to read. Something you read, plus a wiggly creature."
    },
    theme: "Books",
    hype: ["Page turner!", "By the book!", "A real bookworm!"],
    oof: ["Lost the plot.", "Back to the library.", "Plot twist."],
    snippet: "On this day in 1955, <strong>The Return of the King</strong> was published, finishing The Lord of the Rings. So today is all about books.",
    questions: [
      { level: "Easy", q: "How many books are in The Chronicles of Narnia?", a: 7, type: "ratio", unit: "books",
        fact: "7, starting with The Lion, the Witch and the Wardrobe in 1950. 🦁" },
      { level: "Easy-medium", q: "Dr. Seuss wrote Green Eggs and Ham on a bet that he couldn't write a book using only a small number of different words. How many words?", a: 50, type: "ratio", unit: "words",
        fact: "50 words, on a $50 bet with his editor. Seuss won. 🥚" },
      { level: "Medium", q: "In The Hobbit, Bilbo sets off on an adventure with a band of dwarves. How many dwarves?", a: 13, type: "ratio", unit: "dwarves",
        fact: "13 dwarves, led by Thorin Oakenshield. Not to be confused with Snow White's seven. ⛏️" },
      { level: "Medium-hard", q: "Agatha Christie is the best-selling novelist of all time. How many detective novels did she write?", a: 66, type: "ratio", unit: "novels",
        fact: "66 detective novels, plus 14 collections of short stories. Her books have sold more than two billion copies. 🔍" },
      { level: "Hard", q: "The most overdue library book ever was finally returned to a college in England. How many years late was it?", a: 288, type: "ratio", unit: "years",
        fact: "288 years. It was borrowed around 1667 and returned in the 1950s, and the college charged no late fee. 📚" }
    ]
  },
  "2026-10-21": {
    rebus: {
      tiles: [{ e: "⭐" }, { e: "🌃" }],
      alt: "Rebus: a star, plus a city at night",
      answers: ["starrynight", "thestarrynight", "starrynights", "starnight", "starrysky", "starrynite"],
      display: "The Starry Night",
      hint: "A famous Van Gogh painting. What twinkles in the sky, plus when you can see them."
    },
    theme: "Art",
    hype: ["Masterpiece!", "Picture perfect!", "Frame that one!"],
    oof: ["Back to the drawing board.", "Smudged it.", "Paint by wrong numbers."],
    snippet: "On this day in 1959, the <strong>Guggenheim Museum</strong> opened in New York: a giant white spiral where you walk up a ramp to see the art. So today is all about art.",
    questions: [
      { level: "Easy", q: "The very first box of Crayola crayons came out in 1903. How many crayons were in it?", a: 8, type: "ratio", unit: "crayons",
        fact: "8: red, orange, yellow, green, blue, violet, brown and black. The box cost a nickel. 🖍️" },
      { level: "Easy-medium", q: "The Mona Lisa is famously small in person. How tall is it, in inches?", a: 30, type: "ratio", unit: "inches",
        fact: "About 30 inches tall and 21 wide, smaller than most TVs. She hangs behind bulletproof glass at the Louvre. 🖼️" },
      { level: "Medium", q: "Vincent van Gogh couldn't afford models, so he often painted himself. How many self-portraits did he paint?", a: 35, type: "ratio", unit: "self-portraits",
        fact: "35 painted self-portraits survive, and 27 of them were made in just two years in Paris. 🪞" },
      { level: "Medium-hard", q: "Michelangelo spent years painting the Sistine Chapel ceiling. How many years did it take?", a: 4, type: "ratio", unit: "years",
        fact: "4 years, from 1508 to 1512. He painted standing on scaffolding with his head tilted back, not lying down like the legend says. 🎨" },
      { level: "Hard", q: "The Louvre is the biggest art museum in the world. How many works of art does it have on display?", a: 35000, type: "ratio", unit: "works of art",
        fact: "Roughly 35,000, and that's only a small slice of its collection of more than 380,000 objects. 🏛️" }
    ]
  },
  "2026-10-22": {
    rebus: {
      tiles: [{ e: "🪨" }, { e: "🌟" }],
      alt: "Rebus: a rock, plus a shining star",
      answers: ["rockstar", "rockstars", "rocknroll", "rockandroll"],
      display: "Rock Star",
      hint: "A famous musician. A big stone, plus something that twinkles."
    },
    theme: "Music",
    hype: ["Encore!", "Pitch perfect!", "Rock on!"],
    oof: ["Off key.", "Wrong note.", "Tone deaf."],
    snippet: "On this day in 1883, the <strong>Metropolitan Opera</strong> opened in New York with a performance of Faust. So today is all about music.",
    questions: [
      { level: "Easy", q: "How many keys are on a standard piano?", a: 88, type: "ratio", unit: "keys",
        fact: "88: 52 white and 36 black, covering just over seven octaves. 🎹" },
      { level: "Easy-medium", q: "Mozart wrote music that's still famous more than 200 years later, but he died young. How old was he?", a: 35, type: "ratio", unit: "years old",
        fact: "35. He was born in 1756 and died in 1791, after writing more than 600 pieces of music. 🎼" },
      { level: "Medium", q: "The Beatles hold the record for the most #1 hits on the Billboard Hot 100. How many #1 hits did they have?", a: 20, type: "ratio", unit: "#1 hits",
        fact: "20, from I Want to Hold Your Hand in 1964 to The Long and Winding Road in 1970. Mariah Carey is right behind with 19. 🪲" },
      { level: "Medium-hard", q: "Taylor Swift holds the record for the most Album of the Year wins at the Grammys. How many has she won?", a: 4, type: "ratio", unit: "wins",
        fact: "4: Fearless, 1989, Folklore and Midnights. No other artist has won more than three. 🏆" },
      { level: "Hard", q: "Today's opera house at Lincoln Center is one of the biggest in the world. How many seats does it have?", a: 3794, type: "ratio", unit: "seats",
        fact: "3,794 seats, plus about 245 spots for people standing. Its crystal chandeliers rise up to the ceiling just before every show. 🎭" }
    ]
  },
  "2026-10-23": {
    rebus: {
      tiles: [{ e: "🎩" }, { e: "🪄" }],
      alt: "Rebus: a top hat, plus a magic wand",
      answers: ["hattrick", "hattricks", "hattrik"],
      display: "Hat Trick",
      hint: "Three goals in one game. Something you wear on your head, plus what a magician does."
    },
    theme: "Soccer",
    hype: ["GOAL!", "Top corner!", "Hat trick hero!"],
    oof: ["Red card.", "Own goal.", "Wide of the post."],
    snippet: "On this day in 1940, <strong>Pelé</strong> was born in Brazil. He grew up to be one of the greatest soccer players ever. So today is all about soccer.",
    questions: [
      { level: "Easy", q: "How many players does each team have on the field in a soccer game?", a: 11, type: "ratio", unit: "players",
        fact: "11, including the goalkeeper. 🧤" },
      { level: "Easy-medium", q: "This summer's World Cup in North America was the biggest ever. How many teams played in it?", a: 48, type: "ratio", unit: "teams",
        fact: "48 teams, up from 32, playing 104 matches across the US, Canada and Mexico. 🌎" },
      { level: "Medium", q: "Pelé is the only player ever to win a certain number of World Cups. How many did he win?", a: 3, type: "ratio", unit: "World Cups",
        fact: "3: in 1958, 1962 and 1970. He was just 17 at his first one. 🏆" },
      { level: "Medium-hard", q: "The Ballon d'Or is the award for the best soccer player in the world. Lionel Messi has won it a record number of times. How many?", a: 8, type: "ratio", unit: "wins",
        fact: "8, from 2009 to 2023. Cristiano Ronaldo is next with 5. 🐐" },
      { level: "Hard", q: "When David Beckham moved to the LA Galaxy in 2007, his five-year deal was billed as the biggest in sports history. How much was it worth, in millions of dollars?", a: 250, type: "ratio", unit: "million dollars",
        fact: "About $250 million, counting his salary and sponsorships. The MLS rule that lets teams sign big stars is still nicknamed the Beckham Rule. ⭐" }
    ]
  },
  "2026-10-25": {
    rebus: {
      tiles: [{ e: "🔴" }, { e: "👁️" }],
      alt: "Rebus: a red circle, plus an eye",
      answers: ["redeye", "redeyes", "redeyeflight", "redi"],
      display: "Red-Eye",
      hint: "An overnight flight. A color, plus what you see with."
    },
    theme: "Flying",
    hype: ["Smooth landing!", "Cleared for takeoff!", "First class!"],
    oof: ["Turbulence.", "Flight delayed.", "Lost luggage."],
    snippet: "On this day in 2007, the <strong>Airbus A380</strong>, the biggest passenger plane ever built, carried its first passengers, from Singapore to Sydney. So today is all about flying.",
    questions: [
      { level: "Easy", q: "How many engines does a Boeing 747 jumbo jet have?", a: 4, type: "ratio", unit: "engines",
        fact: "4 engines. Newer long-haul jets like the Boeing 787 fly just as far with only 2. 🛫" },
      { level: "Easy-medium", q: "The Wright brothers made the first airplane flight in 1903. How many seconds did it last?", a: 12, type: "ratio", unit: "seconds",
        fact: "12 seconds, covering 120 feet. That's shorter than the wingspan of a Boeing 747. 🛩️" },
      { level: "Medium", q: "The longest nonstop flight in the world goes from New York to Singapore. How many hours does it take?", a: 19, type: "ratio", unit: "hours",
        fact: "About 19 hours (18 hours and 40 minutes on a typical day), covering roughly 9,500 miles. 🌏" },
      { level: "Medium-hard", q: "The Airbus A380 is the biggest passenger plane in the world. How many passengers is it allowed to carry, at most?", a: 853, type: "ratio", unit: "passengers",
        fact: "853 is the safety limit. Most airlines fit about 500 seats, and some even put showers on board. 🚿" },
      { level: "Hard", q: "In the 1980s, American Airlines' boss found a sneaky way to save money: take one olive out of every salad served to passengers. Nobody noticed. How much did it save the airline each year, in dollars?", a: 40000, type: "ratio", unit: "dollars",
        fact: "$40,000 a year. The boss, Bob Crandall, was famous for hunting down savings like this. 🫒" }
    ]
  },
  "2026-10-26": {
    rebus: {
      tiles: [{ e: "🐄" }, { e: "👦" }],
      alt: "Rebus: a cow, plus a boy",
      answers: ["cowboy", "cowboys", "cowkid", "cowgirl"],
      display: "Cowboy",
      hint: "A rancher on horseback. A farm animal, plus a kid."
    },
    theme: "The Wild West",
    hype: ["Yeehaw!", "Fastest draw in the West!", "Bullseye, partner!"],
    oof: ["Bit the dust.", "Back to the ranch.", "Missed by a mile, partner."],
    snippet: "On this day in 1881, Wyatt Earp and Doc Holliday faced off against a gang of outlaws at the <strong>O.K. Corral</strong> in Tombstone, Arizona. So today is all about the Wild West.",
    questions: [
      { level: "Easy", q: "Cowboys wore a famous big hat named after how much it could supposedly hold. How many gallons?", a: 10, type: "ratio", unit: "gallons",
        fact: "10 gallons, supposedly. It really holds less than one, and the name may come from a Spanish word for the braid around the hat. 🤠" },
      { level: "Easy-medium", q: "The Gunfight at the O.K. Corral is the most famous shootout in history, but it was over fast. How many seconds did it last?", a: 30, type: "ratio", unit: "seconds",
        fact: "About 30 seconds, with about 30 shots fired. 🔫" },
      { level: "Medium", q: "Before the telegraph, the Pony Express raced mail across the country on horseback. How many days did a letter take from Missouri to California?", a: 10, type: "ratio", unit: "days",
        fact: "About 10 days. The Pony Express shut down on October 26, 1861, exactly 20 years before the O.K. Corral. 🐎" },
      { level: "Medium-hard", q: "Pioneers walked the Oregon Trail beside their covered wagons. How long was it, in miles?", a: 2170, type: "ratio", unit: "miles",
        fact: "About 2,170 miles, from Missouri to Oregon. The trip took four to six months. 🐂" },
      { level: "Hard", q: "Wyatt Earp survived the O.K. Corral and lived a long life. How old was he when he died?", a: 80, type: "ratio", unit: "years old",
        fact: "80. He lived until 1929 and died in Los Angeles, just as Hollywood was making movies about the Wild West. 🎬" }
    ]
  },
  "2026-10-27": {
    rebus: {
      tiles: [{ e: "🎮" }, { e: "🌙" }],
      alt: "Rebus: a game controller, plus the moon at night",
      answers: ["gamenight", "gamenights", "gamingnight", "videogamenight", "gamesnight"],
      display: "Game Night",
      hint: "When friends get together to play. Something you play, plus when the sun goes down."
    },
    theme: "Toys and Games",
    hype: ["Toy-rrific!", "Game on!", "You win!"],
    oof: ["Game over.", "Batteries not included.", "Back in the box."],
    snippet: "On this day in 1858, <strong>Theodore Roosevelt</strong> was born. Years later, a famous stuffed animal was named after him: the teddy bear. So today is all about toys and games.",
    questions: [
      { level: "Easy", q: "How many hippos are in a game of Hungry Hungry Hippos?", a: 4, type: "ratio", unit: "hippos",
        fact: "4 hippos, one for each player, all chomping for the same marbles. 🦛" },
      { level: "Easy-medium", q: "How many wooden blocks come in a standard Jenga set?", a: 54, type: "ratio", unit: "blocks",
        fact: "54 blocks, stacked 18 levels high with three blocks on each level. 🧱" },
      { level: "Medium", q: "Add up every dot on a pair of dice. How many dots are there in total?", a: 42, type: "ratio", unit: "dots",
        fact: "42. Each die has 21 dots, and opposite sides always add up to 7. 🎲" },
      { level: "Medium-hard", q: "How many letter tiles come in a standard game of Scrabble?", a: 100, type: "ratio", unit: "tiles",
        fact: "100 tiles, including 2 blanks. E is the most common letter, on 12 tiles. 🔤" },
      { level: "Hard", q: "In 2024, a rare prototype Boba Fett action figure from Star Wars became the most expensive toy ever sold. How much did it go for, in dollars?", a: 1340000, type: "ratio", unit: "dollars",
        fact: "About $1.34 million, for a 1979 rocket-firing version that never made it to store shelves. 🚀" }
    ]
  },
  "2026-10-28": {
    rebus: {
      tiles: [{ e: "📮" }, { e: "🃏" }],
      alt: "Rebus: a mailbox, plus a playing card",
      answers: ["postcard", "postcards", "mailcard"],
      display: "Postcard",
      hint: "What you mail home from a trip. A mailbox, plus a playing card."
    },
    theme: "Landmarks",
    hype: ["Postcard perfect!", "A real wonder!", "Landmark guess!"],
    oof: ["Wrong turn.", "Tourist trap.", "Lost without a map."],
    snippet: "On this day in 1886, the <strong>Statue of Liberty</strong> was dedicated in New York Harbor, a gift from the people of France. So today is all about famous landmarks.",
    questions: [
      { level: "Easy", q: "How many spikes stick out of the Statue of Liberty's crown?", a: 7, type: "ratio", unit: "spikes",
        fact: "7 spikes. They're often said to stand for the seven continents and the seven seas. 👑" },
      { level: "Easy-medium", q: "The presidents carved into Mount Rushmore are huge. How tall is each face, in feet?", a: 60, type: "ratio", unit: "feet",
        fact: "About 60 feet, as tall as a six-story building. The carving took 14 years. 🗿" },
      { level: "Medium", q: "The Empire State Building went up incredibly fast. How many days did it take to build?", a: 410, type: "ratio", unit: "days",
        fact: "410 days, about 13 and a half months. At its fastest, it rose more than four floors a week. 🏙️" },
      { level: "Medium-hard", q: "Big Ben's clock in London is giant. How long is its minute hand, in feet?", a: 14, type: "ratio", unit: "feet",
        fact: "Almost 14 feet, about as long as a car. 🕰️" },
      { level: "Hard", q: "Counting all its branches, how long is the Great Wall of China, in miles?", a: 13171, type: "ratio", unit: "miles",
        fact: "About 13,171 miles, according to a 2012 survey. That's more than half the distance around the Earth. 🧱" }
    ]
  },
  "2026-10-29": {
    rebus: {
      tiles: [{ e: "🏄" }, { e: "🕸️" }],
      alt: "Rebus: a surfer, plus a spider web",
      answers: ["surftheweb", "surfingtheweb", "websurfing", "websurf", "surfweb", "surftheinternet", "surfingtheinternet"],
      display: "Surf the Web",
      hint: "Three words for browsing online. What you do on a wave, plus what a spider spins."
    },
    theme: "The Internet",
    hype: ["Going viral!", "Full Wi-Fi!", "Logged in!"],
    oof: ["404: not found.", "Connection lost.", "Buffering."],
    snippet: "On this day in 1969, a computer at UCLA sent the very first message over <strong>ARPANET</strong>, the network that grew into the internet. It crashed partway through. So today is all about the internet.",
    questions: [
      { level: "Easy", q: "Google's logo uses a few different colors. How many?", a: 4, type: "ratio", unit: "colors",
        fact: "4: blue, red, yellow and green. Blue and red each show up twice. 🔎" },
      { level: "Easy-medium", q: "When Twitter launched, how many characters could a tweet have?", a: 140, type: "ratio", unit: "characters",
        fact: "140, so a tweet and a username could fit inside one 160-character text message. The limit doubled to 280 in 2017. 🐦" },
      { level: "Medium", q: "In what year was the first video posted to YouTube?", a: 2005, type: "year", unit: "year",
        fact: "2005. Co-founder Jawed Karim posted it on April 23. 📹" },
      { level: "Medium-hard", q: "That first YouTube video, called Me at the Zoo, was very short. How long was it, in seconds?", a: 19, type: "ratio", unit: "seconds",
        fact: "19 seconds. He stands in front of the San Diego Zoo elephants and talks about their really long trunks. 🐘" },
      { level: "Hard", q: "About how many people around the world use the internet, in billions?", a: 6, type: "ratio", unit: "billion people",
        fact: "About 6 billion, roughly 3 out of every 4 people on Earth. 🌍" }
    ]
  },
  "2026-10-30": {
    rebus: {
      tiles: [{ e: "🌴" }, { e: "🏋️" }],
      alt: "Rebus: a palm tree, plus a weightlifter",
      answers: ["junglegym", "junglegyms", "junglejim", "junglejims"],
      display: "Jungle Gym",
      hint: "Something kids climb on at the playground. A wild, leafy place, plus where you lift weights."
    },
    theme: "The Jungle",
    hype: ["King of the jungle!", "Float like a butterfly!", "Swinging through the trees!"],
    oof: ["Lost in the jungle.", "Quicksand.", "Down for the count."],
    snippet: "On this day in 1974, Muhammad Ali beat George Foreman in Zaire in a famous fight called <strong>The Rumble in the Jungle</strong>. So today is all about the jungle.",
    questions: [
      { level: "Easy", q: "How many legs does a tarantula have?", a: 8, type: "ratio", unit: "legs",
        fact: "8 legs. 🕷️" },
      { level: "Easy-medium", q: "A big adult male gorilla, called a silverback, weighs about how many pounds?", a: 400, type: "ratio", unit: "pounds",
        fact: "About 400 pounds. That's what the National Zoo's silverback, Baraka, weighs. 🦍" },
      { level: "Medium", q: "Rainforests are packed with life. What percent of Earth's land do they cover?", a: 6, type: "ratio", unit: "percent",
        fact: "About 6 percent, yet rainforests hold more than half of the world's plant and animal species. 🌳" },
      { level: "Medium-hard", q: "The golden poison frog is one of the deadliest animals on Earth. One frog carries enough poison to kill how many adult people?", a: 10, type: "ratio", unit: "people",
        fact: "About 10 people, from a frog only about 2 inches long. 🐸" },
      { level: "Hard", q: "How long is the Amazon River, in miles?", a: 4000, type: "ratio", unit: "miles",
        fact: "At least 4,000 miles, longer than a drive across the whole US. 🛶" }
    ]
  },
  "2026-10-31": {
    rebus: {
      tiles: [{ e: "🍬" }, { e: "🌽" }],
      alt: "Rebus: a wrapped candy, plus an ear of corn",
      answers: ["candycorn", "candycorns", "candycorne"],
      display: "Candy Corn",
      hint: "A striped Halloween sweet. A piece of candy, plus a vegetable on the cob."
    },
    theme: "Halloween",
    hype: ["Spooktacular!", "Fang-tastic!", "Treat!"],
    oof: ["Trick!", "Boo.", "Scared stiff."],
    snippet: "On this day in 1926, exactly 100 years ago, the great escape artist <strong>Harry Houdini</strong> died. For years after, his wife held a séance every Halloween to try to reach him. So today is all about Halloween.",
    questions: [
      { level: "Easy", q: "How many witch sisters cause chaos in the movie Hocus Pocus?", a: 3, type: "ratio", unit: "sisters",
        fact: "3: Winifred, Mary and Sarah Sanderson. 🧹" },
      { level: "Easy-medium", q: "Houdini died young, on Halloween. How old was he?", a: 52, type: "ratio", unit: "years old",
        fact: "52. He was born in Budapest, Hungary, and became the most famous escape artist ever. ⛓️" },
      { level: "Medium", q: "Michael Jackson's Thriller video was more like a mini movie than a music video. How many minutes long is it?", a: 14, type: "ratio", unit: "minutes",
        fact: "Almost 14 minutes (13:42), packed with werewolves, zombies and that famous dance. 🧟" },
      { level: "Medium-hard", q: "Thriller cost a fortune to make for a music video back in 1983. How much did it cost, in dollars?", a: 500000, type: "ratio", unit: "dollars",
        fact: "About $500,000, unheard of for a music video back then. It became the first music video picked for the National Film Registry. 🕺" },
      { level: "Hard", q: "This month, a grower in Rhode Island smashed the world record for the heaviest pumpkin. How much did it weigh, in pounds?", a: 3156, type: "ratio", unit: "pounds",
        fact: "3,156 pounds, the first pumpkin ever to top 3,000. Guinness still has to make it official. 🎃" }
    ]
  },
  "2026-11-01": {
    rebus: {
      tiles: [{ e: "🐴" }, { e: "👟" }],
      alt: "Rebus: a horse, plus a shoe",
      answers: ["horseshoe", "horseshoes", "horseshoo"],
      display: "Horseshoe",
      hint: "A lucky U-shaped piece of metal. The animal, plus something you wear on your foot."
    },
    theme: "Horses",
    hype: ["Giddy up!", "Photo finish!", "Straight from the horse's mouth!"],
    oof: ["Neigh.", "Hold your horses.", "Back to the stable."],
    snippet: "On this day in 1938, the underdog <strong>Seabiscuit</strong> raced the champion War Admiral head to head, and much of the country stopped to listen on the radio. So today is all about horses.",
    questions: [
      { level: "Easy", q: "How many horseshoes does a horse usually wear?", a: 4, type: "ratio", unit: "horseshoes",
        fact: "4, one on each hoof. Hanging one over a door is said to bring good luck. 🍀" },
      { level: "Easy-medium", q: "At most, how many horses can run in the Kentucky Derby?", a: 20, type: "ratio", unit: "horses",
        fact: "20 horses, which makes the start a crowded scramble. The Derby is nicknamed the Run for the Roses. 🌹" },
      { level: "Medium", q: "Winning the Kentucky Derby, the Preakness and the Belmont in one year is horse racing's Triple Crown. How many horses have ever done it?", a: 13, type: "ratio", unit: "horses",
        fact: "13, from Sir Barton in 1919 to Justify in 2018. 🏆" },
      { level: "Medium-hard", q: "In 2004, fans packed Belmont Park to see if Smarty Jones could win the Triple Crown. It set the track's attendance record. How many people came?", a: 120139, type: "ratio", unit: "people",
        fact: "120,139 people. Smarty Jones lost by a length, so the long wait for a Triple Crown winner went on. 🏟️" },
      { level: "Hard", q: "After Secretariat's legendary Belmont Stakes win in 1973, thousands of fans never cashed their winning bets. They kept the tickets as souvenirs. How many tickets went uncashed?", a: 5617, type: "ratio", unit: "tickets",
        fact: "5,617 winning tickets. Secretariat won that day by a record 31 lengths. 🎟️" }
    ]
  },
  "2026-11-02": {
    rebus: {
      tiles: [{ e: "🌙" }, { e: "🚶" }],
      alt: "Rebus: a crescent moon, plus a person walking",
      answers: ["moonwalk", "moonwalks", "moonwalking", "moonwalker"],
      display: "Moonwalk",
      hint: "A famous dance move, and something astronauts did in 1969. Something in the night sky, plus a stroll."
    },
    theme: "Space",
    hype: ["Out of this world!", "Stellar!", "Houston, we have a winner!"],
    oof: ["Lost in space.", "Houston, we have a problem.", "Way off orbit."],
    snippet: "On this day in 2000, the first crew moved into the <strong>International Space Station</strong>. People have lived up there ever since. So today is all about space.",
    questions: [
      { level: "Easy", q: "How many planets are in our solar system?", a: 8, type: "ratio", unit: "planets",
        fact: "8, ever since Pluto was moved to the dwarf planet list in 2006. 🪐" },
      { level: "Easy-medium", q: "The International Space Station zooms around the Earth again and again. How many times does it go around in one day?", a: 16, type: "ratio", unit: "times",
        fact: "16 times a day, so the crew sees 16 sunrises and 16 sunsets every day. 🌅" },
      { level: "Medium", q: "Venus is the hottest planet, even hotter than Mercury. How hot is its surface, in degrees Fahrenheit?", a: 900, type: "ratio", unit: "°F",
        fact: "About 900°F, hot enough to melt lead. Its thick clouds trap the heat. 🔥" },
      { level: "Medium-hard", q: "How fast does the International Space Station travel, in miles per hour?", a: 17500, type: "ratio", unit: "mph",
        fact: "About 17,500 mph, roughly 5 miles every second. 🚀" },
      { level: "Hard", q: "A year is how long a planet takes to go around the Sun. How many Earth days long is a year on Mars?", a: 687, type: "ratio", unit: "days",
        fact: "687 days, almost two Earth years. 🔴" }
    ]
  },
  "2026-11-03": {
    rebus: {
      tiles: [{ e: "⌚" }, { e: "🐕" }],
      alt: "Rebus: a wristwatch, plus a dog",
      answers: ["watchdog", "watchdogs", "watchdawg"],
      display: "Watchdog",
      hint: "A dog that guards the house. Something you wear on your wrist, plus a pup."
    },
    theme: "Dogs",
    hype: ["Good boy!", "Top dog!", "Best in show!"],
    oof: ["Ruff.", "Bad dog.", "Barking up the wrong tree."],
    snippet: "On this day in 1957, a dog named <strong>Laika</strong> became the first animal ever to orbit the Earth. So today is all about dogs.",
    questions: [
      { level: "Easy", q: "People often say one dog year equals how many human years?", a: 7, type: "ratio", unit: "human years",
        fact: "7, but it's a myth. Dogs actually grow up fastest in their first year or two, then age more slowly. 🐕" },
      { level: "Easy-medium", q: "How many teeth does an adult dog have?", a: 42, type: "ratio", unit: "teeth",
        fact: "42, ten more than an adult person. 🦷" },
      { level: "Medium", q: "Greyhounds are the fastest dogs. How fast can they run, in miles per hour?", a: 43, type: "ratio", unit: "mph",
        fact: "At least 43 mph, fast enough to keep up with cars on a city street. 💨" },
      { level: "Medium-hard", q: "Clifford the Big Red Dog is famously huge. In the books and shows, he's usually drawn about how many feet tall?", a: 25, type: "ratio", unit: "feet",
        fact: "About 25 feet, though his size changes from book to book. He was a tiny puppy who grew big from being loved so much. ❤️" },
      { level: "Hard", q: "In what year did Scooby-Doo first appear on TV?", a: 1969, type: "year", unit: "year",
        fact: "1969, in Scooby-Doo, Where Are You! on CBS. 👻" }
    ]
  },
  "2026-11-04": {
    rebus: {
      tiles: [{ e: "🏖️" }, { e: "⛈️" }],
      alt: "Rebus: a sandy beach, plus a thunderstorm",
      answers: ["sandstorm", "sandstorms", "dusstorm", "duststorm"],
      display: "Sandstorm",
      hint: "A desert hazard. What a beach is made of, plus wild weather."
    },
    theme: "Ancient Egypt",
    hype: ["Pharaoh-nomenal!", "Fit for a pharaoh!", "Pure gold!"],
    oof: ["Cursed!", "Lost in the sand.", "Back to the tomb."],
    snippet: "On this day in 1922, archaeologist Howard Carter found the hidden steps to <strong>King Tut's tomb</strong>, sealed for more than 3,000 years. So today is all about ancient Egypt.",
    questions: [
      { level: "Easy", q: "How many great pyramids stand side by side at Giza?", a: 3, type: "ratio", unit: "pyramids",
        fact: "3, built for three kings. The biggest, the Great Pyramid, is the last of the Seven Wonders of the Ancient World still standing. 🔺" },
      { level: "Easy-medium", q: "The Great Pyramid is enormous. How many years did it take to build?", a: 20, type: "ratio", unit: "years",
        fact: "About 20 years, according to the Greek historian Herodotus, using around 2.3 million stone blocks. 🧱" },
      { level: "Medium", q: "King Tut became pharaoh as a boy and died young. About how old was he when he died?", a: 19, type: "ratio", unit: "years old",
        fact: "About 18 or 19. He had ruled Egypt for around ten years. 👑" },
      { level: "Medium-hard", q: "When it was finished, how tall was the Great Pyramid, in feet?", a: 482, type: "ratio", unit: "feet",
        fact: "About 482 feet. It was the tallest thing people had ever built for nearly 4,000 years. 📐" },
      { level: "Hard", q: "Making a mummy was a long job. How many days did the whole mummification process take?", a: 70, type: "ratio", unit: "days",
        fact: "70 days. Much of that time went to drying the body out with a natural salt called natron. 🧻" }
    ]
  },
  "2026-11-05": {
    rebus: {
      tiles: [{ e: "🔥" }, { e: "🍘" }],
      alt: "Rebus: a flame, plus a rice cracker",
      answers: ["firecracker", "firecrackers", "firecraker"],
      display: "Firecracker",
      hint: "Something that goes bang. A flame, plus a crunchy snack."
    },
    theme: "Fireworks",
    hype: ["Boom!", "Sparkling!", "Lit!"],
    oof: ["Fizzled.", "Dud.", "Up in smoke."],
    snippet: "On this day in 1605, a plot to blow up England's Parliament was foiled. Ever since, the British have marked every November 5th with bonfires and <strong>fireworks</strong>. So today is all about fireworks.",
    questions: [
      { level: "Easy", q: "This past Fourth of July, the US celebrated a big birthday. How many years old did it turn?", a: 250, type: "ratio", unit: "years old",
        fact: "250 years since the Declaration of Independence in 1776. 🇺🇸" },
      { level: "Easy-medium", q: "Sparklers look harmless, but they burn incredibly hot. How hot, in degrees Fahrenheit?", a: 2000, type: "ratio", unit: "°F",
        fact: "About 2,000°F, as hot as a blowtorch. That's why they're not toys for little kids. ✨" },
      { level: "Medium", q: "Almost every state lets people buy some kind of fireworks. How many states ban all of them?", a: 1, type: "ratio", unit: "",
        fact: "Just 1: Massachusetts. 🚫" },
      { level: "Medium-hard", q: "Macy's Fourth of July fireworks show in New York hit a big milestone this year. Which number show was it?", a: 50, type: "ratio", unit: "",
        fact: "The 50th, with 85,000 shells in 30 colors. 🎆" },
      { level: "Hard", q: "This July, Joey Chestnut won the famous Coney Island hot dog eating contest again. How many hot dogs did he eat in 10 minutes?", a: 66, type: "ratio", unit: "hot dogs",
        fact: "66 hot dogs and buns, for his 18th title. His record is 76. 🌭" }
    ]
  },
  "2026-11-06": {
    rebus: {
      tiles: [{ e: "👆" }, { e: "⬇️" }],
      alt: "Rebus: a pointing finger, plus a down arrow",
      answers: ["touchdown", "touchdowns", "touchdwn"],
      display: "Touchdown",
      hint: "Six points in football. What a finger does, plus the opposite of up."
    },
    theme: "Football",
    hype: ["Touchdown!", "Hail Mary!", "MVP!"],
    oof: ["Fumble.", "Flag on the play.", "Sacked."],
    snippet: "On this day in 1869, Rutgers beat Princeton in the very first <strong>college football</strong> game. So today is all about football.",
    questions: [
      { level: "Easy", q: "How many points is a touchdown worth?", a: 6, type: "ratio", unit: "points",
        fact: "6, plus a chance at 1 or 2 more right after. 🏈" },
      { level: "Easy-medium", q: "Counting both end zones, how long is a football field, in yards?", a: 120, type: "ratio", unit: "yards",
        fact: "120 yards: 100 for the field, plus 10 for each end zone. 📏" },
      { level: "Medium", q: "In that first college game in 1869, how many players did each team have on the field?", a: 25, type: "ratio", unit: "players",
        fact: "25 a side, and the game looked a lot more like soccer. Rutgers won 6 to 4. ⚽" },
      { level: "Medium-hard", q: "Tom Brady holds the record for the most Super Bowl wins by a player. How many?", a: 7, type: "ratio", unit: "Super Bowls",
        fact: "7, more than any NFL team has ever won. 💍" },
      { level: "Hard", q: "Super Bowl ads are famously pricey. How much did a 30-second ad cost this year, in millions of dollars?", a: 8, type: "ratio", unit: "million dollars",
        fact: "About $8 million on average, and a few went for more than $10 million. 📺" }
    ]
  },
  "2026-11-07": {
    rebus: {
      tiles: [{ e: "🧪" }, { e: "🧥" }],
      alt: "Rebus: a test tube, plus a coat",
      answers: ["labcoat", "labcoats", "labjacket", "testtubecoat"],
      display: "Lab Coat",
      hint: "What scientists wear. Something from a science lab, plus something that keeps you warm."
    },
    theme: "Science",
    hype: ["Eureka!", "Genius!", "Nobel-worthy!"],
    oof: ["Back to the lab.", "Failed experiment.", "Total meltdown."],
    snippet: "On this day in 1867, <strong>Marie Curie</strong> was born in Poland. She became one of the greatest scientists who ever lived. So today is all about science.",
    questions: [
      { level: "Easy", q: "Marie Curie was the first person to win more than one Nobel Prize. How many did she win?", a: 2, type: "ratio", unit: "Nobel Prizes",
        fact: "2: physics in 1903 and chemistry in 1911. ⚛️" },
      { level: "Easy-medium", q: "At sea level, what temperature does water boil at, in degrees Fahrenheit?", a: 212, type: "ratio", unit: "°F",
        fact: "212°F, or 100°C. High up on a mountain, water boils at a lower temperature. 🫖" },
      { level: "Medium", q: "How many elements are on the periodic table?", a: 118, type: "ratio", unit: "elements",
        fact: "118. The four newest got their names in 2016. 🧪" },
      { level: "Medium-hard", q: "A hummingbird's heart races when it flies. How many times can it beat in one minute?", a: 1200, type: "ratio", unit: "beats",
        fact: "Up to about 1,200 beats a minute when it's flying hard. Yours beats about 70. 🐦" },
      { level: "Hard", q: "We can't feel it, but the Earth is always spinning. How fast is the ground moving at the equator, in miles per hour?", a: 1000, type: "ratio", unit: "mph",
        fact: "About 1,000 mph. We don't feel it because everything around us moves right along with us. 🌍" }
    ]
  },
  "2026-11-08": {
    rebus: {
      tiles: [{ e: "🧠" }, { e: "🌊" }],
      alt: "Rebus: a brain, plus an ocean wave",
      answers: ["brainwave", "brainwaves", "brainwav"],
      display: "Brainwave",
      hint: "A sudden clever idea. What you think with, plus something rolling in from the ocean."
    },
    theme: "Inventions",
    hype: ["Brilliant!", "Patent pending!", "Lightbulb moment!"],
    oof: ["Short circuit.", "Needs more work.", "Out of order."],
    snippet: "On this day in 1895, Wilhelm Röntgen discovered <strong>X-rays</strong> by accident in his lab. So today is all about inventions.",
    questions: [
      { level: "Easy", q: "A classic yellow Post-it Note is a square. How many inches long is each side?", a: 3, type: "ratio", unit: "inches",
        fact: "3 inches. Post-its came from a glue that didn't stick very well. 📝" },
      { level: "Easy-medium", q: "QWERTY keyboards are named after their top row of letters. How many letters are in that top row?", a: 10, type: "ratio", unit: "letters",
        fact: "10: Q, W, E, R, T, Y, U, I, O and P. ⌨️" },
      { level: "Medium", q: "The very first YouTube video, \"Me at the zoo,\" was really short. How many seconds long is it?", a: 19, type: "ratio", unit: "seconds",
        fact: "19 seconds, filmed at the San Diego Zoo by one of YouTube's founders in 2005. 🐘" },
      { level: "Medium-hard", q: "Apple's very first computer, the Apple I, went on sale in 1976. How much did it cost, in dollars?", a: 666.66, type: "ratio", unit: "dollars",
        fact: "$666.66. Steve Wozniak said he just liked repeating digits. 🍎" },
      { level: "Hard", q: "Thomas Edison was the king of inventors. How many US patents did he hold?", a: 1093, type: "ratio", unit: "patents",
        fact: "1,093 US patents, including the phonograph and a long-lasting light bulb. 💡" }
    ]
  },
  "2026-11-09": {
    rebus: {
      tiles: [{ e: "🧱" }, { e: "🌷" }],
      alt: "Rebus: a brick wall, plus a flower",
      answers: ["wallflower", "wallflowers", "brickflower"],
      display: "Wallflower",
      hint: "A shy person at a party. A brick barrier, plus something that blooms."
    },
    theme: "Germany",
    hype: ["Wunderbar!", "Sehr gut!", "Prost!"],
    oof: ["Nein!", "Ach.", "Auf Wiedersehen."],
    snippet: "On this night in 1989, the <strong>Berlin Wall</strong> came down, and people from East and West Berlin climbed on top of it to celebrate together. So today is all about Germany.",
    questions: [
      { level: "Easy", q: "At Oktoberfest, beer comes in a giant glass mug. How many liters does it hold?", a: 1, type: "ratio", unit: "",
        fact: "1 liter, about a quart. Servers famously carry ten or more at once. 🍺" },
      { level: "Easy-medium", q: "The Berlin Wall split the city in two. How many years did it stand?", a: 28, type: "ratio", unit: "years",
        fact: "28 years, from 1961 to 1989. 🧱" },
      { level: "Medium", q: "The wall looped all the way around West Berlin. How long was it, in miles?", a: 96, type: "ratio", unit: "miles",
        fact: "About 96 miles. Small pieces of it now stand in museums all over the world. 🗺️" },
      { level: "Medium-hard", q: "Munich's Oktoberfest set a new attendance record this fall. How many people went, in millions?", a: 7.4, type: "ratio", unit: "million people",
        fact: "A record 7.4 million, who drank 6.7 million liters of beer in 16 days. 🥨" },
      { level: "Hard", q: "Germans take their bread seriously. How many different kinds of bread are listed in the country's official bread register?", a: 3200, type: "ratio", unit: "kinds of bread",
        fact: "More than 3,200, from dark rye to soft pretzel rolls. 🍞" }
    ]
  },
  "2026-11-10": {
    rebus: {
      tiles: [{ e: "🔍" }, { e: "🎉" }],
      alt: "Rebus: a magnifying glass, plus a party popper",
      answers: ["searchparty", "searchparties", "searchingparty", "searchcelebration", "lookparty", "findparty", "magnifyingparty"],
      display: "Search Party",
      hint: "A group sent out to find someone who is missing. Looking for something, plus a celebration."
    },
    theme: "Africa",
    hype: ["Roar-some!", "Safari so good!", "King of the savanna!"],
    oof: ["Lost in the Sahara.", "Wrong watering hole.", "Trampled by the herd."],
    snippet: "On this day in 1871, reporter <strong>Henry Stanley</strong> finally found the missing explorer David Livingstone in a lakeside town in East Africa, after months of leading a search party across the continent. His famous greeting: \"Dr. Livingstone, I presume?\" So today is all about Africa.",
    questions: [
      { level: "Easy", q: "Camels have carried people across the Sahara for centuries. How many humps does a Sahara camel have?", a: 1, type: "ratio", unit: "",
        fact: "Just 1. They're called dromedaries. The two-humped kind lives in Asia. 🐪" },
      { level: "Easy-medium", q: "The giraffe is the tallest animal on Earth. About how tall can a big male grow, in feet?", a: 18, type: "ratio", unit: "feet",
        fact: "About 18 feet. Its neck alone is longer than most people are tall. 🦒" },
      { level: "Medium", q: "How many countries are in Africa?", a: 54, type: "ratio", unit: "countries",
        fact: "54, by the United Nations' count. That's more than any other continent. 🌍" },
      { level: "Medium-hard", q: "Elephants are pregnant longer than any other mammal. How many months does an African elephant carry her baby?", a: 22, type: "ratio", unit: "months",
        fact: "22 months, which is nearly two years. 🐘" },
      { level: "Hard", q: "Mount Kilimanjaro is the tallest mountain in Africa. How tall is it, in feet?", a: 19341, type: "ratio", unit: "feet",
        fact: "19,341 feet. It's the tallest mountain in the world that stands all on its own. 🏔️" }
    ]
  },
  "2026-11-11": {
    rebus: {
      tiles: [{ e: "🚗" }, { e: "🎱" }],
      alt: "Rebus: a car, plus an eight ball",
      answers: ["carpool", "carpools", "carpooling", "carpooler"],
      display: "Carpool",
      hint: "Sharing a ride to work or school. Something you drive, plus a game played with a cue and an eight ball."
    },
    theme: "Road Trips",
    hype: ["Smooth cruising!", "Green lights all the way!", "Pedal to the metal!"],
    oof: ["Flat tire.", "Wrong exit.", "Out of gas."],
    snippet: "On this day exactly 100 years ago, <strong>Route 66</strong> was born. The highway from Chicago to the California coast became the most famous road in America. Happy 100th birthday to the Mother Road. So today is all about road trips.",
    questions: [
      { level: "Easy", q: "Big rig trucks are nicknamed for the number of wheels they roll on. How many wheels does a standard one have?", a: 18, type: "ratio", unit: "wheels",
        fact: "18. That's 10 on the truck up front and 8 on the trailer. 🚛" },
      { level: "Easy-medium", q: "Route 66 runs from Illinois to California. Counting those two, how many states does it pass through?", a: 8, type: "ratio", unit: "states",
        fact: "8: Illinois, Missouri, Kansas, Oklahoma, Texas, New Mexico, Arizona and California. Kansas gets just 13 miles of it. 🗺️" },
      { level: "Medium", q: "A century ago, Henry Ford's Model T put America on wheels. In 1925, how much did the cheapest new one cost, in dollars?", a: 260, type: "ratio", unit: "dollars",
        fact: "$260 for the basic two-seater, the lowest price the Model T ever hit. 🚗" },
      { level: "Medium-hard", q: "How long was Route 66 from end to end, in miles?", a: 2448, type: "ratio", unit: "miles",
        fact: "2,448 miles. When it opened, only 800 of them were paved. 🛣️" },
      { level: "Hard", q: "In 1903, a Vermont doctor bet $50 that he could drive a car all the way across America. Nobody had ever done it. How many days did the trip take him?", a: 63, type: "ratio", unit: "days",
        fact: "63 days, plus a few hours, from San Francisco to New York. He picked up a dog named Bud along the way, who rode in goggles. 🐶" }
    ]
  },
  "2026-11-12": {
    rebus: {
      tiles: [{ e: "🫠" }, { e: "🍲" }],
      alt: "Rebus: a melting face, plus a pot of food",
      answers: ["meltingpot", "meltingpots"],
      display: "Melting Pot",
      hint: "A place where people from all over the world mix together. What ice cream does on a hot day, plus what you cook soup in."
    },
    theme: "New York City",
    hype: ["Big Apple brilliant!", "You own this town!", "A true New Yorker!"],
    oof: ["Fuhgeddaboudit.", "Stuck in traffic.", "Missed the subway."],
    snippet: "On this day in 1954, <strong>Ellis Island</strong> closed its doors. For more than 60 years, it was the first stop in America for newcomers sailing into New York Harbor, the gateway to the great melting pot. So today is all about New York City.",
    questions: [
      { level: "Easy", q: "New York City is made up of boroughs, like Brooklyn and the Bronx. How many boroughs are there?", a: 5, type: "ratio", unit: "boroughs",
        fact: "5: Manhattan, Brooklyn, Queens, the Bronx and Staten Island. 🗽" },
      { level: "Easy-medium", q: "The Empire State Building was once the tallest building in the world. How many floors does it have?", a: 102, type: "ratio", unit: "floors",
        fact: "102 floors, with 1,860 steps if you skip the elevator. 🏙️" },
      { level: "Medium", q: "On New Year's Eve, a glittering ball slides down a pole high above Times Square. How many seconds does the drop take?", a: 60, type: "ratio", unit: "seconds",
        fact: "60 seconds. It starts at 11:59 PM and lands exactly at midnight. 🎆" },
      { level: "Medium-hard", q: "Central Park is a long green rectangle in the middle of Manhattan. How many city blocks long is it?", a: 51, type: "ratio", unit: "blocks",
        fact: "51 blocks, from 59th Street all the way up to 110th Street. 🌳" },
      { level: "Hard", q: "Yellow taxis are everywhere in New York, but the law caps how many there can be. How many yellow cabs is the city allowed?", a: 13587, type: "ratio", unit: "taxis",
        fact: "13,587, each with a metal medallion bolted to its hood. 🚕" }
    ]
  },
  "2026-11-13": {
    rebus: {
      tiles: [{ e: "🍀" }, { e: "🦆" }],
      alt: "Rebus: a four-leaf clover, plus a duck",
      answers: ["luckyduck", "luckyducks", "luckyducky"],
      display: "Lucky Duck",
      hint: "What you call someone who catches a happy break. A green good luck charm, plus a bird that quacks."
    },
    theme: "Luck",
    hype: ["Lucky you!", "Jackpot!", "You're on a roll!"],
    oof: ["Tough luck.", "Snake eyes.", "A black cat crossed your path."],
    snippet: "Today is <strong>Friday the 13th</strong>, the unluckiest day on the calendar, or so the superstition goes. Nobody knows for sure how the fear got started, but plenty of people still play it extra safe today. So today is all about luck.",
    questions: [
      { level: "Easy", q: "Most clovers have three leaves. How many leaves does a lucky one have?", a: 4, type: "ratio", unit: "leaves",
        fact: "4. Finding one is rare, which is exactly why it's lucky. 🍀" },
      { level: "Easy-medium", q: "Superstition says breaking a mirror brings bad luck. For how many years?", a: 7, type: "ratio", unit: "years",
        fact: "7 years. The idea goes back to the ancient Romans, who believed life renewed itself every seven years. 🪞" },
      { level: "Medium", q: "Every year has at least one Friday the 13th. What is the most a single year can have?", a: 3, type: "ratio", unit: "Friday the 13ths",
        fact: "3, and this year is one of them: February, March and today. 📅" },
      { level: "Medium-hard", q: "Lots of tall buildings are so nervous about the number 13 that they skip it. The elevator maker Otis once checked its tall buildings. What percent had no floor labeled 13?", a: 85, type: "ratio", unit: "percent",
        fact: "About 85 percent. The elevator buttons jump straight from 12 to 14. 🏢" },
      { level: "Hard", q: "A four-leaf clover is lucky, so more leaves must be luckier. What is the most leaves ever counted on a single clover?", a: 63, type: "ratio", unit: "leaves",
        fact: "63 leaves, a world record. A gardener in Japan spent more than ten years breeding it. ☘️" }
    ]
  },
  "2026-11-14": {
    rebus: {
      tiles: [{ e: "🐋" }, { e: "⌚" }],
      alt: "Rebus: a whale, plus a wristwatch",
      answers: ["whalewatch", "whalewatching", "whalewatcher", "whalewatchers", "whalewatches"],
      display: "Whale Watch",
      hint: "A boat trip to spot giants of the sea. The biggest animal in the ocean, plus what you wear on your wrist."
    },
    theme: "The Ocean",
    hype: ["Whale done!", "Making waves!", "Shore thing!"],
    oof: ["Lost at sea.", "Man overboard!", "Sunk like a stone."],
    snippet: "On this day in 1851, <strong>Moby-Dick</strong> hit American bookstores. Herman Melville's tale of a sea captain chasing a giant white whale flopped at first, and is now called one of the greatest novels ever written. So today is all about the ocean.",
    questions: [
      { level: "Easy", q: "How many arms does a classic starfish have?", a: 5, type: "ratio", unit: "arms",
        fact: "5, though some kinds of sea stars have 10, 20 or even 40. ⭐" },
      { level: "Easy-medium", q: "An octopus has eight arms and more than one heart. How many hearts?", a: 3, type: "ratio", unit: "hearts",
        fact: "3. Two pump blood through the gills, and one sends it around the rest of the body. 🐙" },
      { level: "Medium", q: "What percent of the Earth's surface is covered by ocean?", a: 71, type: "ratio", unit: "percent",
        fact: "About 71 percent. The ocean holds nearly all of the water on the planet. 🌊" },
      { level: "Medium-hard", q: "Surfers chase giant waves off the coast of Portugal. How tall was the biggest wave ever officially surfed, in feet?", a: 86, type: "ratio", unit: "feet",
        fact: "86 feet, about as tall as an eight-story building. Germany's Sebastian Steudtner rode it in 2020. 🏄" },
      { level: "Hard", q: "The deepest spot in the ocean is the Challenger Deep, in the Pacific. How deep is it, in feet?", a: 35876, type: "ratio", unit: "feet",
        fact: "About 35,876 feet, which is nearly 7 miles straight down. Mount Everest would fit with room to spare. 🤿" }
    ]
  }
};
