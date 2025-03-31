import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sell.css"; // Import the CSS file

const Sell = () => {
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
    document.querySelector('.sell-container').style.backgroundImage = "url('/Romano-Exp/images/night.jpg')";
    document.querySelector('.sell-container').style.backgroundSize = "cover";
    document.querySelector('.sell-container').style.backgroundPosition = "center";
  };

  return (
    <div className="sell-container">
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
      <div className="sell-content glassmorphism">
        <button className="back-to-menu" onClick={() => navigate("/")}>
          חזור לדף הבית
        </button>
        <h1>ברוכים הבאים לעולם מכירת הנכסים של eXp Romano</h1>
        <p>
          כאן מתחיל המסע שלך למכירת הנכס שלך במהירות ובמחיר הטוב ביותר. אנו מבינים
          שמכירת נכס היא אחת ההחלטות החשובות ביותר בחיים, ואנחנו כאן כדי להפוך את
          התהליך לחוויה מקצועית, נוחה ומשתלמת.
        </p>

        {/* Why Sell Section */}
        <div className="why-sell">
          <h2>למה למכור נכס דרכנו?</h2>
          <ul>
            <li>
              <strong>שיווק דיגיטלי מתקדם</strong>
              <p>
                אנו משתמשים בטכנולוגיות שיווק מתקדמות כדי לחשוף את הנכס שלך לקהל
                רחב של קונים פוטנציאליים.
              </p>
            </li>
            <li>
              <strong>צילום מקצועי וסיורים וירטואליים</strong>
              <p>
                כל נכס מלווה בתמונות מקצועיות וסיורים וירטואליים שיעזרו למשוך
                קונים.
              </p>
            </li>
            <li>
              <strong>ליווי אישי לאורך כל הדרך</strong>
              <p>
                המומחים שלנו ילוו אותך מצעדיך הראשונים ועד לסיום העסקה. נבטיח
                שתקבל את המחיר הטוב ביותר עבור הנכס שלך.
              </p>
            </li>
            <li>
              <strong>שקיפות מלאה</strong>
              <p>
                אנו מחויבים לשקיפות מלאה בכל שלב בתהליך המכירה, כדי שתהיה בטוח
                בכל החלטה.
              </p>
            </li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works">
          <h2>איך זה עובד?</h2>
          <ol>
            <li>
              <strong>פגישת היכרות</strong>
              <p>
                נבין את הצרכים והמטרות שלך לגבי מכירת הנכס.
              </p>
            </li>
            <li>
              <strong>הערכת שווי הנכס</strong>
              <p>
                המומחים שלנו יעריכו את שווי הנכס שלך וימליצו על אסטרטגיית מכירה
                מותאמת אישית.
              </p>
            </li>
            <li>
              <strong>שיווק הנכס</strong>
              <p>
                נשתמש בכלים דיגיטליים מתקדמים כדי לחשוף את הנכס שלך לקהל רחב של
                קונים פוטנציאליים.
              </p>
            </li>
            <li>
              <strong>משא ומתן וסגירת עסקה</strong>
              <p>
                ננהל עבורך את כל המשא ומתן מול הקונים ונבטיח שתקבל את העסקה הטובה
                ביותר.
              </p>
            </li>
            <li>
              <strong>חתימה על חוזה וביצוע העסקה</strong>
              <p>
                עורכי הדין שלנו יטפלו בכל הצדדים המשפטיים כדי להבטיח עסקה בטוחה
                וחלקה.
              </p>
            </li>
          </ol>
        </div>

        {/* Expertise Section */}
        <div className="expertise">
          <h2>המומחיות שלנו – היתרון שלך</h2>
          <ul>
            <li>
              <strong>שיווק דיגיטלי מתקדם:</strong> אנו משתמשים בטכנולוגיות
              שיווק מתקדמות כדי למכור את הנכס שלך במהירות ובמחיר הטוב ביותר.
            </li>
            <li>
              <strong>ניסיון גלובלי:</strong> כחלק מחברת eXp Realty
              הבינלאומית, אנו מביאים ידע וניסיון גלובלי לכל עסקה.
            </li>
            <li>
              <strong>שירות אישי:</strong> הצוות שלנו זמין עבורך תמיד, עם דגש
              על שירות מותאם אישית.
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h2>לקוחות מספרים</h2>
          <div className="testimonial">
            <p>
              "לא האמנו כמה קל ופשוט זה יכול להיות. הצוות של eXp ישראל היה איתנו
              בכל שלב, ודאג לנו למכור את הנכס שלנו במחיר הטוב ביותר."
            </p>
            <p>– משפחת לוי, חיפה</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta">
          <h2>רוצים להתחיל?</h2>
          <p>אל תחכו לחלום הבא – הפכו אותו למציאות עוד היום!</p>
          <button onClick={() => navigate("/contact")}>מכור את הנכס שלך</button>
          <p>
            צריכים עזרה? צרו קשר עם המומחים שלנו ונשמח לסייע.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sell;