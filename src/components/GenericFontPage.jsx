import React, { useEffect } from "react";
import WebFont from "webfontloader";
import "./GenericFontPage.css";

const GenericFontPage = ({ backgroundNumber, mainTitle, subtitle }) => {
  useEffect(() => {
    WebFont.load({
      custom: {
        families: ["against"], // Match the font-family name declared in CSS
      },
      active: () => {
        console.log("Font loaded successfully!");
      },
      inactive: () => {
        console.error("Font failed to load.");
      },
    });
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div className="generic-visual-container">
      {/* Background Number */}
      <div className="generic-background-number">{backgroundNumber}</div>

      {/* Main Title */}
      <div className="generic-main-text">
        {mainTitle.split("").map((char, index) => (
          <span key={index} style={{ fontWeight: 500 }}>
            {char}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <div className="generic-subtitle">{subtitle}</div>
    </div>
  );
};

export default GenericFontPage;
