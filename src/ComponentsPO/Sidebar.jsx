import React, { useState } from 'react';
import '../Components.css';
import {Link } from "react-router-dom";

const Sidebar = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const topics = ['crime 1', 'crime 2', 'crime 3', 'crime 4', 'crime 5', 'crime 6'];

  const handleMouseEnter = (index) => {
    setHoveredTopic(index);
  };

  const handleMouseLeave = () => {
    setHoveredTopic(null);
  };

  const linkStyle = {
    textDecoration: 'none', 
  };

  return (
    <div className="sidebar">
      {topics.map((topic, index) => (
       <Link to="/Crime" key={index} style={linkStyle}>   
        <div
          key={index}
          className={`topic ${index % 2 === 0 ? 'white' : 'purple'} ${hoveredTopic === index ? 'dark-blue' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {topic}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
