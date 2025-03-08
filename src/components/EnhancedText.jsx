import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is imported
import "./EnhancedText.css";

const EnhancedText = () => {
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [continentsCount, setContinentsCount] = useState(0);
  const [agentsCount, setAgentsCount] = useState(0);

  useEffect(() => {
    // Animate properties count up to 130
    if (propertiesCount < 130) {
      setTimeout(() => setPropertiesCount(propertiesCount + 1), 30); // Slower animation
    }

    // Animate customers count up to 1673
    if (customersCount < 102323) {
      setTimeout(() => setCustomersCount(customersCount + 800), 30); // Slower animation
    }
    if (customersCount > 102323) {
      setTimeout(() => setCustomersCount(customersCount + 1), 5000); // Slower animation
    }
    

    // Animate countries, continents, and agents count up to their respective numbers
    if (countriesCount < 12) {
      setTimeout(() => setCountriesCount(countriesCount + 1), 300);
    }
    if (continentsCount < 6) {
      setTimeout(() => setContinentsCount(continentsCount + 1), 600);
    }
    if (agentsCount < 90000) {
      setTimeout(() => setAgentsCount(agentsCount + 700), 30);
    }
  }, [propertiesCount, customersCount, countriesCount, continentsCount, agentsCount]);

  return (
    <motion.div
      className="enhanced-text-container glassmorphism"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
         <p className="stats-row" >
        EXP הבינלאומית EXP ישראל היא חלק מחברת EXP Realty, הפועלת ב-
        <span className="counter">{countriesCount ? countriesCount : 0}</span> מדינות ב-
        <span className="counter">{continentsCount ? continentsCount : 0}</span> יבשות, עם למעלה מ-
        <span className="counter">{agentsCount ? agentsCount : 0}</span> סוכנים. אנו מתמחים בניהול עסקאות נדל"ן, ומציעים ללקוחותינו שירותים מקיפים ומקצועיים. יותר מ-
        <span className="counter">{propertiesCount ? propertiesCount : 0}</span> נכסים זמינים כרגע לעסקאות ויותר מ-
        <span className="counter">{customersCount ? customersCount : 0}</span> לקוחות מרוצים שהשתמשו בשירות שלנו.
      </p>
    
    </motion.div>
  );
};

export default EnhancedText;
