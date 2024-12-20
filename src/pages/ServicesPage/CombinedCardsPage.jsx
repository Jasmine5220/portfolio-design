import React from "react";
import CombinedCard from "./CombinedCard";
import "./CombinedCardsPage.css";

const CombinedCardPage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="combined-card-page-container">
      {/* Heading Section */}
      <div className="combined-heading-section">
        <h1 className="combined-page-title">What can I do for you?</h1>
      </div>

      {/* Cards Row */}
      <div className="combined-cards-container">
        <CombinedCard
          srcImage="/images/services/ui-ux-card.jpg"
          titleText="UI/UX Design"
          onClickAction={() => scrollToSection("uiuxdesign-section")}
        />
        <CombinedCard
          srcImage="/images/services/visual-card.jpg"
          titleText="Visual Design"
          onClickAction={() => scrollToSection("visual-section")}
        />
        <CombinedCard
          srcImage="/images/services/industrial-card.jpg"
          titleText="3D Modelling"
          onClickAction={() => scrollToSection("3ddesign-section")}
        />
      </div>
    </div>
  );
};

export default CombinedCardPage;
