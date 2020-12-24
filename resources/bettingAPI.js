// API Key
const APIkey = '0964ad4e3be969508766aef582e92012';

const selectSport = document.getElementById('selectSport');
let sport = document.getElementById('selectSport').value;
let comp = document.getElementById('selectComp').value;
let region = document.getElementById('selectRegion').value;
let market = document.getElementById('selectMarket').value;

let dataObject = [];

// Buttons
const oddsBtn = document.getElementById('oddsBtn');
const sportsBtn = document.getElementById('sportsBtn');

// Output
let outputEl = document.getElementById('output');
let tableEl = document.getElementById('table');
let sportEl = document.getElementById('selectSport');
let compEl = document.getElementById('selectComp');
let marketEl = document.getElementById('selectMarket');
let regionEl = document.getElementById('selectRegion');

// Get Sports
function getSports() {
  fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) => {
      dataObject = data.data;
      displaySportOptions(data);
    });
}

// Sport Names
let allSports = []
let sports = []

// Display Sport Options
function displaySportOptions(data) {
  data.data.forEach((sport) => {
    
    allSports.push(sport.group)
    allSports.forEach(name => {
      if(sports.indexOf(name) === -1) {
        sports.push(name)
        let el = document.createElement('option');
        el.textContent = sport.group;
        el.value = sport.group;
        selectSport.appendChild(el);
      }
    })
  });
}

// Get Odds
function getOdds() {
  fetch(
    `https://api.the-odds-api.com/v3/odds/?sport=${comp}&region=${region}&mkt=${market}&apiKey=${APIkey}`
  )
    .then((res) => res.json())
    .then((data) => {
      dataObject = data.data;
      console.log(dataObject);
      displaySites(data);
    });
}

// Display Sites
function displaySites(data) {
  data.data.forEach((event) => {
    // New Event
    let newEvent = document.createElement('div');


    // Home Team
    let home = document.createElement('div')
    let homeName = document.createElement('h1');
    let homeSideOdds = document.createElement('div')
    homeName.innerText = event.teams[0];
    home.appendChild(homeName);
    home.appendChild(homeSideOdds);
    
    // Away Team
    let away = document.createElement('div')
    let awayName = document.createElement('h1');
    let awaySideOdds = document.createElement('div')
    awayName.innerText = event.teams[1];
    away.appendChild(awayName)
    away.appendChild(awaySideOdds);
    
    
    event.sites.forEach(site => {
      let bookmaker = document.createElement('div')
      bookmaker.innerText = site.site_nice
      homeSideOdds.appendChild(bookmaker)
      awaySideOdds.appendChild(bookmaker)
    })
      
    newEvent.appendChild(home)
    newEvent.appendChild(away)

    let br = document.createElement('br');
    outputEl.appendChild(newEvent);
    outputEl.appendChild(br);
    console.log(newEvent);
    
    // event.sites.forEach((site) => {
    //   let bookmaker = document.createElement('div');
    //   bookmaker.innerText = site.site_nice;
    //   newEvent.appendChild(bookmaker);
    //   newEvent.classList.add('eventDisplay');
    //   let br = document.createElement('br');

    //   // Create Home Team Event
    //   let newHomeEvent = document.createElement('div');
    //   newHomeEvent.classList.add('homeOdds');
    //   // Add Home Team Name
    //   let homeTeamName = document.createElement('div');
    //   homeTeamName.innerText = event.teams[0];
    //   newHomeEvent.appendChild(homeTeamName);
    //   // Add Home Team Odds
    //   let homeOdds = document.createElement('div');
    //   homeOdds.innerText = site.odds.h2h[0];
    //   newHomeEvent.appendChild(homeOdds);
    //   // Append To New Event
    //   newEvent.appendChild(newHomeEvent);

    //   // Create Away Team Event
    //   let newAwayEvent = document.createElement('div');
    //   newAwayEvent.classList.add('awayOdds');
    //   // Add Away Team Name
    //   let awayTeamName = document.createElement('div');
    //   awayTeamName.innerText = event.teams[1];
    //   newAwayEvent.appendChild(awayTeamName);
    //   // Add Away Team Odds
    //   let awayOdds = document.createElement('div');
    //   awayOdds.innerText = site.odds.h2h[1];
    //   newAwayEvent.appendChild(awayOdds);
    //   // Append To New Event
    //   newEvent.appendChild(newAwayEvent);

    //   console.log(newEvent);
    //   outputEl.appendChild(newEvent);
    //   outputEl.appendChild(br);
    // });
  });
}

// // Display Team Names
// function displayTeamNames(site) {
//   site.teams;
// }

// // Display Odds
// function displayOdds(site) {
//   site.odds.forEach((site) => {});
// }

// Select Sport
sportEl.onchange = function () {
  var selectedString = sportEl.options[sportEl.selectedIndex].value;
  sport = selectedString
  console.log(sport);
  dataObject.forEach(comp => {
    if(comp.group === sport) {
      let el = document.createElement('option');
      el.textContent = comp.title;
      el.value = comp.key;
      selectComp.appendChild(el)
      console.log(comp.title);
    }
  })
};

// Select Comp
selectComp.onchange = function () {
  var selectedString = selectComp.options[selectComp.selectedIndex].value;
  comp = selectedString;
};

// Select Market
marketEl.onchange = function () {
  var selectedString = marketEl.options[marketEl.selectedIndex].value;
  market = selectedString;
};

// Select Region
regionEl.onchange = function () {
  var selectedString = regionEl.options[regionEl.selectedIndex].value;
  region = selectedString;
};

// Event Listeners
// sportsBtn.addEventListener('click', getSports());
// oddsBtn.addEventListener('click', getOdds());
