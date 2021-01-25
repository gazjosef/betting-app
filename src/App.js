import React, { useEffect, useState } from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
// import { Output } from './components/Output/Output'

function App() {
  const [ oddsObject, setOddsObject ] = useState([])

  const APIkey = '0964ad4e3be969508766aef582e92012';

  // let markets = [ "h2h", "spreads", "totals" ]

  useEffect( () => {
    async function getOdds() {
      const response = await fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=${APIkey}`
      );
      response.json()
        .then((data) => {
          setOddsObject(data.data)
        })
        .catch(err => console.log(err));
    }
    getOdds()
  }, [])


  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let day = a.getDate();
    let hour = a.getHours();
    let min = ("0" + a.getMinutes()).slice(-2);
    // let sec = a.getSeconds();
    let time = day + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}

const displayEvents = oddsObject.map((event) => {
  return (
    <>
      <tr>
        <td rowSpan="2">{timeConverter(event.commence_time)}</td>
        <td>{event.teams[0]}</td>
        <td>SportsBet</td>
        <td>$1.95</td>
      </tr>
      <tr>
        <td>{event.teams[1]}</td>
        <td>BetFair</td>
        <td>$2.05</td>
      </tr>
    </>
  )
})

console.log(oddsObject);
  return (
    <div className="app">
        <SearchBar />

        <table>
          <thead>
            <tr>
            <th scope="col">Start Time</th>
            <th scope="col">Team</th>
            <th scope="col">Bookmaker</th>
            <th scope="col">Odds</th>
            </tr>
          </thead>
          <tbody>
            {displayEvents}
          </tbody>
        </table>

        {/* <Output /> */}
    </div>
  );
}

export default App;
