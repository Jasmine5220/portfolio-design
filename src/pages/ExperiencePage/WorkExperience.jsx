// Experience.jsx
import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="we-main">
      <h3 className="we-head">Work Experience</h3>
      <div className="we-container">
        <ul>
          <li>
            <h3 className="we-heading">Product Manager - Terracotta By Sachii</h3>
            <p>Website development<br />E-commerce catalogue management<br />Offline product management<br />Administrative tasks</p>
            <span className="we-date">June 2022 - August 2022</span>
            <span className="we-circle"></span>
          </li>
          <li>
            <h3 className="we-heading">Under Dr. Aayush Bansal - Image Editing Research</h3>
            <p>3D animations<br />Graphic design<br />Social media posts, flyers, and banners<br />Merchandising design</p>
            <span className="we-date">June 2024 - August 2024</span>
            <span className="we-circle"></span>
          </li>
          <li>
            <h3 className="we-heading">Product Designer - Sponskart</h3>
            <p>UI/UX design<br />Logo design</p>
            <span className="we-date">June 2024 - July 2024</span>
            <span className="we-circle"></span>
          </li>
        </ul>
      </div>

      <br /> <br />
      <br /> <br />
      <br />

      <h3 className="we-head-1">Volunteer Experience</h3>
      <div className="we-container">
        <ul>
          <li>
            <h3 className="we-heading">Resonanz 2024 - Head, Design</h3>
            <p>Graphic design<br />Social media posts, flyers, and banners</p>
            <span className="we-date">Sept 2023 - Oct 2023</span>
            <span className="we-circle"></span>
          </li>
          <li>
            <h3 className="we-heading">Moksha Innovision 2024 - Design Coordinator</h3>
            <p>3D animations<br />Graphic design<br />Social media posts, flyers, and banners<br />Merchandising design</p>
            <span className="we-date">Jan 2024 - April 2024</span>
            <span className="we-circle"></span>
          </li>
          <li>
            <h3 className="we-heading">Junoon (Photography Society of NSUT) - Graphic Designer</h3>
            <p>Animations<br />Social media posts<br />Merchandising design<br />Graphic design</p>
            <span className="we-date">April 2023 - Present</span>
            <span className="we-circle"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
