import React, { useState, useEffect } from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
import { Output } from './components/Output/Output'

function App() {
  const [dataObject, setDataObject] = useState([])

  const APIkey = '0964ad4e3be969508766aef582e92012';

  useEffect(() => {
    console.log("call");
    fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) => {  
      console.log(data.data);
      setDataObject(data.data);
      console.log(dataObject);
    });
  }, []);

  // Output
  // let outputEl = document.getElementById('output');
  // let tableEl = document.getElementById('table');
  // let sportEl = document.getElementById('selectSport');
  // let compEl = document.getElementById('selectComp');
  // let marketEl = document.getElementById('selectMarket');
// let regionEl = document.getElementById('selectRegion');
  return (
    <div className="app">
      <header className="app__header">
        <div className="u-margin-bottom-medium">
          <h1><i class="fas fa-search-dollar"></i> Best Odds</h1>
        </div>
        <SearchBar />
        <Output />
      </header>
    </div>
  );
}

export default App;
