import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { homeText } from "./HomeText"; // Import the homeText data
import "./ProgressBar.css"; // Import your styles

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
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

  // Progress animation effect
  useEffect(() => {
    // Adjust duration based on device type
    const totalDuration = isMobile ? 4000 : 6000; // Faster on mobile
    const increment = 100 / (totalDuration / 100);

    const interval = setInterval(() => {
      if (progress < 50) {
        setProgress((prevProgress) => prevProgress + increment);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress, isMobile]);

  // Reset cycle effect
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setProgress(0);
      setTextVisible(true);
    }, isMobile ? 8000 : 10000); // Shorter cycle on mobile

    return () => clearInterval(cycleInterval);
  }, [isMobile]);

  // Show text when progress reaches 50%
  useEffect(() => {
    if (progress >= 50) {
      setTextVisible(true);
    }
  }, [progress]);

  return (
    <div className={`progress-bar-container ${isMobile ? 'mobile' : ''}`}>
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Display text when progress reaches 50% */}
      {textVisible && (
        <motion.div 
          className="progress-bar-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>{homeText.buySection.progressText}</p>
          <p className="progress-bar-note">{homeText.buySection.progressNote}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressBar;