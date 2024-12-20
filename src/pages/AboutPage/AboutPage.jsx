import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";
import SoftwareIcons from "../../components/SoftwareIcons";

const AboutPage = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About</h1>
        <p>
          As a <span className="highlight">product</span> and{" "}
          <span className="highlight">visual designer</span>, I spend my days
          immersed in the glow of my laptop, crafting designs merging art and
          technology. Living in the vibrant heart of Delhi, I thrive on the
          city’s energy and draw inspiration from its rhythm. With a passion for{" "}
          <span className="highlight">creativity</span> and{" "}
          <span className="highlight">problem-solving</span>, I’m always ready
          to take up design challenges that come along the way.
        </p>
      </motion.div>
      <SoftwareIcons />
    </div>
  );
};

export default AboutPage;
