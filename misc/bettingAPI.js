// API Key
const APIkey = '0964ad4e3be969508766aef582e92012';

const selectSport = document.getElementById('selectSport');
let market = document.getElementById('selectMarket').value;
let region = document.getElementById('selectRegion').value;
let sport = document.getElementById('selectSport').value;

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
      displaySportOptions(data);
    });
}

// Display Sport Options
function displaySportOptions(data) {
  data.data.forEach((sport) => {
    let el = document.createElement('option');
    el.textContent = sport.title;
    el.value = sport.key;
    selectSport.appendChild(el);
  });
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
    event.sites.forEach((site) => {
      console.log(site.odds.h2h); // Works
      site.odds.h2h.forEach((odd) => {
        console.log(site, odd);
      });
      console.log(`site.odds.${market}`); // Doesn't work
      // displayOdds(site);
      outputEl.innerHTML +=
        '<div>' + event.teams + site.site_nice + site.odds + '</div>';
    });
  });
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
