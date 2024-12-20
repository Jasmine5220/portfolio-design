import React from "react";
import "../MagnifyGallery.css";

const MagnifyGallery3 = () => {
  // Project data: image URL and project details
  const projects = [
    {
      src: "/images/industrial/earpods.png",
      title: "Earpods",
      description: "2024",
    },
    {
      src: "/images/industrial/podium.png",
      title: "Podium",
      description: "2024",
    },
    {
      src: "/images/industrial/Water Dispenser.png",
      title: "Water Dispenser",
      description: "2024",
    },
    {
      src: "/images/industrial/Guitar Strummer.png",
      title: "Guitar Strummer",
      description: "2024",
    },
  ];

  return (
    <div className="project-gallery-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img
            src={project.src}
            alt={project.title}
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagnifyGallery3;
