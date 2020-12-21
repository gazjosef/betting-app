// API Key
const APIkey = '0964ad4e3be969508766aef582e92012';

const selectSport = document.getElementById('selectSport');
let sport = document.getElementById('selectSport').value;
let comp = document.getElementById('selectComp').value;
let region = document.getElementById('selectRegion').value;
let market = document.getElementById('selectMarket').value;

let dataObject = [];

// Buttons
const oddsBtn = document.getElementById('odds');
const sportsBtn = document.getElementById('sports');

// Output
let outputEl = document.getElementById('output');
let marketEl = document.getElementById('selectMarket');
let regionEl = document.getElementById('selectRegion');

// Get Sports
function getSports() {
  fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) => {
      dataObject = data.data;
      console.log(data);
      console.log(dataObject);
      displaySportOptions(data);
    });
}

// Sport Names
let allSports = []
let sports = []

// Display Sport Options
function displaySportOptions(data) {
  data.data.forEach((sport) => {
    let el = document.createElement('option');
    allSports.push(sport.group)
    el.textContent = sport.group;
    el.value = sport.key;
    if(allSports.indexOf(sport.group) !== sport.group) {
      sports.push(sport.group)
    }
    console.log(allSports);
    console.log(sports);
    // console.log(sports);
    // selectSport.appendChild(el);
  });
}

// Display Comp Options
function displayCompOptions() {

}

// Get Odds
function getOdds() {
  fetch(
    `https://api.the-odds-api.com/v3/odds/?sport=${sport}&region=${region}&mkt=${market}&apiKey=${APIkey}`
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
    event.sites.forEach((site) => {
      let bookmaker = document.createElement('div');
      bookmaker.innerText = site.site_nice;
      newEvent.appendChild(bookmaker);
      let br = document.createElement('br');
      newEvent.appendChild(br);

      // Create Home Team Event
      let newHomeEvent = document.createElement('div');
      newHomeEvent.classList.add('oddsDisplay');
      // Add Home Team Name
      let homeTeamName = document.createElement('div');
      homeTeamName.innerText = event.teams[0];
      newHomeEvent.appendChild(homeTeamName);
      // Add Home Team Odds
      let homeOdds = document.createElement('div');
      homeOdds.innerText = site.odds.h2h[0];
      newHomeEvent.appendChild(homeOdds);
      newHomeEvent.appendChild(br);
      // Append To New Event
      newEvent.appendChild(newHomeEvent);

      // Create Away Team Event
      let newAwayEvent = document.createElement('div');
      newAwayEvent.classList.add('oddsDisplay');
      // Add Away Team Name
      let awayTeamName = document.createElement('div');
      awayTeamName.innerText = event.teams[1];
      newAwayEvent.appendChild(awayTeamName);
      // Add Away Team Odds
      let awayOdds = document.createElement('div');
      awayOdds.innerText = site.odds.h2h[1];
      newAwayEvent.appendChild(awayOdds);
      newAwayEvent.appendChild(br);
      // Append To New Event
      newEvent.appendChild(newAwayEvent);
      // newEvent.appendChild(br);

      console.log(newEvent);
      outputEl.appendChild(newEvent);
      outputEl.appendChild(br);
    });
  });
}

// Display Team Names
function displayTeamNames(site) {
  site.teams;
}

// Display Odds
function displayOdds(site) {
  site.odds.forEach((site) => {});
}

// Select Sport
selectSport.onchange = function () {
  var selectedString = selectSport.options[selectSport.selectedIndex].value;
  sport = selectedString;
};

// Select Comp
selectSport.onchange = function () {
  var selectedString = selectSport.options[selectSport.selectedIndex].value;
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
