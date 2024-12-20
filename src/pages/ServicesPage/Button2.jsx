import React from 'react';
import './ArrowButton.css';

const ArrowButton = ({ onClick }) => {
  return (
    <button className="arrow-button" onClick={onClick} >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="36"  /* Increased size */
        height="36" /* Increased size */
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2.5" /* Optional: Thicker stroke for visibility */
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="arrow-icon"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </button>
  );
};

export default ArrowButton;
