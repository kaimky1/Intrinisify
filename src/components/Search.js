import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import "../css/Search.css";
import { SupportingDocumentList } from "twilio/lib/rest/trusthub/v1/supportingDocument";
import TopGainersLosers from "./TopGainersLosers";
import TopLosers from "./TopLosers";

var axios = require("axios").default;

const Search = () => {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/search?query=${input}&limit=20&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let searchResults = post.map((element, index) => {
    return (
      <div>
        <SearchResults
          key={index}
          elementName={element.name}
          elementSymbol={element.symbol}
        />
      </div>
    );
  });

  return (
    <div className="search">
      <div>
        <input
          className="stockInput"
          placeholder="Search for a stock"
          onChange={changeHandler}
        ></input>
        <button
          type="button"
          onClick={clickHandler}
          className="btn btn-success"
        >
          Search
        </button>
        <div className="searching">

        {searchResults}
        </div>
      </div>
      <>
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
    </div>
  );
};

export default Search;
