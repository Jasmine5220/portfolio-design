import React from "react";
import "../MagnifyGallery.css";

const MagnifyGallery = () => {
  // Project data: image URL and project details
  const projects = [
    {
      src: "/images/musiqueMart.png",
      title: "Musique Mart",
      description: "2024",
      link: "https://www.behance.net/gallery/214881503/Musique-Mart-UX-Case-Study" // Add link here
    },
    {
      src: "/images/woodify.png",
      title: "Woodify",
      description: "2024",
      link: "https://www.behance.net/gallery/214205641/Woodify-UIUX-Design" // Add link here
    },
    {
      src: "/images/sadak.png",
      title: "Sadak",
      description: "2024",
      link: "https://www.behance.net/gallery/213815023/Sadak-Fix-the-roads" // Add link here
    },
    {
      src: "/images/foodieFam.png",
      title: "Foodie Fam",
      description: "2024",
      link: "https://www.behance.net/gallery/214293523/FoodieFam-UX-Design-Project" // Add link here
    },
  ];

  return (
    <div className="project-gallery-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.src} alt={project.title} className="project-image" />
          </a>
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagnifyGallery;
