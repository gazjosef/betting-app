// Buttons
const oddsBtn = document.getElementById('odds');
const sportsBtn = document.getElementById('sports');

// Output
let outputEl = document.getElementById('output');
let marketEl = document.getElementById('selectMarket');
let regionEl = document.getElementById('selectRegion');

// API Key
const APIkey = '0964ad4e3be969508766aef582e92012';
let market = document.getElementById('selectMarket').value;
let region = document.getElementById('selectRegion').value;

// Get Sports
function getSports() {
  fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) =>
      data.data.forEach((sport) => {
        outputEl.innerHTML += '<li>' + sport.group + '</li>';
      })
    );
}

// Get Odds
function getOdds() {
  fetch(
    `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=${region}&mkt=${market}&apiKey=${APIkey}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

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
