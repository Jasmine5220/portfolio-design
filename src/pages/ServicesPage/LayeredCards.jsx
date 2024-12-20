import React from 'react';
import './LayeredCard.css';

const LayeredCard = ({ imageSrc }) => {
  return (
    <div className="layered-card-container">
      {/* Two Layered Frames */}
      <div className="layer frame-back"></div>
      <div className="layer frame-middle"></div>

      {/* Main Card with Image */}
      <div className="main-card">
        <img src={imageSrc} alt="Layered Card" className="main-card-image" />
      </div>
    </div>
  );
};

export default LayeredCard;
