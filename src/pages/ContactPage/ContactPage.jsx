import React from "react";
import HexagonalGallery from "./HexagonalGallery"; // Import the HexagonalGallery component
import { FaBehance, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Import icons from React Icons
import "./ContactPage.css"; // External CSS for styling

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Section */}
      <div className="contact-text">
        <div className="new-contact-info">
          <p>
            Some Photograhy there →
          </p>
        </div>
        <h1 className="contact-title">Let&apos;s Connect</h1>
        <div className="contact-icons">
          <a
            href="https://www.behance.net/juhijayaswal14"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaBehance size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/juhi-jayaswal-/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:juhijpugxs@gmail.com" className="icon-link">
            <FaEnvelope size={32} />
          </a>
          <a
            href="https://www.instagram.com/dezyn_pugxr/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://wa.me/+918595077397"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
        <br />
        <div className="new-contact-info">
          <p>
            juhijpugxs@gmail.com
          </p>
          <br/>
          <p>
            +91 8595077397
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="contact-gallery">
        <HexagonalGallery />
      </div>
    </div>
  );
};

export default ContactPage;
