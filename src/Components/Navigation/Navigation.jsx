import React from 'react';
import './Navigation.css'; 
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-left">
        <img src="assets\images\finger-print.png" alt="Icon" className="navbar-icon" style={{ marginLeft: '20px' }} />
        <span className="navbar-title"><h2>CIS</h2></span>
      </div>

      <button
        className="navbar-toggler"z
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Registercrimefull">
              New registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/UpdateCrimeFull">
              Crimes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/UpdateCriminalSuspectFull">
              Criminals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/UpdateVictimfull">
              Victims
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/FullUpdateEvidence">
              Evidences
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right" style={{ marginRight: '20px' }}>
        <button className="user-button" >
          <span className="username">Gayathri rasangika</span>
          <div className="profile-picture-frame">
            <img src="assets/images/man.png" alt="Profile" className="profile-picture" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
