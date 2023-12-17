import React from 'react';
import '../Components.css';

function SearchButtonPO({ handleSearch }) {
  return (
   
    <button className="search-button-PO" onClick={handleSearch}>
      Search
    </button>
    
  );
}

export default SearchButtonPO;

