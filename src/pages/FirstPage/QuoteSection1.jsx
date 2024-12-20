import React from "react";
import "./QuoteSection1.css";

const QuoteSection1 = () => {
  return (
    <div className="quote-wrapper">
      <img src="/images/quote-up.png" alt="quote-up" className="quote-up"/>
      <p className="quote">
        Coffee. <span className="highlight">Design.</span> Repeat
      </p>
    </div>
  );
};

export default QuoteSection1;
