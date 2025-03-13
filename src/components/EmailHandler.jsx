import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailHandler = ({ formData }) => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (data) => {
    setIsSending(true);

    // Convert data to CSV format with Hebrew support
    const csvContent = `שם,טלפון,אימייל,שירות\n${data
      .map((entry) => `${entry.name},${entry.phone},${entry.email},${entry.service}`)
      .join("\n")}`;

    // EmailJS configuration
    const templateParams = {
      to_email: "giliuserdatarealtor@gmail.com", // Replace with admin email
      subject: "User Data CSV",
      message: `Here is the user data:\n\n${csvContent}`,
      attachment: csvContent, // Attach CSV file
    };

    try {
      await emailjs.send(
        "service_hbyu7se", // Replace with your EmailJS Service ID
        "template_zmsnyd2", // Replace with your EmailJS Template ID
        templateParams,
        "giliuserdatarealtor@gmail.com" // Replace with your EmailJS User ID
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSending(false);
    }
  };

  // Send email immediately when formData changes
  React.useEffect(() => {
    if (formData.length > 0) {
      sendEmail(formData);
    }
  }, [formData]);

  return null; // This component doesn't render anything
};

export default EmailHandler;