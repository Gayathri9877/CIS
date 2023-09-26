import React, { useState } from 'react';
import '../Components.css';
import {Link } from "react-router-dom";

function OptionsPO() {
  const [selectedSearchOption, setSelectedSearchOption] = useState('Bio Data');

  const handleSearchOptionChange = (event) => {
    setSelectedSearchOption(event.target.value);
  };

  return (
    <div className="search-options-police">
      
      <label>
      <Link to="/Search"> 
      <input
          type="radio"
          value="Bio Data"
          checked={selectedSearchOption === 'Bio Data'}
          onChange={handleSearchOptionChange}
        />
         </Link>
        Biodata
      </label>
     
      <label>
      <Link to="/SearchBiometrics">
       <input
          type="radio"
          value="Biometrics"
          checked={selectedSearchOption === 'Biometrics'}
          onChange={handleSearchOptionChange}
        />
        </Link>
       Biometrics
      </label>
      

    </div>
  );
}

export default OptionsPO;

