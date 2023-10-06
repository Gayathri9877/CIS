import React, { useState } from 'react';
import '../Components.css';
import {Link } from "react-router-dom";

const SubNavigationbar = () => {
  const [activeTab, setActiveTab] = useState('Crime'); // Set the default active tab to 'Crime'

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',   
  };

  const linkStyleHovered = {
    color: 'black',       // Hovered (active) text color
  };

  return (
    <div className="sub-navigation">
      <div className="right-section">
       <div
          className={`nav-item-box ${activeTab === 'Crime' ? 'active' : ''}`}
          onClick={() => handleTabClick('Crime')}
        > 
         <Link to="/Crime" style={activeTab === 'Crime' ? { ...linkStyle, ...linkStyleHovered } : linkStyle} > Crime</Link>
        </div>
        <div
          className={`nav-item-box ${activeTab === 'Victims' ? 'active' : ''}`}
          onClick={() => handleTabClick('Victims')}
        >
         <Link to="/Victims" style={activeTab === 'Victims' ? { ...linkStyle, ...linkStyleHovered } : linkStyle}> Victims</Link>
        </div>
        <div
          className={`nav-item-box ${activeTab === 'Evidences' ? 'active' : ''}`}
          onClick={() => handleTabClick('Evidences')}
        >
         <Link to="/Evidences" style={activeTab === 'Evidences' ? { ...linkStyle, ...linkStyleHovered } : linkStyle}> Evidences</Link>
        </div>
      </div>
    </div>
  );
};

export default SubNavigationbar;
