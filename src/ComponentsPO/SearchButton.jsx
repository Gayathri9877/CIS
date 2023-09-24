import React from 'react';
import {Link } from "react-router-dom";
import '../Components.css';

function SearchButton({ handleSearch }) {
  return (
   <Link to="/SearchResult">
    <button className="search-button" onClick={handleSearch}>
      Search
    </button>
    </Link>
  );
}

export default SearchButton;

