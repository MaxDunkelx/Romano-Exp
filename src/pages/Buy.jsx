import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Buy.css"; // Import the CSS file

const Buy = () => {
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
    document.querySelector('.buy-container').style.backgroundImage = "url('/Romano-Exp/images/night.jpg')";
    document.querySelector('.buy-container').style.backgroundSize = "cover";
    document.querySelector('.buy-container').style.backgroundPosition = "center";
  };

  return (
    <div className="buy-container">
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
      <div className="buy-content glassmorphism">
        {/* Back to Menu Button */}
        <button className="back-to-menu" onClick={() => navigate("/")}>
          חזור לתפריט
        </button>

        <h1>ברוכים הבאים לעולם רכישת הנכסים של eXp Romano</h1>
        <p>
          כאן מתחיל המסע שלך לעבר הנכס המושלם. אנו מבינים שרכישת נכס היא אחת
          ההחלטות החשובות ביותר בחיים, ואנחנו כאן כדי להפוך את התהליך לחוויה
          מקצועית, נוחה ומשתלמת.
        </p>

        {/* Why Buy Through Us Section */}
        <div className="why-buy">
          <h2>למה לרכוש נכס דרכנו?</h2>
          <ul>
            <li>
              <strong>מאגר נכסים ייחודי ומותאם אישית:</strong> גישה למאגר נכסים
              רחב ומעודכן, הכולל אפשרויות מגוונות המתאימות למשפחות, משקיעים,
              וזוגות צעירים. כל נכס מלווה במידע מלא, תמונות מקצועיות וסיורים
              וירטואליים.
            </li>
            <li>
              <strong>ליווי אישי לאורך כל הדרך:</strong> המומחים שלנו ילוו אותך
              מצעדיך הראשונים ועד לסיום העסקה. נבין את הצרכים שלך לעומק ונעזור
              לך למצוא את הנכס שמתאים בדיוק לך.
            </li>
            <li>
              <strong>בדיקות מקצועיות ושקיפות מלאה:</strong> כל נכס עובר בדיקות
              מקיפות כדי להבטיח לך שקט נפשי. אנו מחויבים לשקיפות מלאה בכל שלב
              בתהליך.
            </li>
            <li>
              <strong>ייעוץ משכנתאות מקצועי:</strong> צוות יועצי המשכנתאות שלנו
              יבטיח שתקבל את התנאים המיטביים למימון הנכס שלך. נחסוך לך זמן, אנרגיה
              וכסף בתהליך השגת המשכנתא.
            </li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works">
          <h2>איך זה עובד?</h2>
          <ol>
            <li>
              <strong>פגישת היכרות:</strong> נבין את הצרכים, החלומות והדרישות
              שלך לגבי הנכס.
            </li>
            <li>
              <strong>חיפוש נכס מותאם אישית:</strong> צוות המומחים שלנו ימצא
              עבורך נכסים העונים על הקריטריונים שהגדרת.
            </li>
            <li>
              <strong>סיור מקצועי בנכסים:</strong> נציגי החברה שלנו יתאמו עבורך
              סיורים בנכסים הרלוונטיים, כולל הסברים על כל היתרונות והחסרונות.
            </li>
            <li>
              <strong>בדיקת התאמה פיננסית:</strong> נוודא שהנכס מתאים לתקציב שלך
              ונעזור בהשגת תנאי מימון אופטימליים.
            </li>
            <li>
              <strong>חתימה על חוזה וביצוע העסקה:</strong> עורכי הדין שלנו יטפלו
              בכל הצדדים המשפטיים כדי להבטיח עסקה בטוחה וחלקה.
            </li>
          </ol>
        </div>

        {/* Our Expertise Section */}
        <div className="our-expertise">
          <h2>המומחיות שלנו – היתרון שלך</h2>
          <ul>
            <li>
              <strong>שיווק דיגיטלי מתקדם:</strong> אנו משתמשים בטכנולוגיות
              שיווק מתקדמות כדי לאתר עבורך את הנכס המושלם.
            </li>
            <li>
              <strong>ניסיון גלובלי:</strong> כחלק מחברת eXp Realty הבינלאומית,
              אנו מביאים ידע וניסיון גלובלי לכל עסקה.
            </li>
            <li>
              <strong>שירות אישי:</strong> הצוות שלנו זמין עבורך תמיד, עם דגש על
              שירות מותאם אישית.
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h2>לקוחות מספרים</h2>
          <div className="testimonial">
            <p>
              "לא האמנו כמה קל ופשוט זה יכול להיות. הצוות של eXp ישראל היה איתנו
              בכל שלב, ודאג לנו לנכס שאנו חולמים עליו כבר שנים."
            </p>
            <p>– משפחת כהן, תל אביב</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta">
          <h2>רוצים להתחיל?</h2>
          <p>
            אל תחכו לחלום הבא – הפכו אותו למציאות עוד היום! לחצו על "מצא את הבית
            שלך" והתחילו את המסע עוד היום.
          </p>
          <button onClick={() => navigate("/contact")}>מצא את הבית שלך</button>
        </div>
      </div>
    </div>
  );
};

export default Buy;