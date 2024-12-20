import React from 'react';
import './SoftwareIcons.css'; // Link to the external CSS file

const icons = [
  { src: '/icons/figma.png', alt: 'Figma' },
  { src: '/icons/photoshop.png', alt: 'Photoshop' },
  { src: '/icons/fusion360.png', alt: 'Fusion 360' },
  { src: '/icons/blender.png', alt: 'Blender' },
  { src: '/icons/maya.png', alt: 'Maya' },
  { src: '/icons/unrealengine.png', alt: 'Unreal Engine' },
  { src: '/icons/davinciresolve.png', alt: 'DaVinci Resolve' },
  { src: '/icons/aftereffects.png', alt: 'After Effects' },
  { src: '/icons/illustrator.png', alt: 'Illustrator' },
  { src: '/icons/indesign.png', alt: 'InDesign' },
  { src: '/icons/adobe_xd.png', alt: 'Adobe XD' },
];

const SoftwareIcons = () => {
  return (
    <div id="software-icons-container">
      <h2>My Design <span className="m-highlight">Arsenal</span></h2>
      <div id="icons-grid-sw">
        {icons.map((icon, index) => (
          <div className="icon-sw" key={index}>
            <div className="icon-wrapper">
              <img src={icon.src} alt={icon.alt} />
            </div>
            <p>{icon.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareIcons;
