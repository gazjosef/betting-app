import React, { useEffect, 
  // useState 
} from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
// import { Output } from './components/Output/Output'

function App() {
  // const [ oddsObject, setOddsObject ] = useState([])

  const APIkey = '0964ad4e3be969508766aef582e92012';

  // let markets = [ "h2h", "spreads", "totals" ]
  // let dataObject = {}

  useEffect( () => {


    const getOdds = async () => {

      const api_call = await fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=${APIkey}`
      );
        
      const data = await api_call.json();

      let oddsArray = data.data

      console.log(oddsArray);


    }
    getOdds()
    // function getOdds() {
    //   fetch(
    //     `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=${APIkey}`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       dataObject = data.data
    //       dataObject = JSON.parse(dataObject)
    //       console.log(dataObject);
    //     });
    // }
    // getOdds()
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

// const displayEvents = dataObject.map((event) => {
//   return (
//     <Fragment>
//       <tr>
//         <td rowSpan="2">{event.commence_time}</td>
//         <td>Roosters</td>
//         <td>SportsBet</td>
//         <td>$1.95</td>
//       </tr>
//       <tr>
//         <td>Storm</td>
//         <td>BetFair</td>
//         <td>$2.05</td>
//       </tr>
//     </Fragment>
//   )
// })

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
            {/* {displayEvents} */}
          </tbody>
        </table>

        {/* <Output /> */}
    </div>
  );
}

export default App;
