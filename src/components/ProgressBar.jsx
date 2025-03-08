import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { homeText } from "./HomeText"; // Import the homeText data
import "./ProgressBar.css"; // Import your styles

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // Initialize progress state
  const [textVisible, setTextVisible] = useState(false); // State to control text visibility

  useEffect(() => {
    const totalDuration = 6000; // Duration for the progress to reach 50%
    const increment = 100 / (totalDuration / 100); // Increment for the progress every 100ms

    const interval = setInterval(() => {
      // Increase progress to 50% over the duration, and stop once it reaches 50%
      if (progress < 50) {
        setProgress((prevProgress) => prevProgress + increment);
      } else {
        clearInterval(interval); // Stop the interval once the progress reaches 50%
      }
    }, 100); // Update progress every 100ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [progress]);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setProgress(0); // Reset progress every 10 seconds
      setTextVisible(true); // Keep the text visible after reset
    }, 10000); // Repeat every 10 seconds

    return () => clearInterval(cycleInterval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (progress >= 50) {
      setTextVisible(true); // Make text visible when progress reaches 50%
    }
  }, [progress]);

  return (
    <div className="progress-bar-container">
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1 }}
      >
        {/* Display text directly on the bar */}
        {textVisible && (
          <div className="progress-bar-text">
            <p>50% מלמצוא דירה זה למצוא את המתווך הנכון</p>
          </div>
        )}
      </motion.div>

      {/* Display additional progress text once 50% is reached */}
      {progress >= 50 && (
        <div className="progress-bar-text">
          <p>{homeText.buySection.progressText}</p>
          <p className="progress-bar-note">{homeText.buySection.progressNote}</p>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
