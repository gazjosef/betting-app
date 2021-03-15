import React, { useEffect, useState } from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
// import { Output } from './components/Output/Output'

function App() {
  const [ oddsObject, setOddsObject ] = useState([])
  // const [ allCompNames, setAllCompNames ] = useState([])
  const [ compNames, setCompNames ] = useState([])
  const [ selectedComp, setSelectedComp ] = useState()

  const APIkey = '0964ad4e3be969508766aef582e92012';

  // let markets = [ "h2h", "spreads", "totals" ]

  useEffect( () => {
    async function loadOdds() {
      const response = await fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=${APIkey}`
      );
      response.json()
        .then((data) => {
          setOddsObject(data.data)
          console.table(oddsObject);
        })
        .catch(err => console.log(err));
    }
    loadOdds()
    getOdds()
  }, [])

  const getOdds = () => {
    console.log("this ran");
    fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("data received");
      console.table(data.data);
      displaySportOptions(data);
    });  
  }

  const displaySportOptions = (data) => {
    const allCompNames = []
    const singleCompNames = []

    data.data.forEach((sport) => {
      allCompNames.push(sport.group)
    })

    allCompNames.forEach(name => {
      if (singleCompNames.indexOf(name) === -1) {
        singleCompNames.push(name);
      }      
    })
    setCompNames(singleCompNames)
    console.log("displaySportOptions: ", compNames);
  }

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

  const highestHomeBookmaker = (events) => {
    let homeArrayObject = {}
    events.forEach(site => {
      homeArrayObject[site.site_key] = site.odds.h2h[0]
    })
    let highestHomeArrayObject = Object.keys(homeArrayObject).reduce((acc, curr) => homeArrayObject[acc] > homeArrayObject[curr] ? acc : curr)

    return highestHomeArrayObject
  }

  const highestHomeOdds = (events) => {
    let homeArrayObject = {}
    events.forEach(site => {
      homeArrayObject[site.site_key] = site.odds.h2h[0]
    })
    let highestHomeArrayObject = Object.keys(homeArrayObject).reduce((acc, curr) => homeArrayObject[acc] > homeArrayObject[curr] ? acc : curr)

    return homeArrayObject[highestHomeArrayObject]
  }

  const highestAwayBookmaker = (events) => {
    let awayArrayObject = {}
    events.forEach(site => {
      awayArrayObject[site.site_key] = site.odds.h2h[1]
    })
    let highestAwayArrayObject = Object.keys(awayArrayObject).reduce((acc, curr) => awayArrayObject[acc] > awayArrayObject[curr] ? acc : curr)

    return highestAwayArrayObject
  }

  const highestAwayOdds = (events) => {
    let awayArrayObject = {}
    events.forEach(site => {
      awayArrayObject[site.site_key] = site.odds.h2h[1]
    })
    let highestAwayArrayObject = Object.keys(awayArrayObject).reduce((acc, curr) => awayArrayObject[acc] > awayArrayObject[curr] ? acc : curr)

    return awayArrayObject[highestAwayArrayObject]
  }

  const highestDrawBookmaker = (events) => {
    let drawArrayObject = {}
    events.forEach(site => {
      drawArrayObject[site.site_key] = site.odds.h2h[2]
    })
    let highestDrawArrayObject = Object.keys(drawArrayObject).reduce((acc, curr) => drawArrayObject[acc] > drawArrayObject[curr] ? acc : curr)

    return highestDrawArrayObject
  }

  const highestDrawOdds = (events) => {
    let drawArrayObject = {}
    events.forEach(site => {
      drawArrayObject[site.site_key] = site.odds.h2h[2]
    })
    let highestDrawArrayObject = Object.keys(drawArrayObject).reduce((acc, curr) => drawArrayObject[acc] > drawArrayObject[curr] ? acc : curr)

    return drawArrayObject[highestDrawArrayObject]
  }

  const updatedSelectedComp = (comp) => {
    setSelectedComp(comp)
  }

  const displayEvents = oddsObject.map((event) => {
    if(event.sites[0].odds.h2h.length > 2) {
          return (
          <>
            <tr>
              <td rowSpan="3">{timeConverter(event.commence_time)}</td>
              <td rowSpan="3">{event.sport_nice}</td>
              <td>{event.teams[0]}</td>
              <td>
                <img className="img" src={require(`../src/img/bookmakers_side/${highestHomeBookmaker(event.sites)}.svg`).default} alt={highestHomeBookmaker(event.sites)}/>
                {/* {highestHomeBookmaker(event.sites)} */}
              </td>
              <td>${highestHomeOdds(event.sites)}</td>
            </tr>
            <tr>
              {/* <td style={{ display: "none"}}></td> */}
              {/* <td style={{ display: "none"}}></td> */}
              <td>{event.teams[1]}</td>
              <td>
                <img className="img" src={require(`../src/img/bookmakers_side/${highestAwayBookmaker(event.sites)}.svg`).default} alt={highestAwayBookmaker(event.sites)}/>
                {/* {highestAwayBookmaker(event.sites)} */}
              </td>
              <td>${highestAwayOdds(event.sites)}</td>
            </tr>
            <tr>
              {/* <td style={{ display: "none"}}></td> */}
              {/* <td style={{ display: "none"}}></td> */}
              <td>Draw</td>
              <td>
                <img className="img" src={require(`../src/img/bookmakers_side/${highestDrawBookmaker(event.sites)}.svg`).default} alt={highestDrawBookmaker(event.sites)}/>
                {/* {highestDrawBookmaker(event.sites)} */}
              </td>
              <td>${highestDrawOdds(event.sites)}</td>
            </tr>
          </>

          )
      } else {
        return (
            <>
            <tr>
              <td rowSpan="2">{timeConverter(event.commence_time)}</td>
              <td rowSpan="2">{event.sport_nice}</td>
              <td>{event.teams[0]}</td>
              <td>
                <img className="img" src={require(`../src/img/bookmakers_side/${highestHomeBookmaker(event.sites)}.svg`).default} alt={highestHomeBookmaker(event.sites)}/>
                {/* {highestHomeBookmaker(event.sites)} */}
              </td>
              <td>${highestHomeOdds(event.sites)}</td>
            </tr>
            <tr>
              {/* <td style={{ display: "none"}}></td> */}
              {/* <td style={{ display: "none"}}></td> */}
              <td>{event.teams[1]}</td>
              <td>
                <img className="img" src={require(`../src/img/bookmakers_side/${highestAwayBookmaker(event.sites)}.svg`).default} alt={highestAwayBookmaker(event.sites)}/>
                {/* {highestAwayBookmaker(event.sites)} */}
              </td>
              <td>${highestAwayOdds(event.sites)}</td>
            </tr>
          </>
      )   
    }
  })

  console.log("display comp names: ", compNames);
  console.table("display odds object: ", oddsObject);

  return (
    <div className="app">
      <header className="header">
        <SearchBar compNames={compNames} updatedSelectedComp={updatedSelectedComp}/>
      </header>
      <table>
        <thead>
          <tr>
          <th scope="col">Start Time</th>
          <th scope="col">Competitions</th>
          <th scope="col">Teams</th>
          <th scope="col">Bookmakers</th>
          <th scope="col">Odds</th>
          </tr>
        </thead>
        <tbody>
          {displayEvents} 
        </tbody>
      </table>
    </div>
  );
}

export default App;
