import React from "react";
import { motion } from "framer-motion";
import { Group, Avatar, Text, Container } from "@mantine/core";
import "./Navbar.css";

const NavBar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container className="ex-navbar-container">
      {/* Left Navigation Items */}
      <Group className="navbar-items">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Text className="navbar-link" onClick={() => scrollToSection("first")}>
            Home
          </Text>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Text className="navbar-link" onClick={() => scrollToSection("second")}>
            About
          </Text>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Text className="navbar-link" onClick={() => scrollToSection("third")}>
            Projects
          </Text>
        </motion.div>
      </Group>

      {/* Center Logo */}
      <Group className="navbar-logo">
        <Avatar src="/images/logo.png" className="navbar-logo-image" />
        <Text className="navbar-logo-text">dezyn_pugxr</Text>
      </Group>

      {/* Right Navigation Items */}
      <Group className="navbar-items">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Text className="navbar-link" onClick={() => scrollToSection("fourth")}>
            3D
          </Text>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Text className="navbar-link" onClick={() => scrollToSection("fifth")}>
            Experience
          </Text>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Text className="navbar-link" onClick={() => scrollToSection("sixth")}>
            Contact
          </Text>
        </motion.div>
      </Group>
    </Container>
  );
};

export default NavBar;
