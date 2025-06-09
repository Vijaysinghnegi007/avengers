// Data for the Avengers website

// Movies data
const moviesData = [
{
  id: 1,
  title: "The Avengers",
  year: 2012,
  director: "Joss Whedon",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/1ed613ba-afa0-40f2-96e4-bc917e508adb.jpg",
  description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  rating: 8.0,
  trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
  phase: 1,
  runtime: 143,
  releaseDate: "May 4, 2012",
  boxOffice: "$1.519 billion",
  mainCharacters: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]
},
{
  id: 2,
  title: "Avengers: Age of Ultron",
  year: 2015,
  director: "Joss Whedon",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/31bf63d6-132a-413e-977e-9752544584e2.webp",
  description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
  rating: 7.3,
  trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do",
  phase: 2,
  runtime: 141,
  releaseDate: "May 1, 2015",
  boxOffice: "$1.403 billion",
  mainCharacters: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Scarlet Witch"]
},
{
  id: 3,
  title: "Avengers: Infinity War",
  year: 2018,
  director: "Anthony Russo, Joe Russo",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/9bb37859-b58a-47bf-b44a-b7c2126adde9.webp",
  description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  rating: 8.4,
  trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  phase: 3,
  runtime: 149,
  releaseDate: "April 27, 2018",
  boxOffice: "$2.048 billion",
  mainCharacters: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Doctor Strange"]
},
{
  id: 4,
  title: "Avengers: Endgame",
  year: 2019,
  director: "Anthony Russo, Joe Russo",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/786e1831-123b-4d2f-8e72-127cb89af13f.webp",
  description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  rating: 8.4,
  trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  phase: 3,
  runtime: 181,
  releaseDate: "April 26, 2019",
  boxOffice: "$2.798 billion",
  mainCharacters: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]
},
{
  id: 5,
  title: "Iron Man",
  year: 2008,
  director: "Jon Favreau",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/a3c1ad6d-5526-4aa3-a3e8-b29448d9c048.jpg",
  description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
  rating: 7.9,
  trailer: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
  phase: 1
},
{
  id: 6,
  title: "Captain America: The First Avenger",
  year: 2011,
  director: "Joe Johnston",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/c51222fa-9dcc-413e-8d9e-5afefd85763c.webp",
  description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
  rating: 6.9,
  trailer: "https://www.youtube.com/watch?v=JerVrbLldXw",
  phase: 1
},
{
  id: 7,
  title: "Thor",
  year: 2011,
  director: "Kenneth Branagh",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/52fe3dae-fef8-475c-8422-afd4e56ece3a.jpg",
  description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
  rating: 7.0,
  trailer: "https://www.youtube.com/watch?v=JOddp-nlNvQ",
  phase: 1
},
{
  id: 8,
  title: "Captain America: Civil War",
  year: 2016,
  director: "Anthony Russo, Joe Russo",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/72b5c290-79e9-4ea4-85ae-0e954361003b.jpg",
  description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
  rating: 7.8,
  trailer: "https://www.youtube.com/watch?v=dKrVegVI0Us",
  phase: 3
},
{
  id: 9,
  title: "Black Panther",
  year: 2018,
  director: "Ryan Coogler",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/d66bbdb4-f805-4ccc-8636-cddadd833876.webp",
  description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
  rating: 7.3,
  trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
  phase: 3
},
{
  id: 10,
  title: "Doctor Strange",
  year: 2016,
  director: "Scott Derrickson",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/fa855a07-1a8d-4156-a6bf-e6ab53fa461a.jpg",
  description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
  rating: 7.5,
  trailer: "https://www.youtube.com/watch?v=HSzx-zryEgM",
  phase: 3
},
{
  id: 11,
  title: "Guardians of the Galaxy",
  year: 2014,
  director: "James Gunn",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/9347159d-1dc6-470e-bb64-e46f28fcd089.jpg",
  description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
  rating: 8.0,
  trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
  phase: 2
},
{
  id: 12,
  title: "Spider-Man: Homecoming",
  year: 2017,
  director: "Jon Watts",
  poster: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/87f7ddfa-72dc-4bb8-8678-a42b64c13d83.jpg",
  description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
  rating: 7.4,
  trailer: "https://www.youtube.com/watch?v=n9DwoQ7HWvI",
  phase: 3
}];


// Characters data
const charactersData = [
{
  id: 1,
  name: "Iron Man",
  realName: "Tony Stark",
  portrayed: "Robert Downey Jr.",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/39085b19-3a09-48e8-83bb-bb474dd0ef53.webp",
  description: "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
  powers: ["Genius-level intellect", "Powered armor suit", "Flight", "Super strength", "Energy repulsors"],
  firstAppearance: "The Avengers (2012)"
},
{
  id: 2,
  name: "Captain America",
  realName: "Steve Rogers",
  portrayed: "Chris Evans",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/c51222fa-9dcc-413e-8d9e-5afefd85763c.webp",
  description: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the Avengers.",
  powers: ["Enhanced strength", "Enhanced durability", "Enhanced agility", "Healing factor", "Expert tactician"],
  firstAppearance: "The Avengers (2012)"
},
{
  id: 3,
  name: "Thor",
  realName: "Thor Odinson",
  portrayed: "Chris Hemsworth",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/3f11d9b4-e89f-4a47-b3bf-f27e1259b464.webp",
  description: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
  powers: ["Superhuman strength", "Electrokinesis", "Weather manipulation", "Flight (with Mjolnir)", "Longevity"],
  firstAppearance: "The Avengers (2012)"
},
{
  id: 4,
  name: "Hulk",
  realName: "Bruce Banner",
  portrayed: "Mark Ruffalo",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/2402707e-e3e1-43b9-bad8-c7e5412ef745.webp",
  description: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage.",
  powers: ["Superhuman strength", "Superhuman durability", "Regenerative healing", "Genius-level intellect (as Banner)"],
  firstAppearance: "The Avengers (2012)"
},
{
  id: 5,
  name: "Black Widow",
  realName: "Natasha Romanoff",
  portrayed: "Scarlett Johansson",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/367e0536-adc2-40b8-8f16-1ee1645bc8e9.webp",
  description: "Despite super spy Natasha Romanoff's checkered past, she's become one of S.H.I.E.L.D.'s most deadly assassins and a frequent member of the Avengers.",
  powers: ["Expert martial artist", "Expert marksman", "Master spy", "Peak human condition"],
  firstAppearance: "The Avengers (2012)"
},
{
  id: 6,
  name: "Hawkeye",
  realName: "Clint Barton",
  portrayed: "Jeremy Renner",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/e588b4b5-78fa-416e-91d2-67a836a997d5.webp",
  description: "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers' amazing archer.",
  powers: ["Master archer", "Expert marksman", "Expert tactician", "Expert martial artist"],
  firstAppearance: "The Avengers (2012)"
}];


// News data
const newsData = [
{
  id: 1,
  title: "New Avengers Movie Announced for 2025",
  date: "2023-05-15",
  image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  summary: "Marvel Studios has officially announced a new Avengers film set to release in 2025, bringing together both familiar faces and new heroes.",
  link: "#"
},
{
  id: 2,
  title: "Behind the Scenes: Special Effects in Endgame",
  date: "2023-04-22",
  image: "https://images.unsplash.com/photo-1560932684-5e552e2894e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  summary: "A new documentary reveals the incredible work behind the special effects that made Avengers: Endgame one of the most visually stunning films of all time.",
  link: "#"
},
{
  id: 3,
  title: "Avengers Cast Reunion at Comic-Con 2023",
  date: "2023-03-10",
  image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  summary: "The original six Avengers actors made a surprise appearance at Comic-Con, delighting fans with stories from their time working together.",
  link: "#"
}];


// Timeline data
const timelineData = [
{
  year: "April 2008",
  event: "Iron Man",
  description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil, becoming the world's first modern superhero.",
  phase: 1
},
{
  year: "August 2008",
  event: "The Incredible Hulk",
  description: "Dr. Bruce Banner transforms into the Hulk, becoming an unwitting pawn in the military's plan to revive the super soldier program through gamma radiation.",
  phase: 1
},
{
  year: "May 2010",
  event: "Iron Man 2",
  description: "When the world discovers his identity as Iron Man, Tony Stark must simultaneously deal with his deteriorating health and a vengeful madman connected to his father's legacy.",
  phase: 1
},
{
  year: "May 2011",
  event: "Thor",
  description: "The powerful but arrogant god Thor is cast out of Asgard to live among humans on Earth (Midgard), where he soon becomes one of their finest defenders.",
  phase: 1
},
{
  year: "September 2011",
  event: "Captain America: The First Avenger",
  description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum', becoming a hero during World War II.",
  phase: 1
},
{
  year: "May 2012",
  event: "The Avengers",
  description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  phase: 1
},
{
  year: "May 2013",
  event: "Iron Man 3",
  description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he embarks on a journey of rebuilding and retribution.",
  phase: 2
},
{
  year: "November 2013",
  event: "Thor: The Dark World",
  description: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
  phase: 2
},
{
  year: "April 2014",
  event: "Captain America: The Winter Soldier",
  description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
  phase: 2
},
{
  year: "October 2014",
  event: "Guardians of the Galaxy",
  description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
  phase: 2
},
{
  year: "May 2015",
  event: "Avengers: Age of Ultron",
  description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
  phase: 2
},
{
  year: "October 2015",
  event: "Ant-Man",
  description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
  phase: 2
},
{
  year: "May 2016",
  event: "Captain America: Civil War",
  description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man, dividing the team into opposing factions.",
  phase: 3
},
{
  year: "November 2016",
  event: "Doctor Strange",
  description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts, becoming the Sorcerer Supreme.",
  phase: 3
},
{
  year: "May 2017",
  event: "Guardians of the Galaxy Vol. 2",
  description: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
  phase: 3
},
{
  year: "September 2017",
  event: "Spider-Man: Homecoming",
  description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
  phase: 3
},
{
  year: "November 2017",
  event: "Thor: Ragnarok",
  description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world at the hands of the powerful and ruthless villain Hela.",
  phase: 3
},
{
  year: "March 2018",
  event: "Black Panther",
  description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
  phase: 3
},
{
  year: "May 2018",
  event: "Avengers: Infinity War",
  description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  phase: 3
},
{
  year: "August 2018",
  event: "Ant-Man and the Wasp",
  description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
  phase: 3
},
{
  year: "March 2019",
  event: "Captain Marvel",
  description: "When Earth is caught in the middle of a galactic war between two alien races, Carol Danvers becomes one of the universe's most powerful heroes.",
  phase: 3
},
{
  year: "April 2019",
  event: "Avengers: Endgame",
  description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  phase: 3
},
{
  year: "June 2019",
  event: "Spider-Man: Far From Home",
  description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
  phase: 3
},
{
  year: "July 2021",
  event: "Black Widow",
  description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
  phase: 4
},
{
  year: "December 2021",
  event: "Spider-Man: No Way Home",
  description: "With Spider-Man's identity now revealed, Peter seeks Doctor Strange's help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  phase: 4
}];


// FAQ data
const faqData = [
{
  question: "What is the correct order to watch the Avengers movies?",
  answer: "The chronological order is: Captain America: The First Avenger, The Avengers, Avengers: Age of Ultron, Captain America: Civil War, Avengers: Infinity War, and Avengers: Endgame."
},
{
  question: "Will there be more Avengers movies?",
  answer: "Yes, Marvel has announced future Avengers films including 'Avengers: The Kang Dynasty' and 'Avengers: Secret Wars'."
},
{
  question: "Who is the strongest Avenger?",
  answer: "This is debated among fans, but candidates include Thor, Hulk, Captain Marvel, and Scarlet Witch based on their demonstrated powers."
},
{
  question: "How can I watch all the Avengers movies?",
  answer: "All Avengers movies are available for streaming on Disney+, as well as for purchase or rental on various digital platforms."
}];


// Additional characters data
const additionalCharactersData = [
{
  id: 7,
  name: "Doctor Strange",
  realName: "Stephen Strange",
  portrayed: "Benedict Cumberbatch",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/e588b4b5-78fa-416e-91d2-67a836a997d5.webp",
  description: "Once a brilliant but arrogant surgeon, Doctor Strange now serves as the Sorcerer Supreme, Earth's foremost protector against magical and mystical threats.",
  powers: ["Mystic arts", "Time manipulation", "Astral projection", "Dimensional travel", "Magical artifacts"],
  firstAppearance: "Doctor Strange (2016)"
},
{
  id: 8,
  name: "Scarlet Witch",
  realName: "Wanda Maximoff",
  portrayed: "Elizabeth Olsen",
  image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/b3c79eea-d0b1-4dfb-94ec-b3ac2ad380c0.webp",
  description: "Enhanced by Mind Stone experiments, Wanda Maximoff possesses incredible reality-altering abilities that make her one of the most powerful Avengers.",
  powers: ["Chaos magic", "Telekinesis", "Telepathy", "Energy manipulation", "Reality warping"],
  firstAppearance: "Avengers: Age of Ultron (2015)"
}];


// Hero background images
const heroBackgroundImages = [
"https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/367f2abd-6370-4a1d-8b65-624e45edc7e8.jpg",
"https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/8360/18777e1c-ba0d-481d-8fdf-d4c1014133b6.jpg"];


// Navigation links
const navLinks = [
{ name: "Home", path: "#home" },
{ name: "Movies", path: "#movies" },
{ name: "Characters", path: "#characters" },
{ name: "Timeline", path: "#timeline" },
{ name: "News", path: "#news" },
{ name: "FAQ", path: "#faq" }];