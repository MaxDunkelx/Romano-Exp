import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EnhancedText.css";

// Mobile Flag Text Component
const MobileFlag = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);

  // Start animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll visibility for mobile flag
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll threshold based on device height
      const threshold = window.innerHeight * 0.6; // 60% of viewport height
      
      // Hide flag when scrolled past threshold
      if (window.scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="mobile-flag-container">
      <div className={`fancy-flag-wrapper ${animationStarted ? 'animation-started' : ''}`}>
        <div className="fancy-flag-inner">
          <div className="fancy-flag-text">
            מובילים את הדרך בכל עסקה, בין קנייה למכירה אתם בראש ובראשונה.
          </div>
          <div className="flag-particles"></div>
          <div className="flag-glow"></div>
        </div>
      </div>
    </div>
  );
};

const EnhancedText = ({ isMobileView }) => {
  // If this is for mobile view, render the mobile flag instead
  if (isMobileView) {
    return <MobileFlag />;
  }

  // Desktop version continues below
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [continentsCount, setContinentsCount] = useState(0);
  const [agentsCount, setAgentsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

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

  // Animate counts with adjusted speeds
  useEffect(() => {
    // Faster animation speeds for mobile devices
    const speedMultiplier = isMobile ? 1.5 : 1;
    
    // Properties count animation
    if (propertiesCount < 130) {
      setTimeout(() => setPropertiesCount(propertiesCount + 1), 30 / speedMultiplier);
    }
    
    // Customers count animation
    if (customersCount < 102323) {
      const increment = isMobile ? 1500 : 800; // Faster increments on mobile
      setTimeout(() => setCustomersCount(customersCount + increment), 30 / speedMultiplier);
    }
    
    // Countries count animation
    if (countriesCount < 12) {
      setTimeout(() => setCountriesCount(countriesCount + 1), 300 / speedMultiplier);
    }
    
    // Continents count animation
    if (continentsCount < 6) {
      setTimeout(() => setContinentsCount(continentsCount + 1), 600 / speedMultiplier);
    }
    
    // Agents count animation
    if (agentsCount < 90000) {
      const increment = isMobile ? 1200 : 700; // Faster increments on mobile
      setTimeout(() => setAgentsCount(agentsCount + increment), 30 / speedMultiplier);
    }
  }, [propertiesCount, customersCount, countriesCount, continentsCount, agentsCount, isMobile]);

  // Hide the component after 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, isMobile ? 8000 : 10000); // Slightly shorter time on mobile

    return () => clearTimeout(timeout);
  }, [isMobile]);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (isMobile ? 300 : 400)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          className={`enhanced-text-container ${isMobile ? 'mobile' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className={`stats-row ${isMobile ? 'mobile-text' : ''}`}>
            <span className="highlight"> </span>   EXP Realty, הפועלת ב-
            <span className="counter">{countriesCount}</span> מדינות ב-
            <span className="counter">{continentsCount}</span> יבשות, עם למעלה מ-
            <span className="counter">{agentsCount.toLocaleString()}</span> סוכנים. אנו מתמחים בניהול עסקאות נדל"ן, ומציעים ללקוחותינו שירותים מקיפים ומקצועיים. יותר מ-
            <span className="counter">{propertiesCount}</span> נכסים זמינים כרגע לעסקאות ויותר מ-
            <span className="counter">{customersCount.toLocaleString()}</span> לקוחות מרוצים שהשתמשו בשירות שלנו.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnhancedText;