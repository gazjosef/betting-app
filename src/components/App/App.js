import React, { Component } from 'react';
import './App.css'

import { SearchBar } from '../SearchBar/SearchBar'
import { Output } from '../Output/Output'

class App extends Component {
    render() {
        return (
            <div>
                <h1>$$$ Odds Checker</h1>
                <SearchBar />
                <Output />
            </div>
        )
    }
}

export default App;
