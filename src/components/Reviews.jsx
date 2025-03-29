import React from "react";
import { motion } from "framer-motion";
import "./Reviews.css";

const Reviews = () => {
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
    {
      name: "יואב כהן",
      stars: 4,
      comment: "תהליך מצוין, אבל היה חסר לי קצת יותר מידע על שכונות בדרום. בכל זאת, הצוות היה מקצועי ועזר לי מאוד.",
    },
    {
      name: "ליאור לוי",
      stars: 5,
      comment: "שירות מעולה! קיבלתי ייעוץ משכנתאות מפורט ועזרו לי למצוא בית שמתאים בדיוק לצרכים שלי. ממליץ בחום!",
    },
    {
      name: "שי דוד",
      stars: 5,
      comment: "הכי טובים בשוק! עזרו לי למצוא בית וגם סידרו לי משכנתא בתנאים מעולים. לא יכולתי לבקש יותר.",
    },
    {
      name: "נעמה אברהם",
      stars: 5,
      comment: "צוות אדיב ומקצועי שעזר לי למצוא דירה במחיר מעולה. גם קיבלתי ייעוץ משכנתאות שחסך לי אלפי שקלים. מומלץ מאוד!",
    },
    {
      name: "אלעד שטרית",
      stars: 4,
      comment: "תהליך קל ונוח. הצוות היה זמין וענה על כל השאלות שלי. רק חבל שלא היו יותר אפשרויות באזור המרכז.",
    },
    {
      name: "מיכל בר",
      stars: 5,
      comment: "הצליחו למצוא לי את הבית שחלמתי עליו. גם קיבלתי ייעוץ משכנתאות שחסך לי הרבה כסף. תודה רבה!",
    },
    {
      name: "אביב כהן",
      stars: 5,
      comment: "שירות מעולה! הצוות היה מקצועי ועזר לי למצוא בית שמתאים בדיוק לצרכים שלי. ממליץ בחום!",
    },
    {
      name: "נועם לוי",
      stars: 4,
      comment: "תהליך קל ונוח. הצוות היה זמין וענה על כל השאלות שלי. רק חבל שלא היו יותר אפשרויות באזור המרכז.",
    },
    {
      name: "מיה דוד",
      stars: 5,
      comment: "הכי טובים בשוק! עזרו לי למצוא בית וגם סידרו לי משכנתא בתנאים מעולים. לא יכולתי לבקש יותר.",
    },
    {
      name: "אורי שטרית",
      stars: 5,
      comment: "צוות אדיב ומקצועי שעזר לי למצוא דירה במחיר מעולה. גם קיבלתי ייעוץ משכנתאות שחסך לי אלפי שקלים. מומלץ מאוד!",
    },
  ];

  // Duplicate reviews once for seamless looping
  const displayReviews = [...reviews, ...reviews];

  // Define available icons
  const icons = ["facebook", "instagram"];

  return (
    <motion.div
      className="reviews-carousel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2>?מה אומרים עלינו</h2>
      <div className="reviews-container">
        <div className="reviews-wrapper">
          {displayReviews.map((review, index) => {
            // Assign a random icon from the list for each review
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            return (
              <motion.div
                key={index}
                className="review"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="review-icons">
                  <img
                    src={`/Romano-Exp/icons/${randomIcon}-icon.jpg`}
                    alt={randomIcon}
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
