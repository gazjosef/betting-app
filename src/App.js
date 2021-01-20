import React, { useState, useEffect } from 'react';
import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
import { Output } from './components/Output/Output'

function App() {
  const [dataObject, setDataObject] = useState()

  const APIkey = '0964ad4e3be969508766aef582e92012';

  useEffect(() => {
    function getOdds() {
      fetch(
        `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=${APIkey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    getOdds()
  }, [])


  return (
    <div className="app">
        <SearchBar />
        <Output />
    </div>
  );
}

export default App;
