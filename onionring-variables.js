// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var mainObj = [
    {
        name: "bisexualism ",
        website: "bisexualism.emeowly.gay",
        desc: "the bisexualism webring!",
        button: "bisexualismwebring.gif"
    },
    
    {
        name: "emily",
        website: "emeowly.gay",
        desc: "creator of the bisexualism webring and auDHD native with a website with cats, art and games",
        button: "emeowly.gif"
    },
    
    {
        name: "Claire",
        website: "pinkvampyr.leprd.space",
        desc: "just my cute little personal website!",
        button: "pinkvampyr.gif"
    },
    
    {
        name: "diffydude",
        website: "diffydude.neocities.org",
        desc: "Im a bi furry who has joined the old web thingy, and I've been running a personal website for a few months",
        button: "diffydude.gif"
    },
    
    {
        name: "Azure ",
        website: "macaque.moe",
        desc: "This site houses the shrines, essays, and soul of the webmaster, who also just-so-happens to be the proud genderfucked bisexual that the gatekeepers warned you about!",
        button: "macaque.png"
    },
    
    {
        name: "Verdant",
        website: "sunwukong.neocities.org",
        desc: "My fun in the sun! A purely personal website run by a genderfucked and sexualityfucked puppy. Happily bi4bi with my Azure.",
        button: "sunwukong.png"
    },
    
    {
        name: "benny",
        website: "sugarforbrains.neocities.org",
        desc: "a colorful personal site belonging to a dog that somehow gained access to a computer",
        button: "sugarforbrains.gif"
    },
    
    {
        name: "jamie",
        website: "shinyexe.neocities.org",
        desc: "silly web zone i made to have fun and indulge in the things i love!",
        button: "shinyexe.gif"
    },
    
    {
        name: "Dryad",
        website: "cyberneticdryad.neocities.org",
        desc: "my cozy home on the internet! come in and have some tea and a snack. =3",
        button: "cyberneticdryad.gif"
    },
    
    {
        name: "fatgrrlz",
        website: "fatgrrlz.neocities.org",
        desc: "a bi girl thing who draws fat girls and other cute stuff",
        button: "fatgrrlz.gif"
    },
    
    {
        name: "Thorn",
        website: " freekittie.neocities.org",
        desc: "An amateur personal website where I share my art, things I find interesting, a playlist of my favorite songs, essays I think are cool, websites I think are neat, and way too many buttons",
        button: "freekittie.png"
    },
    
    {
        name: "Jay",
        website: "transrats.neocities.org",
        desc: "Pokemon Collection Catalog, Silly Mode Zone",
        button: "transrats.gif"
    },
    
    {
        name: "cc",
        website: "debtdeath.neocities.org",
        desc: "My little home away from social media for my fanart (SFW), my fanfiction (NSFW), and my many miscellaneous interests.",
        button: "debtdeath.png"
    },
    
    {
        name: "Simon",
        website: "s1m0n099.neocities.org",
        desc: "Simon's planetarium is a space themed website, focusing on astronomy, and my daily life :)",
        button: "s1m0n099.png"
    },
    
    {
        name: "GroundedWren",
        website: "groundedwren.com",
        desc: "A bisexual programmer's side-project website!",
        button: "groundedwren.png"
    },
    
    {
        name: "Mizuki",
        website: "mizuki.world",
        desc: "Mizuki's world of ocs, menhera, fashion, and more, run by the cutest bi trans girl alive.",
        button: "mizukibutton.gif"
    },
    
    {
        name: "whiona",
        website: "whiona.me",
        desc: "A personal site containing my creative works and other fun stuff!",
        button: "whiona.png"
    },
    
    {
        name: "danny",
        website: "asteromorph.neocities.org",
        desc: "Personal website featuring a blog and some things I enjoy (mostly Kirby).",
        button: "asteromorph.gif"
    },
    
    {
        name: "scrapes and bruises",
        website: "scrapes-and-bruises.neocities.org",
        desc: "queer, plural, and fandom history by a bisexual asexual",
        button: "ph.png"
    },
    
    {
        name: "robin apollo",
        website: "colortraks.net",
        desc: "personal/hobby website run by an obsolete tech enthusiast!",
        button: "colortraks.png"
    },
    
    {
        name: "the walking fish",
        website: "buntsukim.neocities.org",
        desc: "a site made by a fish that happens to have legs and also is bisexual. personal site basically made simply to be silly.",
        button: "buntsukim.jpg"
    },
    
    {
        name: "Ari's Garden",
        website: "aribluejeans.neocities.org",
        desc: "Personal website where I keep track of the things that I enjoy as a reminder to myself that I do, in fact, still enjoy things",
        button: "aribluejeans.gif"
    },
    
    {
        name: "strix",
        website: "mormoroi.com",
        desc: "personal site for art, stories, and other creative",
        button: "mormoroi.png"
    },
    
    {
        name: "Wren",
        website: "wrender.neocities.org",
        desc: "a fun personal website for me to explore the wonders of web design, talk about my interests and myself, post my art, and generally have a good time!",
        button: "wrender.gif"
    },
    
    {
        name: "Butch Barks",
        website: "butch-barks.neocities.org",
        desc: "Butch-Barks is a website hosted by a (bisexual!) trans man who is working on creating a space to provide resources and history to FTM and transmasculine people along with just being a semi-daily blog about existing as a butch trans man. You can expect everything from shrines for historic pirates to discussions on HRT and my personal journey through transition",
        button: "butch-barks.png"
    },
    
    {
        name: "ashton",
        website: "coeurl.neocities.org",
        desc: "just a personal creative space, for writing and whatever else",
        button: "coeurl.png"
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
        website: "10kph.neocities.org",
        desc: "a personal webspace where i share my interests, thoughts, and projects!",
        button: "10kph.png",
    },
    
    {
        name: "siph",
        website: "siph.neocities.org",
        desc: "I am a non binary bisexual 16 year old. My website is relatively new.",
        button: "siph.gif",
    },
    
    
];

var sites = [
    'https://bisexualism.emeowly.gay',
    'https://emeowly.gay',
    'https://pinkvampyr.leprd.space',
    'https://diffydude.neocities.org',
    'https://macaque.moe',
    'https://sunwukong.neocities.org/',
    'https://sugarforbrains.neocities.org',
    'https://shinyexe.neocities.org',
    'https://cyberneticdryad.neocities.org',
    'https://fatgrrlz.neocities.org',
    'https://freekittie.neocities.org',
    'https://transrats.neocities.org/',
    'https://debtdeath.neocities.org/',
    'https://s1m0n099.neocities.org/',
    'https://groundedwren.com/',
    'https://mizuki.world/',
    'https://whiona.me/',
    'https://asteromorph.neocities.org/',
    'https://scrapes-and-bruises.neocities.org',
    'https://colortraks.net',
    'https://buntsukim.neocities.org',
    'https://aribluejeans.neocities.org/',
    'https://mormoroi.com/',
    'https://wrender.neocities.org/',
    'https://butch-barks.neocities.org/',
    'https://coeurl.neocities.org/',
    'https://liliyoa.neocities.org/',
    'https://bonics.neocities.org/',
    'https://tahimik.com/',
    'https://exlitry.world/',
    'https://xandra.cc/',
    'https://hell-mouth.neocities.org/',
    'https://10kph.neocities.org/',
    'https://siph.neocities.org/',
];


//the name of the ring
var ringName = 'bisexualism';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'bisexualism';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://bisexualism.emeowly.gay/';

//should the widget include a random button?
var useRandom = false;
