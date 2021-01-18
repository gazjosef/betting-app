// API Key
const APIkey = '0964ad4e3be969508766aef582e92012';

let dataObject = [];

// Output
const outputEl = document.getElementById('output');
const tableEl = document.getElementById('table');
const sportEl = document.getElementById('selectSport');
const compEl = document.getElementById('selectComp');
const marketEl = document.getElementById('selectMarket');
// let regionEl = document.getElementById('selectRegion');

// Values
let sport = sportEl.value;
let comp = compEl.value;
let region = "au"
let market = marketEl.value;

// Buttons
const oddsBtn = document.getElementById('oddsBtn');
const sportsBtn = document.getElementById('sportsBtn');

// Get Sports
function getSports() {
  fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) => {
      dataObject = data.data;
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
    
    allSports.push(sport.group)
    allSports.forEach(name => {
      if(sports.indexOf(name) === -1) {
        sports.push(name)
        let el = document.createElement('option');
        el.textContent = sport.group;
        el.value = sport.group;
        sportEl.appendChild(el);
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

    let homeArrayObject = {}
    let awayArrayObject = {}

    event.sites.forEach(site => {
      // homeArrayObject[site.site_nice] = site.odds.h2h[0]
      homeArrayObject[site.site_nice] = site.odds.h2h[0]
      awayArrayObject[site.site_nice] = site.odds.h2h[1]
    })

    let highestHomeArrayObject = Object.keys(homeArrayObject).reduce((acc, curr) => homeArrayObject[acc] > homeArrayObject[curr] ? acc : curr)
    let highestAwayArrayObject = Object.keys(awayArrayObject).reduce((acc, curr) => awayArrayObject[acc] > awayArrayObject[curr] ? acc : curr)
    
    console.log(homeArrayObject);
    console.log(awayArrayObject);

    // New Event
    let newEvent = document.createElement('div');

    // Home Team
    let home = document.createElement('div')
    home.classList.add("flex")

    let homeName = document.createElement('div');
    homeName.innerText = event.teams[0];
    home.appendChild(homeName);

    let homeSideOdds = document.createElement('div')
    homeSideOdds.classList.add('odds')
    let homeBookmaker = document.createElement('div')
    homeBookmaker.innerText = highestHomeArrayObject
    let homeOdds = document.createElement('div')
    homeOdds.innerText = homeArrayObject[highestHomeArrayObject]
    homeSideOdds.appendChild(homeBookmaker)
    homeSideOdds.appendChild(homeOdds)
    home.appendChild(homeSideOdds);

    
    // Away Team
    let away = document.createElement('div')
    away.classList.add("flex")

    let awayName = document.createElement('div');
    awayName.innerText = event.teams[1];
    away.appendChild(awayName)

    let awaySideOdds = document.createElement('div')
    awaySideOdds.classList.add('odds')
    let awayBookmaker = document.createElement('div')
    awayBookmaker.innerText = highestAwayArrayObject
    let awayOdds = document.createElement('div')
    awayOdds.innerText = awayArrayObject[highestAwayArrayObject]
    awaySideOdds.appendChild(awayBookmaker)
    awaySideOdds.appendChild(awayOdds)
    away.appendChild(awaySideOdds);
    
    newEvent.appendChild(home)
    newEvent.appendChild(away)

    let br = document.createElement('br');
    outputEl.appendChild(newEvent);
    outputEl.appendChild(br);
    console.log(newEvent);
  });
}

// Select Sport
sportEl.onchange = function () {
  var selectedString = sportEl.options[sportEl.selectedIndex].value;
  sport = selectedString
  dataObject.forEach(comp => {
    if(comp.group === sport) {
      let el = document.createElement('option');
      el.textContent = comp.title;
      el.value = comp.key;
      selectComp.appendChild(el)
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
// regionEl.onchange = function () {
//   var selectedString = regionEl.options[regionEl.selectedIndex].value;
//   region = selectedString;
// };