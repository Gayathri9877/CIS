import React from "react";
import ScanBox from '../ComponentsPO/ScanBox';
import Investigation from "../ComponentsPO/Investigation";
import OptionsPO from "../ComponentsPO/OptionsPO";
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
    <OptionsPO/>
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
