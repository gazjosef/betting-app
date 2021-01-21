import React, { useEffect } from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
import { Output } from './components/Output/Output'

function App() {

  const APIkey = '0964ad4e3be969508766aef582e92012';

  let markets = [ "h2h", "spreads", "totals" ]
  let dataObject = {}

  useEffect( () => {
    markets.forEach((market) => {
      console.log(market);
    })
    function getOdds() {
      fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=${APIkey}`
      )
        .then((res) => res.json())
        .then((data) => {
          dataObject = data.data
          console.log(dataObject);
        });
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
    let min = a.getMinutes();
    // let sec = a.getSeconds();
    let time = day + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}

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

          </tbody>
        </table>

        <Output />
    </div>
  );
}

export default App;
