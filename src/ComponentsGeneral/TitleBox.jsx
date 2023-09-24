import React from 'react';
import '../ComponentsGeneral.css';
import fingerprint from '../Assets/finger-print.png'; 

function TitleBox() {
  return (
    <div className='Titlebox-container'>  
      <div className='Titlelogo-container'>
        <img src={fingerprint} alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="Logo-title"><h2>CIS</h2></span>
        </div>
        <div className='Titlebox-text'>
           <p>Criminal Identification System</p>
           <p>Sri Lanka Police</p>
        </div>
    </div>
  )
}

export default TitleBox;