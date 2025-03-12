import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PropertySlider.css"; // Add styles for the slider

const PropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample property data
  const properties = [
    {
      id: 1,
      image: "/images/apt1.jpg",
      price: "2,500,000 ₪",
      area: "120 מ\"ר",
      rooms: 4,
      status: "Available",
      location: "תל אביב",
    },
    {
      id: 2,
      image: "/images/apt2.jpg",
      price: "3,000,000 ₪",
      area: "150 מ\"ר",
      rooms: 5,
      status: "Sold",
      location: "ירושלים",
    },
    {
      id: 3,
      image: "/images/apt3.jpg",
      price: "1,800,000 ₪",
      area: "90 מ\"ר",
      rooms: 3,
      status: "Available",
      location: "חיפה",
    },
    {
      id: 4,
      image: "/images/apt4.jpg",
      price: "2,200,000 ₪",
      area: "110 מ\"ר",
      rooms: 4,
      status: "Available",
      location: "באר שבע",
    },
    {
      id: 5,
      image: "/images/apt5.jpg",
      price: "2,700,000 ₪",
      area: "130 מ\"ר",
      rooms: 5,
      status: "Sold",
      location: "אשדוד",
    },
    {
      id: 6,
      image: "/images/apt6.jpg",
      price: "1,900,000 ₪",
      area: "95 מ\"ר",
      rooms: 3,
      status: "Available",
      location: "נתניה",
    },
    {
      id: 7,
      image: "/images/apt7.jpg",
      price: "2,000,000 ₪",
      area: "100 מ\"ר",
      rooms: 4,
      status: "Available",
      location: "ראשון לציון",
    },
  ];

  // Handle sliding left
  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  // Handle sliding right
  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < properties.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Handle property card click
  const handlePropertyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="property-slider-container gla">
      {/* Left Arrow */}
      <button className="slider-arrow left" onClick={slideLeft}>
        &lt;
      </button>

      {/* Property Cards */}
      <div className="property-cards">
        {properties.slice(currentIndex, currentIndex + 3).map((property) => (
          <motion.div
            key={property.id}
            className="property-card"
            onClick={handlePropertyClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={property.image} alt={`Property ${property.id}`} />
            <div className="property-details">
              <p>מחיר: {property.price}</p>
              <p>שטח: {property.area}</p>
              <p>חדרים: {property.rooms}</p>
              <p>מיקום: {property.location}</p>
              <p>סטטוס: {property.status}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="slider-arrow right" onClick={slideRight}>
        &gt;
      </button>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="property-popup">
          <div className="popup-content">
            <h2>האם אתה מעוניין?</h2>
            <p>מצוין! השאר את פרטיך, והסוכנים שלנו יחזרו אליך בהקדם!</p>
            <button onClick={() => setIsModalOpen(false)}>סגור</button>
            <LeaveDetailsModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={(formData) => {
                console.log("Form Data:", formData);
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertySlider;