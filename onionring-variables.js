// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring

var sites = [
  "https://bisexualism.emeowly.gay",
  "https://emeowly.gay",
  "https://pinkvampyr.leprd.space",
  "https://diffydude.neocities.org",
  "https://macaque.moe",
  "https://sunwukong.neocities.org/",
  "https://sugarforbrains.neocities.org",
  "https://shinyexe.neocities.org",
  "https://cyberneticdryad.neocities.org",
  "https://fatgrrlz.neocities.org",
  "https://freekittie.neocities.org",
  "https://transrats.neocities.org/",
  "https://debtdeath.neocities.org/",
  "https://s1m0n099.neocities.org/",
  "https://groundedwren.com/",
  "https://mizuki.world/",
  "https://whiona.me/",
  "https://asteromorph.neocities.org/",
  "https://scrapes-and-bruises.neocities.org",
  "https://colortraks.net",
  "https://buntsukim.neocities.org",
  "https://aribluejeans.neocities.org/",
  "https://mormoroi.com/",
  "https://wrender.neocities.org/",
  "https://butch-barks.neocities.org/",
  "https://coeurl.neocities.org/",
  "https://liliyoa.neocities.org/",
  "https://bonics.neocities.org/",
  "https://tahimik.com/",
  "https://exlitry.world/",
  "https://xandra.cc/",
  "https://hell-mouth.neocities.org/",
  "https://karuma.me/",
  "https://cyberangel.club/",
  "https://championbeatrix.neocities.org/",
  "https://lonelyjuly.online/",
  "https://imaginarykarin.com/",
  "https://bartkk.xyz/",
  "https://ranmagender.com/",
  "https://milkyway.moe/",
  "https://coffinsleeper.neocities.org/",
  "https://kesterite.neocities.org/",
  "https://celli.neocities.org/",
  "https://loungegalactic.neocities.org/",
  "https://oliscrabwife.neocities.org/",
  "https://nynasunner.space/",
  "https://zj.neocities.org/",
  "https://chimeramanticore.neocities.org/",
  "https://pizzacatdelights.neocities.org/",
  "https://naptime.neocities.org/",
  "https://doqmeat.com/",
  "https://succubunnii.neocities.org/",
  "https://metaparadox.neocities.org/",
  "https://metmoxie.com/",
  "https://adilene.net/",
  "https://sylvanianforest.neocities.org/",
  "https://harvest-home.neocities.org/",
  "https://galissia.neocities.org/",
  "https://troy-sucks.neocities.org/",
  "https://chaoticdreamz.neocities.org/",
  "https://sonasona.neocities.org/",
  "https://emocowboy.neocities.org/",
  "https://bibliohound.neocities.org/",
  "https://sidetangent.neocities.org/",
  "https://whey-isolate.neocities.org/",
  "https://kanade.nekoweb.org/",
  "https://sepulchredsacrament.neocities.org/",
  "https://262ravens.neocities.org/",
];

var mainObj = [
  {
    name: "bisexualism",
    website: "bisexualism.emeowly.gay",
    desc: "the bisexualism webring!",
    button: "bisexualismwebring.gif",
  },

  {
    name: "emily",
    website: "emeowly.gay",
    desc: "creator of the bisexualism webring and auDHD native with a website with cats, art and games",
    button: "emeowly.gif",
  },

  {
    name: "Claire",
    website: "pinkvampyr.leprd.space",
    desc: "just my cute little personal website!",
    button: "pinkvampyr.gif",
  },

  {
    name: "diffydude",
    website: "diffydude.neocities.org",
    desc: "Im a bi furry who has joined the old web thingy, and I've been running a personal website for a few months",
    button: "diffydude.png",
  },

  {
    name: "Azure ",
    website: "macaque.moe",
    desc: "This site houses the shrines, essays, and soul of the webmaster, who also just-so-happens to be the proud genderfucked bisexual that the gatekeepers warned you about!",
    button: "macaque.png",
  },

  {
    name: "Verdant",
    website: "sunwukong.neocities.org",
    desc: "My fun in the sun! A purely personal website run by a genderfucked and sexualityfucked puppy. Happily bi4bi with my Azure.",
    button: "sunwukong.png",
  },

  {
    name: "benny",
    website: "sugarforbrains.neocities.org",
    desc: "a colorful personal site belonging to a dog that somehow gained access to a computer",
    button: "sugarforbrains.gif",
  },

  {
    name: "jamie",
    website: "shinyexe.neocities.org",
    desc: "silly web zone i made to have fun and indulge in the things i love!",
    button: "shinyexe.gif",
  },

  {
    name: "Dryad",
    website: "cyberneticdryad.neocities.org",
    desc: "my cozy home on the internet! come in and have some tea and a snack. =3",
    button: "cyberneticdryad.gif",
  },

  {
    name: "fatgrrlz",
    website: "fatgrrlz.neocities.org",
    desc: "a bi girl thing who draws fat girls and other cute stuff",
    button: "fatgrrlz.gif",
  },

  {
    name: "Thorn",
    website: " freekittie.neocities.org",
    desc: "An amateur personal website where I share my art, things I find interesting, a playlist of my favorite songs, essays I think are cool, websites I think are neat, and way too many buttons",
    button: "freekittie.png",
  },

  {
    name: "Jay",
    website: "transrats.neocities.org",
    desc: "Pokemon Collection Catalog, Silly Mode Zone",
    button: "transrats.gif",
  },

  {
    name: "cc",
    website: "debtdeath.neocities.org",
    desc: "My little home away from social media for my fanart (SFW), my fanfiction (NSFW), and my many miscellaneous interests.",
    button: "debtdeath.png",
  },

  {
    name: "Simon",
    website: "s1m0n099.neocities.org",
    desc: "Simon's planetarium is a space themed website, focusing on astronomy, and my daily life :)",
    button: "s1m0n099.png",
  },

  {
    name: "GroundedWren",
    website: "groundedwren.com",
    desc: "A bisexual programmer's side-project website!",
    button: "groundedwren.png",
  },

  {
    name: "Mizuki",
    website: "mizuki.world",
    desc: "Mizuki's world of ocs, menhera, fashion, and more, run by the cutest bi trans girl alive.",
    button: "mizukibutton.gif",
  },

  {
    name: "whiona",
    website: "whiona.me",
    desc: "A personal site containing my creative works and other fun stuff!",
    button: "whiona.png",
  },

  {
    name: "danny",
    website: "asteromorph.neocities.org",
    desc: "Personal website featuring a blog and some things I enjoy (mostly Kirby).",
    button: "asteromorph.gif",
  },

  {
    name: "scrapes and bruises",
    website: "scrapes-and-bruises.neocities.org",
    desc: "queer, plural, and fandom history by a bisexual asexual",
    button: "ph.png",
  },

  {
    name: "robin apollo",
    website: "colortraks.net",
    desc: "personal/hobby website run by an obsolete tech enthusiast!",
    button: "colortraks.png",
  },

  {
    name: "the walking fish",
    website: "buntsukim.neocities.org",
    desc: "a site made by a fish that happens to have legs and also is bisexual. personal site basically made simply to be silly.",
    button: "buntsukim.jpg",
  },

  {
    name: "Ari's Garden",
    website: "aribluejeans.neocities.org",
    desc: "Personal website where I keep track of the things that I enjoy as a reminder to myself that I do, in fact, still enjoy things",
    button: "aribluejeans.gif",
  },

  {
    name: "strix",
    website: "mormoroi.com",
    desc: "personal site for art, stories, and other creative",
    button: "mormoroi.png",
  },

  {
    name: "Wren",
    website: "wrender.neocities.org",
    desc: "a fun personal website for me to explore the wonders of web design, talk about my interests and myself, post my art, and generally have a good time!",
    button: "wrender.gif",
  },

  {
    name: "Butch Barks",
    website: "butch-barks.neocities.org",
    desc: "Butch-Barks is a website hosted by a (bisexual!) trans man who is working on creating a space to provide resources and history to FTM and transmasculine people along with just being a semi-daily blog about existing as a butch trans man. You can expect everything from shrines for historic pirates to discussions on HRT and my personal journey through transition",
    button: "butch-barks.png",
  },

  {
    name: "ashton",
    website: "coeurl.neocities.org",
    desc: "just a personal creative space, for writing and whatever else",
    button: "coeurl.png",
  },

  {
    name: "liliyoa",
    website: "liliyoa.neocities.org",
    desc: "contains cat picture(s)",
    button: "liliyoa.gif",
  },

  {
    name: "FallCat",
    website: "bonics.neocities.org",
    desc: "A personal website where I scream into the void (gayly)",
    button: "bonics.gif",
  },

  {
    name: "tahimik",
    website: "tahimik.com",
    desc: "the blog of a quiet (bisexual) person who has a lot to say",
    button: "tahimik.png",
  },

  {
    name: "Charon Faustinus",
    website: "exlitry.world",
    desc: "This is Charon Faustinus's personal site, Featuring all of my VRChat avatars. This is the result of 4000+ hours in VRChat",
    button: "exlitry-world.gif",
  },

  {
    name: "alexandra",
    website: "xandra.cc",
    desc: "a personal website dedicated to the interests and writings of its curator",
    button: "xandra.png",
  },

  {
    name: "Lillith",
    website: "hell-mouth.neocities.org",
    desc: "A personal website with lots of medieval art. I also post some of my sewing, pictures of cats, and other things I like.",
    button: "hell-mouth.gif",
  },

  {
    name: "ten",
    website: "karuma.me",
    desc: "a personal webspace where i share my interests, thoughts, and projects!",
    button: "10kph.png",
  },

  {
    name: "angel",
    website: "cyberangel.club",
    desc: "a personal site that i use to improve my coding skills as well as balance my creativity and accessibility. doubles as blog :)",
    button: "cyberangel.gif",
  },

  {
    name: "beatrix",
    website: "championbeatrix.neocities.org",
    desc: "auto-archival project/personal site by a bisexual girl who loves to talk",
    button: "championbeatrix.gif",
  },

  {
    name: "LonelyJuly",
    website: "lonelyjuly.online",
    desc: "Personal website of LonelyJuly",
    button: "lonelyjuly.gif",
  },

  {
    name: "Karin",
    website: "imaginarykarin.com",
    desc: "Personal blog and art gallery. Mostly revolves around animals, Scandinavian nature, and fantasy nerdery.",
    button: "imaginarykarin.jpg",
  },

  {
    name: "zack",
    website: "bartkk.xyz",
    desc: "Personal website of Zack The Raccoon :3",
    button: "bartkk.gif",
  },

  {
    name: "Sasha Henriksen",
    website: "ranmagender.com",
    desc: "A personal site of someone rather enthusiastic about a lot of things. A bunker to escape web 3.0 or whatever its being spun as.",
    button: "ranmagender.png",
  },

  {
    name: "milky",
    website: "milkyway.moe",
    desc: "website created by milky in their free time. kinda wacky silly",
    button: "milkywaymoe.gif",
  },

  {
    name: "alina",
    website: "coffinsleeper.neocities.org",
    desc: "a small website for me, music, and vampires",
    button: "coffinsleeper.png",
  },

  {
    name: "sage",
    website: "kesterite.neocities.org",
    desc: "personal site for a wannabe punk digital artist. contains art, links, resources, and a couple short articles. unabashedly disabled, trans, bisexual, and disorganized.",
    button: "kesterite.png",
  },

  {
    name: "miles",
    website: "celli.neocities.org",
    desc: "personal site by a futch bisexual girlboy with way too much time on her hands",
    button: "celli.png",
  },

  {
    name: "Bucket!",
    website: "loungegalactic.neocities.org",
    desc: "My personal corner of the web, art project, and graphics dump! Come relax in The Lounge! {Flashing TW}",
    button: "loungegalactic.png",
  },

  {
    name: "Kyo",
    website: "oliscrabwife.neocities.org",
    desc: "personal website dedicated to everything fun i find on the internet",
    button: "oliscrabwife.gif",
  },

  {
    name: "Nyna",
    website: "nynasunner.space",
    desc: "The personal site of a junior web developer who rambles occasionally and obsesses over mildly obscure things",
    button: "nynasunner.gif",
  },

  {
    name: "zj",
    website: "zj.neocities.org",
    desc: "personal site where i post my silly lil thoughts and mess around :)",
    button: "zj.png",
  },

  {
    name: "juno",
    website: "chimeramanticore.neocities.org",
    desc: "my little webpage! i'm a creative of various types and an avid animatronic enthusiast. just goofin around on neocities :]",
    button: "chimeramanticore.gif",
  },

  {
    name: "Pizzacat Delights",
    website: "pizzacatdelights.neocities.org",
    desc: "This is a Hello Kitty-themed website where there's drawings, shrines, essays, cute things and more!",
    button: "pizzacatdelights.png",
  },

  {
    name: "Saren",
    website: "naptime.neocities.org",
    desc: "a cozy little abode of a sleepy shaman",
    button: "naptime.png",
  },

  {
    name: "des",
    website: "doqmeat.com",
    desc: "a personal website dedicated to my silly little life and the things that i love!",
    button: "doqmeat.png",
  },

  {
    name: "succubunnii",
    website: "succubunnii.neocities.org",
    desc: "a demonic bunny vtuber just started to learn how to build a personal webspace to escape social medias!",
    button: "succubunnii.png",
  },

  {
    name: "Olivia",
    website: "metaparadox.neocities.org",
    desc: "My little haven of personal website nostalgia with info about my hobbies and history, with lots of free graphics both new and old.",
    button: "metaparadox.gif",
  },

  {
    name: "Moxie",
    website: "metmoxie.com",
    desc: "A Musk and Meta-free personal website run by a Millennial who loves to create with code and words.",
    button: "metmoxie.png",
  },

  {
    name: "Adilene",
    website: "adilene.net",
    desc: "Hatsune Miku inspired site!",
    button: "adilene.png",
  },

  {
    name: "mei sylvany",
    website: "sylvanianforest.neocities.org",
    desc: "The forest is personal proyect, made as a way to have a space in the internet that is truly my own. It is a compilation of my interests, hobbies, art, music, etc.",
    button: "sylvanianforest.gif",
  },

  {
    name: "Kit",
    website: "harvest-home.neocities.org",
    desc: "A personal website about music, writing, and whatever else I find interesting",
    button: "harvest-home.png",
  },

  {
    name: "Molly",
    website: "galissia.neocities.org",
    desc: "A cozy lil' corner of the internet where I, an AuDHD aromantic bisexual, can let loose and express myself!",
    button: "galissia.gif",
  },

  {
    name: "aiden!",
    website: "troy-sucks.neocities.org",
    desc: "silly site with the swag. check out my webcomic! :D",
    button: "troy-sucks.gif",
  },

  {
    name: "Alia",
    website: "chaoticdreamz.neocities.org",
    desc: "cool website made by a loser",
    button: "chaoticdreamz.png",
  },

  {
    name: "Sonasona",
    website: "sonasona.neocities.org",
    desc: "On my site, I mainly use it as a hub for my art, in-development comic (kinda), my writing works, my simracing schemes, and soon, motorsports shrines :P",
    button: "sonasona.png",
  },

  {
    name: "Michael",
    website: "emocowboy.neocities.org",
    desc: "the most emo site on the web",
    button: "emocowboy.gif",
  },

  {
    name: "Wildcat",
    website: "bibliohound.neocities.org",
    desc: "The personal website of a bisexual writer and OC curator!",
    button: "bibliohound.png",
  },

  {
    name: "Erwin",
    website: "sidetangent.neocities.org",
    desc: "Just a little fellow wanting to help the indie net by being apart of a community/ring, spreading new sites to more people :3",
    button: "sidetangent.gif",
  },

  {
    name: "Whey_Isolate",
    website: "whey-isolate.neocities.org",
    desc: "Art, writing, photography, and more from New England's favorite autistic bisexual furry twink :3",
    button: "whey-isolate.png",
  },

  {
    name: "kanana",
    website: "kanade.nekoweb.org",
    desc: "personal website that's kanade themed",
    button: "kanade.gif",
  },

  {
    name: "harry m",
    website: "sepulchredsacrament.neocities.org",
    desc: "silly rambles about stuff no one cares about",
    button: "sepulchredsacrament.png",
  },

  {
    name: "Angee",
    website: "262ravens.neocities.org",
    desc: "personal website that i started working on as an art portfolio, has expanded to include lots more :)",
    button: "262ravens.png",
  },
];

//the name of the ring
var ringName = "bisexualism";

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = "bisexualism";

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = "https://bisexualism.neocities.org/";

//should the widget include a random button?
var useRandom = false;
