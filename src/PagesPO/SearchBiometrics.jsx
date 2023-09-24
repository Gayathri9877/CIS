import React from "react";
import ScanBox from '../ComponentsPO/ScanBox';
import Investigation from "../ComponentsPO/Investigation";
import Options from "../ComponentsPO/Options";
import BiometricsButtons from '../ComponentsPO/BiometricsButtons';
import SearchButton from "../ComponentsPO/SearchButton";
import '../Styles.css';

function SearchBiometrics() {

  return (
    <div className="SearchBiometrics-container">
    <div className="Biometrics-scanbox">
      <ScanBox/>
    </div>
    <div className='Biometrics-investigation'>
    <Investigation/>
    </div>
    <div className='Biometrics-options'>
    <Options/>
    </div>
    <div className='Biometrics-buttons'>
    <BiometricsButtons/>
    </div>
    <div className='Biometrics-searchbutton'>
    <SearchButton/>
    </div>
   </div>
    
  );
}

export default SearchBiometrics;
