import React from "react";
import HelloWrapper from "./HelloWrapper";
import MainIntroLines from "./MainIntroLines";
import QuoteSection1 from "./QuoteSection1";
import QuoteSection2 from "./QuoteSection2";
import Button from "./Button1";
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <div className="first-hero-container">
      <div className="i-dont-now">
        <div className="hehe-hello"><HelloWrapper /></div>
        <MainIntroLines />
        <div className="main-section-with-profile">
          <div  className="section-1">
            <QuoteSection1 />
          </div>
          <div className="section-2">
            <img className="profile" src="/images/juhi.png" alt="Juhi" />
            <div className="orange-semicircle"></div>
          </div>
          <div className="section-3">
            <QuoteSection2 />
          </div>
        </div>
        <div className="first-page-button-main">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
