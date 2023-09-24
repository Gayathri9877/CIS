import React from 'react';
import '../Components.css';
import {Link } from "react-router-dom";

function CapturesButton({ handleCaptures }) {
  return (
   <Link to="/Captures">
    <button className="captures-button" onClick={handleCaptures}>
      Captures
    </button>
    </Link>
  );
}

export default CapturesButton;