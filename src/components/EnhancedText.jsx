import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is imported
import "./EnhancedText.css";

const EnhancedText = () => {
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [continentsCount, setContinentsCount] = useState(0);
  const [agentsCount, setAgentsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // To control visibility

  useEffect(() => {
    // Animate counts (same as before)
    if (propertiesCount < 130) {
      setTimeout(() => setPropertiesCount(propertiesCount + 1), 30);
    }
    if (customersCount < 102323) {
      setTimeout(() => setCustomersCount(customersCount + 800), 30);
    }
    if (countriesCount < 12) {
      setTimeout(() => setCountriesCount(countriesCount + 1), 300);
    }
    if (continentsCount < 6) {
      setTimeout(() => setContinentsCount(continentsCount + 1), 600);
    }
    if (agentsCount < 90000) {
      setTimeout(() => setAgentsCount(agentsCount + 700), 30);
    }

    // After 10 seconds, hide the EnhancedText
    const timeout = setTimeout(() => {
      setIsVisible(false); // Trigger the disappearance
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [propertiesCount, customersCount, countriesCount, continentsCount, agentsCount]);

  return (
    isVisible && ( // Render only if isVisible is true
      <motion.div
        className="enhanced-text-container glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }} // Animation when the element exits
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="stats-row">
          EXP הבינלאומית EXP ישראל היא חלק מחברת EXP Realty, הפועלת ב-
          <span className="counter">{countriesCount}</span> מדינות ב-
          <span className="counter">{continentsCount}</span> יבשות, עם למעלה מ-
          <span className="counter">{agentsCount}</span> סוכנים. אנו מתמחים בניהול עסקאות נדל"ן, ומציעים ללקוחותינו שירותים מקיפים ומקצועיים. יותר מ-
          <span className="counter">{propertiesCount}</span> נכסים זמינים כרגע לעסקאות ויותר מ-
          <span className="counter">{customersCount}</span> לקוחות מרוצים שהשתמשו בשירות שלנו.
        </p>
      </motion.div>
    )
  );
};

export default EnhancedText;
