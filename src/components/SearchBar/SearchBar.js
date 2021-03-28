import React from 'react';


export const SearchBar = (compNames) => {
    const displayCompNames = compNames.compNames.map(name => {
        return (
            <option key={name} value={name}>{name}</option>
        )
    })

    const updatedSelectedComp = (e) => {
        // console.log("Selected Something");
        console.log(e.target.value);
    }

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
                    <select id="selectSport" className="search-bar__custom-select" onChange={updatedSelectedComp}>
                        <option value="upcoming">Upcoming</option>
                        {displayCompNames}
                    </select>
                </div>
        
                {/* <!-- SELECT COMP --> */}
                <div className="form-group">
                    <label htmlFor="selectComp">Select Comp: </label>
                    <select id="selectComp" className="search-bar__custom-select">
                        <option value="upcoming">Upcoming</option>
                        {/* {compNames.map((name) => {
                            <option value={name}>{name}}</option>
                        })} */}
                    </select>
                </div>
        
                {/* <!-- BUTTONS --> */}
                {/* <button id="sportsBtn" onClick="getSports()" className="btn">
                Sports
                </button> */}
                <button id="oddsBtn" 
                // onClick={getOdds()} 
                className="btn">
                    Odds
                </button>
            </div>
        </div>
    )
}
