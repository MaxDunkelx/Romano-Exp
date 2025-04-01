import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Reviews.css";

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Removed pause functionality as requested

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

  const reviews = [
    {
      name: "דוד כהן",
      stars: 5,
      comment: "החברה עזרה לי למצוא משכנתא מעולה עם תנאים מצוינים. הצוות היה מקצועי וסבלני, והכל נעשה בצורה חלקה וביעילות. ממליץ בחום!",
    },
    {
      name: "שרה לוי",
      stars: 4,
      comment: "תודה על העזרה במציאת הבית המושלם. הצוות היה זמין לכל שאלה והסביר כל שלב בתהליך. רק חבל שלא היה יותר מידע על שכונות ספציפיות.",
    },
    {
      name: "מיכאל אברהם",
      stars: 5,
      comment: "חוויה נהדרת! קיבלתי ייעוץ משכנתאות מקצועי ועזרו לי למצוא בית שמתאים בדיוק לצרכים שלי. תודה רבה!",
    },
    {
      name: "יעל דוד",
      stars: 5,
      comment: "צוות אדיב ומקצועי שעזר לי למצוא דירה במחיר מעולה. גם קיבלתי ייעוץ משכנתאות שחסך לי אלפי שקלים. מומלץ מאוד!",
    },
    {
      name: "אריאל משה",
      stars: 4,
      comment: "תהליך קל ונוח. הצוות היה זמין וענה על כל השאלות שלי. רק חבל שלא היו יותר אפשרויות באזור המרכז.",
    },
    {
      name: "נועה שטרית",
      stars: 5,
      comment: "הכי טובים בשוק! עזרו לי למצוא בית וגם סידרו לי משכנתא בתנאים מעולים. לא יכולתי לבקש יותר.",
    },
    {
      name: "איתי כץ",
      stars: 5,
      comment: "שירות מצוין, לא מתפשרים על איכות. קיבלתי ייעוץ משכנתאות מפורט ועזרו לי למצוא בית שמתאים בדיוק לתקציב שלי.",
    },
    {
      name: "טל בר",
      stars: 4,
      comment: "מאוד מרוצה מהשירות. הצוות היה מקצועי ועזר לי למצוא דירה במחיר טוב. רק חבל שלא היה יותר מידע על שכונות בצפון.",
    },
    {
      name: "עדי לוי",
      stars: 5,
      comment: "הצליחו למצוא לי את הבית שחלמתי עליו. גם קיבלתי ייעוץ משכנתאות שחסך לי הרבה כסף. תודה רבה!",
    },
    {
      name: "רוני שמואלי",
      stars: 5,
      comment: "שירות אדיב ומהיר. הצוות היה זמין לכל שאלה ועזר לי למצוא בית וגם משכנתא בתנאים מעולים.",
    },
    {
      name: "אנונימי",
      stars: 5,
      comment: "לא האמנתי שאמצא בית כל כך מהר. הצוות היה מקצועי ועזר לי בכל שלב, כולל ייעוץ משכנתאות. מומלץ מאוד!",
    },
    {
      name: "מורן גולן",
      stars: 5,
      comment: "החברה עזרה לי למצוא בית וגם סידרה לי משכנתא בתנאים מעולים. הצוות היה אדיב ומקצועי. תודה רבה!",
    },
  ];

  // Use fewer repeated reviews for better performance
  // We don't need to duplicate as many since the cards are larger and slower
  const displayReviews = isMobile ? 
    [...reviews.slice(0, 8), ...reviews.slice(0, 8)] : 
    [...reviews, ...reviews];

  // Available social icons
  const icons = ["facebook", "instagram"];

  return (
    <motion.div
      className={`reviews-carousel ${isMobile ? 'mobile' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="reviews-container">
        <div className="reviews-wrapper">
          {displayReviews.map((review, index) => {
            // Assign a random icon from the list for each review
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            return (
              <motion.div
                key={index}
                className="review"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
              >
                <div className="review-icons">
                  <img
                    src={`/Romano-Exp/icons/${randomIcon}-icon.jpg`}
                    alt={randomIcon}
                    onError={(e) => {
                      e.target.src = "/Romano-Exp/icons/facebook-icon.jpg"; // Fallback image
                    }}
                  />
                </div>
                <div className="review-name">{review.name}</div>
                <div className="review-stars">{"★".repeat(review.stars)}</div>
                <div className="review-comment">{review.comment}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;