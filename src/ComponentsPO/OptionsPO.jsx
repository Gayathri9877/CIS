import React, { useState } from 'react';
import '../Components.css';

function OptionsPO() {
  const [selectedSearchOption, setSelectedSearchOption] = useState('Bio Data');

  const handleSearchOptionChange = (event) => {
    setSelectedSearchOption(event.target.value);
    // Redirect to the selected page based on the dropdown value
    if (event.target.value === 'Bio Data') {
      window.location.href = '/Search';
    } else if (event.target.value === 'Biometrics') {
      window.location.href = '/SearchBiometrics';
    }
  };

  return (
    <div className="search-options-police">
      <label htmlFor="searchOptions">Select an option:</label>
      <select
        id="searchOptions"
        value={selectedSearchOption}
        onChange={handleSearchOptionChange}
      >
        <option value="Bio Data">Biodata</option>
        <option value="Biometrics">Biometrics</option>
      </select>
    </div>
  );
}

export default OptionsPO;
