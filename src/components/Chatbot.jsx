import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [showHoverText, setShowHoverText] = useState(false); // State to manage hover text visibility

  // FAQ questions and answers
  const faqQuestions = [
    "מה השירותים שאתם מציעים?",
    "איך אתם עוזרים במציאת משכנתא?",
    "למה כדאי להשתמש בשירותים שלכם?",
    "איך מתחילים תהליך קניית נכס?",
    "מה היתרונות של שירותי הנדל\"ן שלכם?",
    "איך אתם עוזרים במכירת נכס?",
    "מה העמלות שלכם?",
    "איך אתם מבטיחים שקיפות בתהליך?",
    "האם אתם עובדים עם לקוחות מחו\"ל?",
    "איך אתם מתמודדים עם ביורוקרטיה?",
    "מה הזמן הממוצע למציאת נכס?",
    "האם אתם מספקים שירותי שיפוץ?",
    "איך אתם מתאימים נכס ללקוח?",
    "האם אתם עובדים עם משקיעים?",
    "איך אתם מטפלים בבעיות משפטיות?",
    "האם אתם מספקים שירותי הערכת שווי נכס?",
    "איך אתם מתמודדים עם שוק תחרותי?",
    "האם אתם מספקים שירותי ניהול נכסים?",
    "איך אתם מתאימים משכנתא ללקוח?",
    "האם אתם מספקים שירותי ייעוץ פיננסי?",
  ];

  const faqAnswers = {
    "מה השירותים שאתם מציעים?": "אנו מציעים שירותי נדל\"ן מקיפים, כולל קנייה, מכירה, השכרה, וייעוץ משכנתאות.",
    "איך אתם עוזרים במציאת משכנתא?": "אנו עובדים עם בנקים וגופים פיננסיים כדי להשיג עבורך את תנאי המשכנתא הטובים ביותר.",
    "למה כדאי להשתמש בשירותים שלכם?": "אנו מספקים שירות אישי, מקצועי ושקוף, עם גישה למאגר נכסים גדול ומוביל.",
    "איך מתחילים תהליך קניית נכס?": "פשוט צור איתנו קשר, ונעזור לך למצוא את הנכס המושלם בהתאם לצרכים והתקציב שלך.",
    "מה היתרונות של שירותי הנדל\"ן שלכם?": "אנו מציעים גישה למומחים, תנאים מותאמים אישית, וליווי צמוד בכל שלבי העסקה.",
    "איך אתם עוזרים במכירת נכס?": "אנו משווקים את הנכס שלך בצורה מקצועית, מגיעים לקהל רחב, ומספקים ליווי עד לסגירת העסקה.",
    "מה העמלות שלכם?": "העמלות שלנו הן תחרותיות ומותאמות אישית לכל לקוח. נשמח לספק פרטים נוספים בפגישה.",
    "איך אתם מבטיחים שקיפות בתהליך?": "אנו מספקים עדכונים שוטפים ודיווחים מפורטים בכל שלב בתהליך.",
    "האם אתם עובדים עם לקוחות מחו\"ל?": "כן, אנו מספקים שירותים ללקוחות מחו\"ל, כולל תרגום וייעוץ משפטי.",
    "איך אתם מתמודדים עם ביורוקרטיה?": "אנו מטפלים בכל ההיבטים הביורוקרטיים, כולל רישיונות, חוזים, ואישורים.",
    "מה הזמן הממוצע למציאת נכס?": "הזמן הממוצע למציאת נכס הוא בין חודש לשלושה חודשים, בהתאם לדרישות שלך.",
    "האם אתם מספקים שירותי שיפוץ?": "כן, אנו מספקים שירותי שיפוץ ותכנון פנים בהתאם לצרכים שלך.",
    "איך אתם מתאימים נכס ללקוח?": "אנו לוקחים בחשבון את הצרכים, התקציב, והמיקום המועדף שלך כדי למצוא את הנכס המושלם.",
    "האם אתם עובדים עם משקיעים?": "כן, אנו מספקים שירותים ייעודיים למשקיעים, כולל ניתוח שוק והמלצות השקעה.",
    "איך אתם מטפלים בבעיות משפטיות?": "אנו עובדים עם עורכי דין מומחים כדי לפתור כל בעיה משפטית בצורה מהירה ויעילה.",
    "האם אתם מספקים שירותי הערכת שווי נכס?": "כן, אנו מספקים שירותי הערכת שווי נכס על ידי מומחים מוסמכים.",
    "איך אתם מתמודדים עם שוק תחרותי?": "אנו משתמשים בטכנולוגיות מתקדמות ואסטרטגיות שיווקיות כדי להבטיח את התוצאות הטובות ביותר.",
    "האם אתם מספקים שירותי ניהול נכסים?": "כן, אנו מספקים שירותי ניהול נכסים, כולל גביית שכר דירה ותחזוקה שוטפת.",
    "איך אתם מתאימים משכנתא ללקוח?": "אנו בודקים את הפרופיל הפיננסי שלך ומתאימים את תנאי המשכנתא בהתאם לצרכים שלך.",
    "האם אתם מספקים שירותי ייעוץ פיננסי?": "כן, אנו מספקים שירותי ייעוץ פיננסי כדי לעזור לך לקבל החלטות מושכלות.",
  };

  // Open chatbot and display initial message
  const openChatbot = () => {
    setIsOpen(true);
    setMessages([{ text: "שלום! איך נוכל לעזור לך היום?", sender: "bot" }]);
  };

  // Handle FAQ question click
  const handleQuestionClick = (question) => {
    setMessages((prev) => [...prev, { text: question, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: faqAnswers[question], sender: "bot" },
        { text: "יש לך שאלות נוספות?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={openChatbot}
        onMouseEnter={() => setShowHoverText(true)}
        onMouseLeave={() => setShowHoverText(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Replace the icon with the video */}
        <video autoPlay loop muted playsInline className="chatbot-icon">
          <source src="/Romano-Exp/videos/virtual-assistant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Hover Text */}
        {showHoverText && (
          <motion.div
            className="hover-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            נסו את הצ'אט בוט שלנו
          </motion.div>
        )}
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          className="chatbot-window glassmorphism"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="chatbot-header">
            <h3>שיחת ייעוץ</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`message ${msg.sender}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className="chatbot-faq">
            {faqQuestions.map((question, index) => (
              <div
                key={index}
                className="faq-question"
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;