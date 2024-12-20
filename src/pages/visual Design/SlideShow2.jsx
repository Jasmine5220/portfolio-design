import React, { useState } from "react";
import GenericFontPage from "../../components/GenericFontPage";
import "../SlideShow.css";

const Slideshow2 = () => {
  // List of components
  const components = [<GenericFontPage backgroundNumber="02" mainTitle="Visual Design" subtitle="Visual Storytelling | Aesthetics" />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle slide change
  const changeSlide = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 500); // Animation duration
  };

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % components.length;
    changeSlide(nextIndex);
  };

  return (
    <div
      className="slideshow-container"
      style={{ overflow: "hidden" }}
      onClick={handleClick}
    >
      {/* Current Component */}
      <div
        className={`slideshow-content ${isAnimating ? "fade-out" : "fade-in"}`}
        key={currentIndex}
      >
        {components[currentIndex]}
      </div>

      {/* Dots for Navigation */}
      <div className="dots-container">
        {components.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from triggering the slide change
              changeSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow2;
