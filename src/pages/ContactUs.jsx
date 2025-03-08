import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS
import "./ContactUs.css"; // Import the CSS file

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // Track success state

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    if (!formData.name || !formData.phone) {
      setSubmitMessage("שם וטלפון הם שדות חובה");
      setIsSubmitting(false);
      setIsSuccess(false); // Not a success
      return;
    }

    console.log("Form Data:", formData); // Debugging: Log form data

    // Send email using EmailJS
    emailjs
      .send(
        "service_hbyu7se", // Replace with your EmailJS Service ID
        "template_zmsnyd2", // Replace with your EmailJS Template ID
        formData, // Ensure this contains all fields
        "G_gByJZRbgvfN6Cej" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSubmitMessage("הפנייה נשלחה בהצלחה!");
          setIsSuccess(true); // Success
          setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSubmitMessage("שגיאה בשליחת הפנייה. נסה שוב מאוחר יותר.");
          setIsSuccess(false); // Not a success
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-us-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/src/assets/NewBackGround.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <motion.div
        className="contact-us-content glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button className="back-to-menu" onClick={() => navigate("/")}>
          חזור לדף הבית
        </button>

        <h1>צרו איתנו קשר – אנחנו כאן בשבילכם!</h1>
        <p>
          אם יש לכם שאלה, מעוניינים להתחיל תהליך רכישה או מכירה, או פשוט רוצים
          לשמוע עוד על השירותים שלנו, אנחנו זמינים עבורכם. פנו אלינו, ואנחנו
          נעזור לכם בכל שלב בדרך להגשמת החלום הנדל"ני שלכם.
        </p>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>פרטי יצירת קשר</h2>
          <p>טלפון ראשי: 052-7272534</p>
          <p>דוא"ל: exp.romano1@gmail.com</p>
          <p>
            וואטסאפ:{" "}
            <a
              href="https://wa.me/972527272534"
              target="_blank"
              rel="noopener noreferrer"
            >
              לחצו כאן לשליחת הודעה מהירה
            </a>
          </p>
          <p>שעות פעילות: ימים א'-ה': 10:00 - 20:00</p>
        </div>

        {/* Team Details */}
        <div className="team-details">
          <h2>הצוות שלנו – כאן לשירותכם</h2>
          <div className="team-member">
            <h3>מייקל רומאנה – מנהל המשרד</h3>
            <p>
              מומחה לניהול עסקאות נדל"ן מורכבות ושיווק דיגיטלי מתקדם. מייקל מביא
              גישה חדשנית ומחויבות לשירות מקצועי.
            </p>
            <p>טלפון ישיר: 052-7272534</p>
            <p>אימייל אישי: exp.romano1@gmail.com</p>
          </div>
          <div className="team-member">
            <h3>גלי ג'ינוריה – מנהלת קשרי לקוחות</h3>
            <p>
              כלכלנית עם ניסיון עשיר בשוק ההון והנדל"ן. גלי מתמחה בבניית מערכות
              יחסים עם לקוחות ובניהול תהליכים מותאמים אישית.
            </p>
            <p>טלפון ישיר: 052-5224906</p>
            <p>אימייל אישי: gali.dejinoria@expisrael.co.il</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>טופס פנייה מקוון</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">שם מלא (שדה חובה)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">טלפון (שדה חובה)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">דוא"ל</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">נושא הפנייה</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">הודעה</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={isSuccess ? "success" : ""} // Apply success class
            >
              {isSubmitting ? "שולח..." : "שלח פנייה"}
            </button>
            {submitMessage && (
              <p className={`submit-message ${isSuccess ? "success" : "error"}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        {/* Office Location */}
        <div className="office-location">
          <h2>מיקום המשרד שלנו</h2>
          <p>משרדנו ממוקם בראשון לציון, עם גישה נוחה מכל רחבי הארץ.</p>
          <p>כתובת: רחוב ילדי טהרן 10, ראשון לציון</p>
          <p>חניה: זמינה בקרבת המשרד.</p>
          <div className="map-container">
            {/* Embed Google Map Here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.715123715123!2d34.791234!3d32.085621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9f5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sYaldei%20Teheran%20St%2010%2C%20Rishon%20LeTsiyon!5e0!3m2!1sen!2sil!4v1631234567890!5m2!1sen!2sil"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;