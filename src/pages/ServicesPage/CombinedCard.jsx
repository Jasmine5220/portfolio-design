import React from 'react';
import LayeredCard from './LayeredCards'; // Component to display images
import ArrowButton from './Button2'; // Reusable button component
import './CombinedCard.css'; // CSS styles for this layout

const CombinedCard = ({ srcImage, titleText, onClickAction }) => {
  const handleButtonClick = () => {
    if (onClickAction) {
      onClickAction(); // Execute the provided onClick action
    }
  };

  return (
    <div className="combined-card-container">
      {/* Card Header */}
      <div className="card-header">
        <p className="card-title">{titleText}</p>
      </div>

      {/* Horizontal Line */}
      <hr className="horizontal-card-line" />

      {/* Layered Card Component */}
      <div className="layered-card-wrapper">
        <LayeredCard imageSrc={srcImage} />
      </div>

      {/* Button */}
      <div className="button-wrapper">
        <ArrowButton onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default CombinedCard;
