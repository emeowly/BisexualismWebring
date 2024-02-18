// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < members[i].website.length; i++) {
  if (thisSite.startsWith(members[i].website)) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomSite() { 
  otherSites = members[i].website.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', 
  `
  This site isn't part of the ${ringName} webring yet. You should talk to the manager to have your site added to the list!
  `);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? members[i].website.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= members[i].website.length) ? 0 : thisIndex+1;


  //this is the code that displays the widget - EDIT THIS if you want to change the structure
  tag.insertAdjacentHTML('afterbegin', `
  <table style="text-align:center;margin: 0 auto;">
    <tr>
      <td class='webring-prev'><a href='${members[i].website[previousIndex]}'>← </a></td>
      <td class='webring-info'><a href="${indexPage}">${ringName}</a></br>
      <span class='webring-links'>
        ${randomText}</span>
      <td class='webring-next'><a href='${members[i].website[nextIndex]}'> →</a></td>
    </tr>
  </table>
  `);

}
