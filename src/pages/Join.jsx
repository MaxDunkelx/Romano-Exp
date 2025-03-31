import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Join.css"; // Import the CSS file

const Join = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Monitor window resize to adjust for mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fallback image for mobile devices or if video fails to load
  const handleVideoError = (e) => {
    // Set a fallback background image if video fails to load
    document.querySelector('.join-container').style.backgroundImage = "url('/Romano-Exp/images/night.jpg')";
    document.querySelector('.join-container').style.backgroundSize = "cover";
    document.querySelector('.join-container').style.backgroundPosition = "center";
  };

  return (
    <div className="join-container">
      {/* Background Video - conditionally loaded based on device */}
      {!isMobile && (
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="background-video"
          onError={handleVideoError}
        >
          <source src="/Romano-Exp/videos/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Fallback background for mobile */}
      {isMobile && (
        <div 
          className="background-image" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: "url('/Romano-Exp/images/night.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }}
        />
      )}

      {/* Main Content */}
      <motion.div
        className="join-content glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button className="back-to-menu" onClick={() => navigate("/")}>
          חזור לדף הבית
        </button>
        <h1>העתיד שלך מתחיל כאן – הצטרף לצוות המומחים של eXp ישראל!</h1>
        <p>
          אנחנו מחפשים את הכוכבים הבאים של עולם הנדל"ן – סוכנים שאפתנים,
          מקצועיים וחדורי מטרה, שרוצים להצטרף לחברה המובילה בתחום וליהנות ממודל
          עבודה חדשני שמביא את הקריירה שלך לגבהים חדשים.
        </p>

        {/* Why Join Section */}
        <div className="why-join">
          <h2>למה להצטרף ל-eXp ישראל?</h2>
          <ul>
            <li>
              <strong>מודל תגמול משתלם במיוחד</strong>
              <p>
                רוב העמלות נשארות אצלך – יותר רווחים ישירים מהעסקאות שלך.
                מנגנון ייחודי למתן מניות בחברה, שמאפשר לך להיות לא רק סוכן, אלא גם
                שותף אמיתי להצלחה הגלובלית של eXp Realty.
              </p>
            </li>
            <li>
              <strong>עבודה מבוססת טכנולוגיה מתקדמת</strong>
              <p>
                פלטפורמת ענן ייחודית לעבודה מכל מקום, בכל זמן. מערכות CRM
                מתקדמות לניהול לקוחות, מעקב עסקאות והפקת דוחות. כלים דיגיטליים
                לשיווק נכסים ברשתות חברתיות, כולל סיורים וירטואליים וצילומים
                מקצועיים.
              </p>
            </li>
            <li>
              <strong>תמיכה מקצועית וליווי אישי</strong>
              <p>
                גישה לתכנים מקצועיים והכשרות מהמובילים בתחום. צוות תמיכה זמין לכל
                שאלה או צורך מקצועי. סביבה תומכת עם קהילה גלובלית של סוכנים
                ממדינות רבות.
              </p>
            </li>
            <li>
              <strong>מותג בינלאומי מוביל</strong>
              <p>
                כחלק מ-eXp Realty הבינלאומית, תיהנה מתמיכה גלובלית, שיתופי פעולה
                עם סוכנים מכל העולם וגישה למאגרי נכסים בינלאומיים. פרסים והכרה
                כחברה חדשנית ומובילה בתחום הנדל"ן.
              </p>
            </li>
            <li>
              <strong>חופש וגמישות</strong>
              <p>
                עבודה עצמאית בסביבה דינמית, תוך קבלת תמיכה מלאה מהחברה. ניהול
                הזמן שלך והתמקדות בצמיחה האישית והמקצועית שלך.
              </p>
            </li>
          </ul>
        </div>

        {/* Who We Are Looking For Section */}
        <div className="looking-for">
          <h2>מי אנחנו מחפשים?</h2>
          <ul>
            <li>סוכני נדל"ן עם רישיון בתוקף.</li>
            <li>מוטיבציה גבוהה להצלחה וצמיחה מקצועית.</li>
            <li>יכולת עבודה עצמאית ורצון להשתלב בקהילה גלובלית.</li>
            <li>ניסיון במכירות הוא יתרון, אך לא חובה.</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works">
          <h2>איך זה עובד?</h2>
          <ol>
            <li>
              <strong>הגשת מועמדות</strong>
              <p>
                מלאו את טופס הפנייה המקוון עם הפרטים האישיים והמקצועיים שלכם.
              </p>
            </li>
            <li>
              <strong>פגישה ראשונית עם מנהל גיוס</strong>
              <p>
                הכירו את המודל העסקי שלנו וקבלו את כל המידע הדרוש כדי להצטרף
                אלינו.
              </p>
            </li>
            <li>
              <strong>הדרכה והכשרה</strong>
              <p>
                השתתפו בהכשרות הראשוניות וקבלו גישה לכלים המקצועיים שלנו.
              </p>
            </li>
            <li>
              <strong>התחלת עבודה והצלחה</strong>
              <p>
                התחילו לנהל עסקאות נדל"ן בצורה מקצועית ורווחית, עם התמיכה המלאה
                של eXp ישראל.
              </p>
            </li>
          </ol>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h2>מה אומרים הסוכנים שלנו?</h2>
          <div className="testimonial">
            <p>
              "הצטרפות ל-eXp ישראל הייתה ההחלטה הכי טובה שעשיתי. המודל של החברה
              מאפשר לי לעבוד בצורה חכמה ורווחית יותר, עם תמיכה מקצועית ואכפתיות."
            </p>
            <p>– אבי כהן, סוכן נדל"ן בחברה</p>
          </div>
          <div className="testimonial">
            <p>
              "תמיד חלמתי להיות חלק מחברה בינלאומית. היום, אני לא רק סוכן – אני
              שותף להצלחה."
            </p>
            <p>– יעל לוי, סוכנת נדל"ן בחברה</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta">
          <h2>רוצים להצטרף להצלחה?</h2>
          <p>העתיד שלך מחכה לך ב-eXp ישראל!</p>
          <button onClick={() => navigate("/contact")}>הגש מועמדות</button>
          <p>
            צריכים עוד פרטים? צרו קשר עם מחלקת הגיוס שלנו בטלפון או דרך טופס הפנייה
            המקוון, ונשמח לעזור.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;