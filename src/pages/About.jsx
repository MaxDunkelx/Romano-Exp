import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css"; // Import the CSS file

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
      <source src="/Romano-Exp/videos/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="about-content glassmorphism">
        {/* Back to Menu Button */}
        <button className="back-to-menu" onClick={() => navigate("/")}>
          חזור לתפריט
        </button>
        <h1>ברוכים הבאים ל-eXp ישראל</h1>
        <p>
          כחלק מחברת eXp Realty הבינלאומית, eXp ישראל מייצגת סטנדרטים גבוהים של
          מקצועיות, חדשנות ושירות לקוחות בתחום הנדל"ן. אנו כאן כדי לספק פתרונות
          מתקדמים וללוות אתכם בעסקאות הנדל"ן המשמעותיות ביותר בחייכם.
        </p>

        {/* About the Company Section */}
        <div className="about-company">
          <h2>על החברה</h2>
          <p>
            <strong>חברת eXp Realty:</strong> eXp Realty היא אחת מחברות הנדל"ן
            המובילות בעולם, עם נוכחות ב-28 מדינות וב-5 יבשות, ומעל 90,000 סוכנים
            פעילים. החברה נוסדה מתוך חזון לשנות את הדרך בה מתנהלות עסקאות נדל"ן,
            תוך שילוב של טכנולוגיה חדשנית ומודל עבודה ייחודי.
          </p>
          <p>
            <strong>eXp ישראל:</strong> eXp ישראל הוקמה מתוך מטרה להביא את
            הסטנדרטים הגלובליים של החברה לישראל. אנו מתמחים בניהול עסקאות נדל"ן
            מקצה לקצה, תוך התאמה לשוק המקומי ויצירת חוויית לקוח בלתי מתפשרת.
          </p>
        </div>

        {/* CEO Section */}
        <div className="ceo-section">
          <h2>מנכ"ל eXp ישראל – אלכס אוסטרובסקי</h2>
          <p>
            אלכס אוסטרובסקי, מנכ"ל eXp ישראל, הוא דמות מובילה בתחום הנדל"ן
            המקומי והבינלאומי, עם מעל 20 שנות ניסיון בתעשייה. כמי שהוביל עשרות
            פרויקטים מורכבים בתחום הנדל"ן והשקעות בינלאומיות, אלכס מביא עמו חזון
            חדשני ומחויבות לקדם את תעשיית הנדל"ן בישראל.
          </p>
          <p>
            <strong>התמחות:</strong>
            <ul>
              <li>פיתוח שווקים חדשים והרחבת פעילות eXp בישראל.</li>
              <li>הטמעת טכנולוגיות מתקדמות במודלים עסקיים.</li>
              <li>טיפוח סוכנים ובניית קהילת נדל"ן מקצועית ובינלאומית.</li>
            </ul>
          </p>
          <p>
            <strong>חזון ניהולי:</strong> "המטרה שלי היא להפוך את eXp ישראל לבית
            עבור סוכנים מקצועיים, לקוחות פרטיים ומשקיעים, וליצור חוויית נדל"ן
            שמביאה ערך אמיתי לכל הצדדים."
          </p>
        </div>

        {/* History and Achievements Section */}
        <div className="history-achievements">
          <h2>היסטוריה והישגים</h2>
          <p>
            <strong>היסטוריה:</strong> החברה הוקמה מתוך חזון חדשני לניהול עסקאות
            נדל"ן, תוך יצירת פלטפורמת ענן ייחודית שמאפשרת לסוכנים לעבוד מכל מקום
            ולספק שירותים מקיפים ומתקדמים ללקוחותיהם.
          </p>
          <p>
            <strong>הישגים בינלאומיים:</strong>
            <ul>
              <li>זכייה בפרסים על חדשנות ומצוינות בתחום הנדל"ן.</li>
              <li>הוכרה כסוכנות הנדל"ן הגדולה ביותר בצפון אמריקה.</li>
              <li>
                שילוב טכנולוגיות מתקדמות כמו סיורים וירטואליים, מערכות CRM
                מובילות ומודל עבודה גמיש.
              </li>
            </ul>
          </p>
        </div>

        {/* Our Values Section */}
        <div className="our-values">
          <h2>הערכים שלנו</h2>
          <ul>
            <li>
              <strong>שירות לקוחות בלתי מתפשר:</strong> כל לקוח הוא חלק מהמשפחה
              שלנו, ואנו מחויבים ללוות אותו בכל שלב בתהליך.
            </li>
            <li>
              <strong>מקצועיות ושקיפות:</strong> אנו מבטיחים ללקוחותינו מידע
              מדויק ושיתוף פעולה מלא לאורך כל העסקה.
            </li>
            <li>
              <strong>חדשנות:</strong> שימוש בטכנולוגיות המתקדמות ביותר לשיפור
              חוויית הלקוח.
            </li>
            <li>
              <strong>קהילתיות:</strong> חלק מחזון החברה הוא יצירת קהילה גלובלית
              של סוכני נדל"ן ולקוחות, המחוברת דרך רשת משותפת.
            </li>
          </ul>
        </div>

        {/* Leading Team Section */}
        <div className="leading-team">
          <h2>הצוות המוביל שלנו</h2>
          <p>
            <strong>מייקל רומאנה:</strong> מנהל המשרד eXp Romano - מומחה לניהול
            עסקאות נדל"ן מורכבות ושיווק דיגיטלי מתקדם.
          </p>
          <p>
            <strong>גלי ג'ינוריה:</strong> כלכלנית ויועצת פיננסית, המתמחה ביצירת
            חוויית לקוח מותאמת אישית וניהול תהליכי מכירה ורכישה.
          </p>
        </div>

        {/* Awards and Recognition Section */}
        <div className="awards-recognition">
          <h2>הפרסים וההכרה שקיבלנו</h2>
          <ul>
            <li>
              <strong>פרסי חדשנות:</strong> על פיתוח פלטפורמות מתקדמות לניהול
              נכסים ושיווק דיגיטלי.
            </li>
            <li>
              <strong>הכרה בתור חברת הנדל"ן הצומחת ביותר בעולם:</strong> בזכות
              מודל עבודה מבוסס ענן ותמיכה בסוכנים.
            </li>
            <li>
              <strong>שבחים על שירות לקוחות מצטיין:</strong> בניית תהליכים
              שמבטיחים חוויה מושלמת עבור לקוחותינו.
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h2>מה הלקוחות שלנו אומרים?</h2>
          <div className="testimonial">
            <p>
              "חיפשנו שותפים אמינים בעסקת הנדל"ן שלנו, ומצאנו בדיוק את זה עם eXp
              ישראל. צוות מקצועי, חדשני, ואכפתי."
            </p>
            <p>– משפחת לוי, תל אביב</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta">
          <h2>רוצים לדעת עוד?</h2>
          <p>
            לחצו כאן כדי ליצור איתנו קשר ולגלות כיצד אנו יכולים להפוך את העסקה
            הבאה שלכם להצלחה בטוחה.
          </p>
          <button onClick={() => navigate("/contact")}>הצטרפו אלינו!</button>
        </div>
      </div>
    </div>
  );
};

export default About;