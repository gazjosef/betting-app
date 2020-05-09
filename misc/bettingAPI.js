const oddsEl = document.getElementById('odds');
let outputEl = document.getElementById('output');
const APIkey = '0964ad4e3be969508766aef582e92012';

// Get Odds
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

// Event Listeners
oddsEl.addEventListener('click', getSports);
