import React from "react";
import designIcon from "../icons/fusion_icon.png"; // Replace with relevant Industrial Design icon
import secondaryIcon from "../icons/blender_icon.png"; // Replace with another relevant icon
import "./3DModelling.css";

const projects = [
  {
    title: "Guitar Strummer",
    description: "Concept and Prototyping",
    icons: [designIcon, secondaryIcon], // Multiple icons
    link: "#",
    status: "open", // Open or Soon
  },
  {
    title: "EarPods Redesign",
    description: "Product Redesign",
    icons: [designIcon, secondaryIcon],
    link: "#",
    status: "soon",
  },
  {
    title: "Podium Redesign",
    description: "Problem Solving",
    icons: [designIcon, secondaryIcon],
    link: "#",
    status: "soon",
  },
  {
    title: "AquaAccess",
    description: "Research Study, Prototyping",
    icons: [designIcon, secondaryIcon],
    link: "#",
    status: "soon",
  },
];

const IndustrialDesign = () => {
  return (
    <div className="industrial-container">
      <div className="industrial-projects">
        {projects.map((project, index) => (
          <div className="industrial-project" key={index}>
            <div className="industrial-project-icons">
              {project.icons.map((icon, i) => (
                <img
                  src={icon}
                  alt={`Icon ${i + 1}`}
                  className="industrial-project-icon"
                  key={i}
                />
              ))}
            </div>
            <div className="industrial-project-details">
              <h3 className="industrial-project-title">{project.title}</h3>
              <p className="industrial-project-description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrialDesign;
