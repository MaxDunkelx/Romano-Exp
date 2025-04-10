import React, { useState, useRef, useEffect } from "react";
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
  const animationFrame = useRef();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth cursor position handler for hover effect
  const handleMouseMove = (e) => {
    if (isMobile) return; // Skip hover effect on mobile
    
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      const overlay = document.querySelector('.overlay-image');
      if (overlay) {
        overlay.style.setProperty('--x', `${e.clientX}px`);
        overlay.style.setProperty('--y', `${e.clientY}px`);
      }
    });
  };

  const handleMouseLeave = () => {
    setCursorPosition({ x: -9999, y: -9999 }); // Hide when leaving video area
  };

  return (
    <div className="super-page-container">
      {/* ----------- Video Section (Upper 50%) ------------ */}
      <div
        className={`video-wrapper ${isMobile ? 'mobile-view' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo overlay - shown on both mobile and desktop */}
        <div className="logo-overlay">
          <img 
            src="/Romano-Exp/icons/final-logo2.svg" 
            alt="EXP Romano Logo" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/last-logo.png";
            }}
          />
        </div>

        {isMobile ? (
          // Mobile view - single image
          <div className="mobile-background-image"></div>
        ) : (
          // Desktop view - video with overlay
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="background-video"
            >
              <source src="/Romano-Exp/videos/yafo6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Image */}
            <div
              className="overlay-image"
              style={{
                "--x": `${cursorPosition.x}px`,
                "--y": `${cursorPosition.y}px`,
              }}
            ></div>

            {/* Transparent Overlay for mouse events */}
            <div className="background-overlay"></div>
          </>
        )}
      </div>

      {/* ----------- Menu ----------- */}
      <Menu />

      {/* ----------- Enhanced Text for Desktop and Mobile Flag for Mobile ----------- */}
      {isMobile ? (
        <EnhancedText isMobileView={true} />
      ) : (
        <div className="enhanced-text-wrapper">
          <EnhancedText isMobileView={false} />
        </div>
      )}

      {/* ----------- Lower Section ----------- */}
      <div className={`lower-section ${isMobile ? 'mobile-lower-section' : ''}`}>
        {/* ----------- Reviews Section ----------- */}
        <div className="reviews-section">
          <Reviews />
        </div>

        <motion.div
          className="section-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: isMobile ? 0.5 : 1 }}
        >
          <PropertySlider />
        </motion.div>

        {/* ----------- Buy Section ----------- */}
        <motion.div
          className="section-container bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: isMobile ? 0.5 : 1 }}
        >
          <h2>{homeText.buySection.title}</h2>
          <p>{homeText.buySection.description}</p>
          <ProgressBar progress={50} />
          <button onClick={() => navigate("/buy")}>
            {homeText.buySection.buttonText}
          </button>
        </motion.div>

        {/* ----------- Sell Section ----------- */}
        <motion.div
          className="section-container bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: isMobile ? 0.5 : 1 }}
        >
          <h2>{homeText.sellSection.title}</h2>
          <p>{homeText.sellSection.description}</p>
          <button onClick={() => navigate("/sell")}>
            {homeText.sellSection.buttonText}
          </button>
        </motion.div>

        {/* ----------- Mortgage Section ----------- */}
        <motion.div
          className="section-container bg-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: isMobile ? 0.5 : 1 }}
        >
          <h2>{homeText.mortgageSection.title}</h2>
          <p>{homeText.mortgageSection.description}</p>
          <button onClick={() => navigate("/contact")}>
            {homeText.mortgageSection.buttonText}
          </button>
        </motion.div>

        {/* ----------- Meet Us & Join Us ----------- */}
        <div className="section-container bg-transparent">
          <h2>{homeText.meetUsSection.title}</h2>
          <p>{homeText.meetUsSection.description}</p>
          <button onClick={() => navigate("/our-team")}>
            {homeText.meetUsSection.buttonText}
          </button>
        </div>
        <div className="section-container bg-transparent">
          <h2>{homeText.joinUsSection.title}</h2>
          <p>{homeText.joinUsSection.description}</p>
          <button onClick={() => navigate("/join")}>
            {homeText.joinUsSection.buttonText}
          </button>
        </div>

        {/* ----------- QR Code + Social ----------- */}
        <motion.div
          className="qr-code-container"
          href="https://maxdunkelx.github.io/Romano-Exp/" 
           target="_blank"
              rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: isMobile ? 0.5 : 1 }}
        >
          <QRCodeCanvas value={window.location.href} size={isMobile ? 120 : 150} />
          <div className="social-media-links">
            <a
              href="https://www.facebook.com/profile.php?id=61562671270006&locale=he_IL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Romano-Exp/icons/facebook-icon.jpg" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/exp.romano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Romano-Exp/icons/instagram-icon.jpg" alt="Instagram" />
            </a>
            <a
              href="https://wa.me/+972 52-7272534"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Romano-Exp/icons/whatsapp-icon.jpg" alt="WhatsApp" />
            </a>
          </div>
        </motion.div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Home;