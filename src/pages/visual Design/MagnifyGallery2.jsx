import React from "react";
import "./MagnifyGallery2.css";

const MagnifyGallery2 = () => {
  const images = [
    { src: "./images/visual design/Cycle.png", alt: "a forest after an apocalypse" },
    { src: "./images/visual design/3d_Visual Shapes.png", alt: "a waterfall and many rocks" },
    { src: "./images/visual design/3d_Visual Tokyo.png", alt: "a house on a mountain" },
    { src: "./images/visual design/Extension.png", alt: "inside a town between two big buildings" },
    { src: "./images/visual design/nike.png", alt: "big rocks with some trees" },
    { src: "./images/visual design/Mogu.png", alt: "a waterfall, a lot of tree and a great view from the sky" },
    { src: "./images/visual design/Dodge viper.png", alt: "a cool landscape" },
    { src: "./images/visual design/Book Cover.png", alt: "some pink flowers" },
  ];

  return (
    <div className="magnify-gallery2-container1">
    <div className="magnify-gallery2-container">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
    </div>
  );
};

export default MagnifyGallery2;
