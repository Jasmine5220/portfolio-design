import React, { useEffect } from "react";
import NavBar from "./components/Navbar";
import FirstPage from "./pages/FirstPage/FirstPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CombinedCardPage from "./pages/ServicesPage/CombinedCardsPage";
import Slideshow from "./pages/uiux Design/SlideShow";
import MagnifyGallery from "./pages/uiux Design/MagnifyGallery";
import Slideshow2 from "./pages/visual Design/SlideShow2";
import MagnifyGallery2 from "./pages/visual Design/MagnifyGallery2";
import Slideshow3 from "./pages/3d Modelling/SlideShow3";
import MagnifyGallery3 from "./pages/3d Modelling/MagnifyGallery3";
import Slideshow4 from "./pages/Animations/SlideShow4";
import MagnifyGallery4 from "./pages/Animations/3DAnimations";
import WorkExperience from "./pages/ExperiencePage/WorkExperience";
import ContactPage from "./pages/ContactPage/ContactPage";
import { MantineProvider } from "@mantine/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <MantineProvider
      theme={{
        colorScheme: "light",
      }}
    >
      <div className="container">
        <NavBar />
        <div id="first">
          <div data-aos="fade-up">
            <FirstPage />
          </div>
        </div>
        <div id="second">
          <div data-aos="fade-right">
            <AboutPage />
          </div>
        </div>
        <div id="third">
          <div data-aos="fade-left">
            <CombinedCardPage />
          </div>
          <div id="uiuxdesign-section">
            <div data-aos="zoom-in">
              <Slideshow className="font-container" />
            </div>
            <div>
              <MagnifyGallery />
            </div>
          </div>
          <div id="visual-section">
            <div data-aos="zoom-in-right">
              <Slideshow2 />
            </div>
            <div>
              <MagnifyGallery2 />
            </div>
          </div>
          <div id="3ddesign-section">
            <div data-aos="zoom-out-up">
              <Slideshow3 />
            </div>
            <div>
              <MagnifyGallery3 />
            </div>
          </div>
        </div>
        <div id="fourth">
          <div data-aos="fade-up">
            <Slideshow4 />
          </div>
          <div>
            <MagnifyGallery4 />
          </div>
        </div>
        <div id="fifth">
          <div data-aos="fade-in">
            <WorkExperience />
          </div>
        </div>    
        <div id="sixth">
          <div data-aos="fade-up">
            <ContactPage />
          </div>
        </div> 
      </div>
    </MantineProvider>
  );
}

export default App;
