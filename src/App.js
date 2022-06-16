import "./css/App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import TopGainersLosers from "./components/TopGainersLosers";
import TopLosers from "./components/TopLosers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <>
              <Search />
              <div className="GainsLosses">
                <h1 id="topGainHeader">Top Gainers</h1>
                <div className="topGainers">
                  <TopGainersLosers />
                </div>
                <h1 id="topLossHeader">Top Losers</h1>
                <div className="topLosers">
                  <TopLosers />
                </div>
              </div>
            </>
          }
        />
        <Route path="stocks" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
