// HireMeButton.js
import React, { useState } from 'react';
import './Button1.css';

const Button = () => {
  const [position, setPosition] = useState('left');

  const handleLeftClick = () => setPosition('left');
  const handleRightClick = () => setPosition('right');

  return (
    <div className="hireme-container">
      <div className="button-box">
        <div
          id="btn"
          className={`btn ${position === 'left' ? 'left' : 'right'}`}
        ></div>
        <button className="toggle-btn" onClick={handleLeftClick}>
          Portfolio
        </button>
        <button
          className="toggle-btn"
          onClick={() => {
            handleRightClick();
            window.location.href = 'https://drive.google.com/file/d/13zTm1rUek5OVGAMw9bd-Hbc_CpT7BcGV/view?usp=drive_link'; // Replace with your resume link
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Button;
