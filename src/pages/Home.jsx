import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import Chatbot from "../components/Chatbot";
import PropertySlider from "../components/PropertySlider";
import Menu from "../components/Menu";
import EnhancedText from "../components/EnhancedText";
import Reviews from "../components/Reviews";
import ProgressBar from "../components/ProgressBar";
import { homeText } from "../components/HomeText";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: -9999, y: -9999 });


  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setCursorPosition({ x: -9999, y: -9999 });
  };

  return (
    <div className="super-page-container">
      {/* Video Section (Upper 50% of the screen) */}
      <div
        className="video-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="/src/assets/yafo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="overlay-image"
          style={{
            "--x": `${cursorPosition.x - 225}px`,
            "--y": `${cursorPosition.y - 225}px`,
          }}
        ></div>

        {/* Transparent overlay to detect mouse events */}
        <div className="background-overlay"></div>
      </div>

      {/* Menu */}
      <Menu />

      {/* Enhanced Text */}
      <div className="enhanced-text-wrapper ">
        <EnhancedText />
      </div>


      <div className="lower-section">

      {/* Reviews Section */}
      <div className="reviews-section" >
        <Reviews />
      </div>

      {/* Buy Section */}
      <motion.div
        className="section-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2>{homeText.buySection.title}</h2>
        <p>{homeText.buySection.description}</p>
        <ProgressBar progress={50} />
        <button onClick={() => navigate("/buy")}>
          {homeText.buySection.buttonText}
        </button>
      </motion.div>

      {/* Sell Section */}
      <motion.div
        className="section-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2>{homeText.sellSection.title}</h2>
        <p>{homeText.sellSection.description}</p>
        <button onClick={() => navigate("/sell")}>
          {homeText.sellSection.buttonText}
        </button>
      </motion.div>

      {/* Property Slider */}
      <PropertySlider />

      {/* Mortgage Section */}
      <motion.div
        className="section-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h2>{homeText.mortgageSection.title}</h2>
        <p>{homeText.mortgageSection.description}</p>
        <button onClick={() => navigate("/contact")}>
          {homeText.mortgageSection.buttonText}
        </button>
      </motion.div>

      {/* Meet Us & Join Us */}
      <motion.div
        className="split-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="split-section">
          <h2>{homeText.meetUsSection.title}</h2>
          <p>{homeText.meetUsSection.description}</p>
          <button onClick={() => navigate("/our-team")}>
            {homeText.meetUsSection.buttonText}
          </button>
        </div>
        <div className="split-section">
          <h2>{homeText.joinUsSection.title}</h2>
          <p>{homeText.joinUsSection.description}</p>
          <button onClick={() => navigate("/join")}>
            {homeText.joinUsSection.buttonText}
          </button>
        </div>
      </motion.div>

      {/* QR and Social Section */}
      <motion.div
        className="qr-code-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <QRCodeCanvas value={window.location.href} size={150} />
        <div className="social-media-links">
          <a
            href="https://www.facebook.com/profile.php?id=61562671270006&locale=he_IL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/facebook-icon.jpg" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/exp.romano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/src/assets/instagram-icon.jpg" alt="Instagram" />
          </a>
        </div>
      </motion.div>

      {/* Chatbot */}
      <Chatbot />
      </div>
    </div>
  );
};

export default Home;
