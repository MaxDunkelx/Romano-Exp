import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import Chatbot from "../components/Chatbot"; // Corrected import path
import PropertySlider from "../components/PropertySlider";
import emailjs from "emailjs-com"; // Add this line
import Menu from "../components/Menu"; //
import EnhancedText from "../components/EnhancedText";
import "./Home.css";
import Reviews from "../components/Reviews";
import { homeText } from "../components/HomeText";
import ProgressBar from "../components/ProgressBar"; // Import ProgressBar

const Home = () => {
  const navigate = useNavigate();

  // State for progress bar
  const [progress, setProgress] = useState(50); // Initialize progress state

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize modal state



  return (
    <div className="home-container  ">
      <Menu />
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/src/assets/maybe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <EnhancedText />
      <Reviews />

      {/* Buy Section */}
      <motion.div
        className="section-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2>{homeText.buySection.title}</h2>
        <p>{homeText.buySection.description}</p>

        <ProgressBar progress={progress} /> {/* Use ProgressBar component */}
        <button onClick={() => navigate("/buy")}>{homeText.buySection.buttonText}</button>
      </motion.div>

      {/* Sell Section */}
      <motion.div
        className="section-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2>{homeText.sellSection.title}</h2>
        <p>{homeText.sellSection.description}</p>
        <button onClick={() => navigate("/sell")}>{homeText.sellSection.buttonText}</button>
      </motion.div>

      <PropertySlider />

      {/* Mortgage Section */}
      <motion.div
        className="section-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h2>{homeText.mortgageSection.title}</h2>
        <p>{homeText.mortgageSection.description}</p>
        <button onClick={() => navigate("/contact")}>{homeText.mortgageSection.buttonText}</button>
      </motion.div>

      {/* Meet Us / Join Us Section */}
      <motion.div
        className="split-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="split-section">
          <h2>{homeText.meetUsSection.title}</h2>
          <p>{homeText.meetUsSection.description}</p>
          <button onClick={() => navigate("/our-team")}>{homeText.meetUsSection.buttonText}</button>
        </div>
        <div className="split-section">
          <h2>{homeText.joinUsSection.title}</h2>
          <p>{homeText.joinUsSection.description}</p>
          <button onClick={() => navigate("/join")}>{homeText.joinUsSection.buttonText}</button>
        </div>
      </motion.div>

      {/* QR Code Section */}
      <motion.div
        className="qr-code-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <div className="qr-text-container glassmorphism">
          <h3>{homeText.qrSection.title}</h3>
        </div>
        <QRCodeCanvas value={window.location.href} size={150} />
        <div className="social-media-links">
          <a href="https://www.facebook.com/profile.php?id=61562671270006&locale=he_IL" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/facebook-icon.jpg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/exp.romano?igsh=bndqcW5tc3cyOG4y" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/instagram-icon.jpg" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/x-icon.jpg" alt="Twitter" />
          </a>
        </div>
      </motion.div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Home;