import React from 'react';
import '../ComponentsGeneral.css'; 
import fingerprint from '../Assets/finger-print.png';
import man from '../Assets/man.png';


const NavigationbarGeneral = () => {
  return (
    <nav className="navbargeneral">
      <div className="navbar-left">
        <img src={fingerprint} alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="navbar-title"><h2>CIS</h2></span>
      </div>
      <div className="navbar-center mt-2" >
        <ul className="navbar-links ">
          <li><a href="/HomeGeneral">Home</a></li>
          <li><a href="/About">About us</a></li>
          <li><a href="/Reports">Contact us</a></li>
          <li><a href="/News">News & updates</a></li>
          <li><a href="/Help">FAQ and help</a></li>
          <li><a href="/Privacy">Legal and priacy</a></li>
        </ul>
      </div>
      <div className="navbar-right" style={{ marginRight: '20px' }}>
  <button className="user-button" >
    <span className="username">Sign In</span>
    <div className="profile-picture-frame">
      <img src={man} alt="Profile" className="profile-picture" />
    </div>
  </button>
</div>   
    </nav>
  );
};

export default NavigationbarGeneral;