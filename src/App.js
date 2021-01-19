import React, { useState, useEffect } from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
import { Output } from './components/Output/Output'

function App() {
  const [dataObject, setDataObject] = useState([])

  const APIkey = '0964ad4e3be969508766aef582e92012';

  let total = 0
  
  useEffect(() => {
    console.log("call");
    fetch(`https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`)
    .then((res) => res.json())
    .then((data) => {  
      setDataObject([data.data])
      total++
      console.log(total);
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
        <SearchBar />
        <Output />
    </div>
  );
}

export default App;
