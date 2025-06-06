import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OurTeam.css"; // Import the CSS file

const OurTeam = () => {
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
    document.querySelector('.our-team-container').style.backgroundImage = "url('/Romano-Exp/images/night.jpg')";
    document.querySelector('.our-team-container').style.backgroundSize = "cover";
    document.querySelector('.our-team-container').style.backgroundPosition = "center";
  };

  return (
    <div className="our-team-container">
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
      <div className="our-team-content glassmorphism">
        <button className="back-to-menu" onClick={() => navigate("/")}>
          חזור לדף הבית
        </button>
        <h1>הכירו את צוות המומחים של eXp Romano</h1>
        <p>
          הצוות שלנו הוא הלב הפועם של החברה – אנשי מקצוע מנוסים ומחויבים שמובילים
          אתכם להצלחה בכל עסקת נדל"ן. אנו גאים להביא ללקוחותינו ליווי אישי,
          חדשנות וטכנולוגיה מתקדמת לכל צעד בתהליך.
        </p>

        {/* Team Members Section */}
        <div className="team-members">
          {/* Michael Romano */}
          <div className="team-member">
            <img 
              src="/Romano-Exp/images/Michael.jpg" 
              alt="מייקל רומאנו" 
              className="team-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Romano-Exp/images/placeholder-profile.jpg";
              }}  
            />
            <div className="team-member-content">
              <h2>מייקל רומאנו</h2>
              <p>
                מנהל המשרד ויועץ נדל"ן עם מומחיות חסרת פשרות בניהול עסקאות מורכבות. מייקל לא רק סוגר עסקאות—הוא יוצר הזדמנויות...
              </p>
              <p>
                <strong>התמחות:</strong>
              </p>
              <ul>
                <li>ניהול אסטרטגי של עסקאות נדל"ן.</li>
                <li>מומחה לאזור תל אביב יפו.</li>
                <li>פיתוח ושימוש בטכנולוגיות שיווק מתקדמות.</li>
                <li>ליווי אישי של בעלי נכסים, משלב המו"מ ועד לסגירה.</li>
              </ul>
              <p>
                <strong>משפט מוביל:</strong> "מכירת נכס היא לא רק עסקה – זו יצירת אסטרטגיה חכמה שמובילה למקסימום תוצאה."
              </p>
            </div>
          </div>

          {/* Gali Ginoria */}
          <div className="team-member">
            <img 
              src="/Romano-Exp/images/Gali.jpg" 
              alt="גלי ג'ינוריה" 
              className="team-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Romano-Exp/images/placeholder-profile.jpg";
              }}
            />
            <h2>גלי ג'ינוריה</h2>
            <p>
              כלכלנית ויועצת פיננסית, מנהלת קשרי לקוחות עם ניסיון עשיר בשוק ההון ובתחום הנדל"ן.
              גלי היא לא רק מנהלת קשרי לקוחות—היא מנוע צמיחה. היא בונה מערכות יחסים שמחזיקות שנים,
              מומחית ביצירת תהליכים יעילים לגיוס קונים ומוכרים, מתאימה את הקונים לנכסים המדויקים להם תוך התאמה מדויקת
              לצרכיהם ולדרישות השוק.
            </p>
            <p>
              <strong>התמחות:</strong>
            </p>
            <ul>
              <li>ייעוץ אישי והתאמת פתרונות לצרכי הלקוחות.</li>
              <li>ניהול התקשורת עם קונים ומוכרים לאורך כל שלבי העסקה.</li>
              <li>מנהלת תיקי לקוחות בזירת הנדל"ן הבינלאומית.</li>
            </ul>
            <p>
              <strong>משפט מוביל:</strong> "אצלי כל לקוח הוא שותף לדרך – והדרך הזו מובילה לתוצאות."
            </p>
          </div>

          {/* Our Values Section */}
          <div className="our-values">
            <h2>הערכים שלנו כצוות</h2>
            <ul>
              <li>
                <strong>מקצועיות:</strong> כל עסקה מטופלת במלוא הקפדנות, הדיוק
                והמסירות.
              </li>
              <li>
                <strong>שקיפות:</strong> אנו מאמינים שתקשורת כנה ושיתוף פעולה הם
                המפתח להצלחה.
              </li>
              <li>
                <strong>חדשנות:</strong> שימוש בטכנולוגיות מתקדמות ושיטות עבודה
                יצירתיות כדי להוביל את הנדל"ן לשלב הבא.
              </li>
              <li>
                <strong>שירות אישי:</strong> ליווי צמוד לכל לקוח, החל מהשלב הראשון
                ועד לסגירת העסקה.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="cta">
          <h2>רוצים להכיר אותנו מקרוב?</h2>
          <p>בואו להרגיש את ההבדל שעושה צוות מנצח!</p>
          <button onClick={() => navigate("/contact")}>צרו קשר איתנו</button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;