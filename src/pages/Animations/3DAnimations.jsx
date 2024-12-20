import React from "react";
import "./animations.css";

const MagnifyGallery4 = () => {
  // Project data: image URL and project details
  const projects = [
    {
      src: "/images/animations/wine glass.gif",
      title: "Wine Glass",
      description: "2024",
    },
    {
      src: "/images/animations/earpods.gif",
      title: "Earpods",
      description: "2024",
    },
  ];

  return (
    <div className="a-project-gallery-container">
      {projects.map((project, index) => (
        <div className="a-project-card" key={index}>
          <img
            src={project.src}
            alt={project.title}
            className="a-project-image"
          />
          <div className="a-project-details">
            <h3 className="a-project-title">{project.title}</h3>
            <p className="a-project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagnifyGallery4;
