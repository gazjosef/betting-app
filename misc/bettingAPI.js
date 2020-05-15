// API Key
const APIkey = '0964ad4e3be969508766aef582e92012';
const selectSport = document.getElementById('selectSport');
let market = document.getElementById('selectMarket').value;
let region = document.getElementById('selectRegion').value;
let sport = document.getElementById('selectSport').value;

// Buttons
const oddsBtn = document.getElementById('odds');
const sportsBtn = document.getElementById('sports');

// Output
let outputEl = document.getElementById('output');
let marketEl = document.getElementById('selectMarket');
let regionEl = document.getElementById('selectRegion');

// Request
let listOfSports = [];

// Get Sports
function getSports() {
  fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) =>
      // console.log(data)
      data.data.forEach((sport) => {
        listOfSports.push(sport.key);
        let el = document.createElement('option');
        el.textContent = sport.key;
        el.value = sport.key;
        selectSport.appendChild(el);
      })
    );
}

// Get Odds
function getOdds() {
  fetch(
    `https://api.the-odds-api.com/v3/odds/?sport=${sport}&region=${region}&mkt=${market}&apiKey=${APIkey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((event) => {
        event.sites.forEach((site) => {
          console.log(site.site_nice);
        });
        outputEl.innerHTML += '<div>' + event.teams + '</div>';
      });
    });
}

// Select Sport
selectSport.onchange = function () {
  var selectedString = selectSport.options[selectSport.selectedIndex].value;
  sport = selectedString;
};

// Select Market
marketEl.onchange = function () {
  console.log(market);
  var selectedString = marketEl.options[marketEl.selectedIndex].value;
  market = selectedString;
  console.log(market);
};

// Select Region
regionEl.onchange = function () {
  var selectedString = regionEl.options[regionEl.selectedIndex].value;
  region = selectedString;
};

// Event Listeners
// sportsBtn.addEventListener('click', getSports());
// oddsBtn.addEventListener('click', getOdds());
