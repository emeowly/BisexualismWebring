// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    'https://bisexualism.emeowly.gay',
    'https://emeowly.gay',
    'https://pinkvampyr.leprd.space',
    'https://diffydude.neocities.org',
    'https://macaque.moe',
    'https://sunwukong.neocities.org/',
    'https://sugarforbrains.neocities.org',
    'https://shinyexe.neocities.org',
    'https://jeji.neocities.org',
    'https://cyberneticdryad.neocities.org',
    'https://fatgrrlz.neocities.org',
    'https://freekittie.neocities.org',
    'https://transrats.neocities.org/',
    'https://debtdeath.neocities.org/',
    'https://s1m0n099.neocities.org/',
    'https://groundedwren.com/',
    'https://mizuki.world/',
    'https://whiona.me/',
    'https://asteromorph.neocities.org/'
];

//the name of the ring
var ringName = 'Bisexualism';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'bisexualism';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://bisexualism.emeowly.gay/';

//should the widget include a random button?
var useRandom = false;
