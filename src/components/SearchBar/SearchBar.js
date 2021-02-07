import React from 'react';

export const SearchBar = (compNames) => {

    const getOdds = () => {
        // console.log("test");
    }

    // const displayNames = compNames.map((name, index) => {
    //     return (
    //         <option value={name}>{name}</option>
    //     )
    // })

    return (
        <div className="search-bar">
            <div className="search-bar__selector-group">
                <div className="logo">
                    <h3 >Best</h3    >
                    <h3><i className="fas fa-search-dollar"></i>dds</h3>
                </div>
                {/* <!-- SELECT SPORT --> */}
                <div className="form-group">
                    <label htmlFor="selectSport">Select Sport: </label>
                    <select id="selectSport" className="search-bar__custom-select">
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
        
                {/* <!-- SELECT COMP --> */}
                <div className="form-group">
                    <label htmlFor="selectComp">Select Comp: </label>
                    <select id="selectComp" className="search-bar__custom-select">
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
                       
                {/* <!-- SELECT MARKET --> */}
                {/* <div className="form-group">
                    <label htmlFor="selectMarket">Select Markts: </label>
                    <select id="selectMarket" className="form-control search-bar__custom-select">
                        <option>h2h</option>
                        <option>spreads</option>
                        <option>totals</option>
                    </select>
                </div> */}
        
                {/* <!-- BUTTONS --> */}
                {/* <button id="sportsBtn" onClick="getSports()" className="btn">
                Sports
                </button> */}
                <button id="oddsBtn" onClick={getOdds()} className="btn">
                    Odds
                </button>
            </div>
        </div>
    )
}
