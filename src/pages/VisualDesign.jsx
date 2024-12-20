import React from "react";
import figmaIcon from "../icons/figma_icon.png"; // Adjust paths as per your folder structure
import illustratorIcon from "../icons/illustrator_icon.png";
import "./VisualDesign.css";

const projects = [
  {
    title: "Musique Mart",
    description: "UX Design and Prototyping",
    icons: [figmaIcon, illustratorIcon], // Multiple icons for each project
    link: "#",
  },
  {
    title: "FoodieFam",
    description: "UX Design and Prototyping",
    icons: [figmaIcon, illustratorIcon],
    link: "#",
  },
  {
    title: "Sadak",
    description: "UX Design and Prototyping",
    icons: [figmaIcon, illustratorIcon],
    link: "#",
  },
  {
    title: "Woodify",
    description: "UX Design and Prototyping",
    icons: [figmaIcon, illustratorIcon],
    link: "#",
  },
];

const UIUXDesign = () => {
  return (
    <div className="uiux-container">
      <h1 className="uiux-title">
        <span className="uiux-title-highlight">UI/UX</span> Design
      </h1>
      <div className="uiux-projects">
        {projects.map((project, index) => (
          <div className="uiux-project" key={index}>
            <div className="uiux-project-icons">
              {project.icons.map((icon, i) => (
                <img
                  src={icon}
                  alt={`Icon ${i + 1}`}
                  className="uiux-project-icon"
                  key={i}
                />
              ))}
            </div>
            <div className="uiux-project-details">
              <h3 className="uiux-project-title">{project.title}</h3>
              <p className="uiux-project-description">{project.description}</p>
            </div>
            <a
              className="uiux-project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open <span className="uiux-project-link-arrow">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIUXDesign;
