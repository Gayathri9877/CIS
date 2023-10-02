import React from 'react';
import {Link } from "react-router-dom";
import '../Components.css';

function SearchButtonPO({ handleSearch }) {
  return (
   <Link to="/SearchResult">
    <button className="search-button-PO" onClick={handleSearch}>
      Search
    </button>
    </Link>
  );
}

export default SearchButtonPO;

