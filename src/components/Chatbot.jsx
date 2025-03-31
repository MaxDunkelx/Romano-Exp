import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showHoverText, setShowHoverText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const messageEndRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Set video loaded state
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

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
    if (messages.length === 0) {
      setMessages([{ text: "שלום! איך נוכל לעזור לך היום?", sender: "bot" }]);
    }
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
    }, 800); // Slightly faster response on mobile
  };

  // Filter FAQ questions for mobile to show fewer options
  const displayFAQs = isMobile ? faqQuestions.slice(0, 6) : faqQuestions.slice(0, 10);

  // Alternative image if video fails to load
  const fallbackImage = "/Romano-Exp/icons/chatbot-icon.jpg"; // Ensure this exists

  return (
    <div className={`chatbot-container ${isMobile ? 'mobile' : ''}`}>
      {/* Chatbot Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={openChatbot}
        onMouseEnter={() => !isMobile && setShowHoverText(true)}
        onMouseLeave={() => setShowHoverText(false)}
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Video with fallback */}
        {!videoLoaded && <div className="chatbot-loading-placeholder"></div>}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className={`chatbot-icon ${videoLoaded ? 'loaded' : ''}`}
          onLoadedData={handleVideoLoaded}
          onError={() => {
            if (videoRef.current) {
              videoRef.current.style.display = 'none';
            }
          }}
        >
          <source src="/Romano-Exp/videos/virtual-assistant.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image if video fails */}
        {!videoLoaded && (
          <img 
            src={fallbackImage} 
            alt="Assistant" 
            className="chatbot-fallback-icon"
            onLoad={() => setVideoLoaded(true)}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}

        {/* Hover Text - only show on non-mobile */}
        {showHoverText && !isMobile && (
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`chatbot-window ${isMobile ? 'mobile' : ''}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
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
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messageEndRef} /> {/* Anchor for scrolling to bottom */}
            </div>
            <div className="chatbot-faq">
              {displayFAQs.map((question, index) => (
                <div
                  key={index}
                  className="faq-question"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </div>
              ))}
              {isMobile && faqQuestions.length > displayFAQs.length && (
                <div 
                  className="faq-question more-questions"
                  onClick={() => handleQuestionClick("מה השירותים שאתם מציעים?")}
                >
                  עוד שאלות...
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;