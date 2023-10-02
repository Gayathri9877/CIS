import React from 'react';
import '../Components.css'; 
import { useLocation } from 'react-router-dom';
import fingerprint from '../Assets/finger-print.png';
import man from '../Assets/man.png';


const NavigationBarPO = () => {

  const location = useLocation();
  const hideNavBarOnPaths = [
    '/', // Add paths where you want to hide the navigation bar
    '/ITOfficer',
    '/RegistrationPage',
    '/FullUserdetails',
    '/UpdateUserDetails',
    '/UserPersona',
    '/FullUserPersona',
    '/Suspect',
    '/Registercrimefull',
    '/RegisterVictimfull',
    '/RegisterEvidencefull',
    '/FullUpdateEvidence',
    '/FullRegisterCriminalSuspect',
    '/UpdateCrimeFull',
    '/UpdateVictimFull',
    '/UpdateCriminalSuspectFull',
    '/UpdateExistingFull',
    '/SignInGeneral',
    
    // Add more paths as needed
  ];

  // Check if the current path is in the list of paths to hide the navigation bar
  const shouldHideNavBar = hideNavBarOnPaths.includes(location.pathname);

  if (shouldHideNavBar) {
    return null; // Return null to hide the navigation bar
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={fingerprint} alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="navbar-title"><h2>CIS</h2></span>
      </div>
      <div className="navbar-center mt-2" >
        <ul className="navbar-links ">
          <li><a href="/HomePO">Home</a></li>
          <li><a href="/Search">Search</a></li>
          <li><a href="/Reports">Reports</a></li>
          <li><a href="/Support">Support</a></li>
        </ul>
      </div>
      <div className="navbar-right" style={{ marginRight: '20px' }}>
  <button className="user-button" >
    <span className="username">Kaushalya Hulathdoowage</span>
    <div className="profile-picture-frame">
      <img src={man} alt="Profile" className="profile-picture" />
    </div>
  </button>
</div>
     
      
    </nav>
  );
};

export default NavigationBarPO;