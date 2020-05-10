const oddsBtn = document.getElementById('odds');
const sportsBtn = document.getElementById('sports');
let outputEl = document.getElementById('output');
const APIkey = '0964ad4e3be969508766aef582e92012';

// Get Sports
function getSports() {
  fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) =>
      data.data.forEach((sport) => {
        console.log(sport);
        outputEl.innerHTML += sport.group + ' ';
      })
    );
}

// Get Odds

function getOdds() {
  fetch(
    `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&apiKey=${APIkey}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// Event Listeners
// sportsBtn.addEventListener('click', getSports());
// oddsBtn.addEventListener('click', getOdds());
