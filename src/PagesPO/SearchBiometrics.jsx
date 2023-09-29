import React, { useState } from "react";
import Investigation from "../ComponentsPO/Investigation";
import OptionsPO from "../ComponentsPO/OptionsPO";
import BiometricsButtons from '../ComponentsPO/BiometricsButtons';
import SearchButton from "../ComponentsPO/SearchButton";
import '../Styles.css';

function SearchBiometrics() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  return (
    <div className="SearchBiometrics-container">
      <div className='Biometrics-investigation'>
        <Investigation/>
      </div>
      <div className='Biometrics-options'>
        <OptionsPO/>
      </div>
      <div className='Biometrics-buttons'>
        <BiometricsButtons onFileUpload={handleFileUpload} />
      </div>
      {uploadedFile && (
        <div>
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
          <button onClick={() => setUploadedFile(null)}>Remove Photo</button>
        </div>
      )}
      <div className='Biometrics-searchbutton'>
        <SearchButton/>
      </div>
    </div>
  );
}

export default SearchBiometrics;
