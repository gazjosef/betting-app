import React from 'react';

export const SearchBar = () => {
    return (
        <div>
            <h1>Search Bar</h1>
            <div className="selector-group">
                {/* <!-- SELECT SPORT --> */}
                <div className="form-group">
                <label htmlFor="selectSport">Select Sport:</label>
                <select id="selectSport">
                    <option value="upcoming">Upcoming</option>
                </select>
                </div>
        
                {/* <!-- SELECT COMP --> */}
                <div className="form-group">
                <label htmlFor="selectComp">Select Comp:</label>
                <select id="selectComp">
                    <option value="upcoming">Upcoming</option>
                </select>
                </div>
  
                {/* <!-- SELECT REGION --> */}
                {/* <div className="form-group">
                <label htmlFor="selectRegion">Select Region:</label>
                <select className="form-control" id="selectRegion">
                    <option>au</option>
                    <option>eu</option>
                    <option>uk</option>
                    <option>us</option>
                </select>
                </div> */}
        
                {/* <!-- SELECT MARKET --> */}
                <div className="form-group">
                <label htmlFor="selectMarket">Select Markts:</label>
                <select className="form-control" id="selectMarket">
                    <option>h2h</option>
                    <option>spreads</option>
                    <option>totals</option>
                </select>
                </div>
        
                {/* <!-- BUTTONS --> */}
                <button id="sportsBtn" onClick="getSports()" className="btn">
                Sports
                </button>
                <button id="oddsBtn" onClick="getOdds()" className="btn">
                Odds
                </button>
            </div>
        </div>
    )
}
