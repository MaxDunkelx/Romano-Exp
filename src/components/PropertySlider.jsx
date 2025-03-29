import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PropertySlider.css";

// Hard-coded property data
const PROPERTY_DATA = [
  {
    id: "project-adam-yafo",
    folder: "project-adam-yafo",
    description: "דירה מרווחת עם פוטנציאל מדהים – מטר מהים, ברחוב הכי יפה ביפו! ✨\nדמיינו את עצמכם גרים בלב הפנינה של יפו – גבעת העלייה, במרחק נגיעה מהחוף ומהקסם היפואי.\n\nמה מציעה הדירה?\n🏡 109 מ\"ר של מרחב ועיצוב גמיש – ניתן לחלק בקלות ל-4 חדרים!\n🌊 מיקום מנצח – צעדים מהים ומהטיילת, קרוב לשוק הפשפשים\n🛋️ סלון מרווח ומואר עם מרפסת קסומה לאווירה מושלמת\n🚪 ממ\"ד בטיחותי + בוידעם ענק לאחסון נוח\n❄ מיזוג אוויר איכותי – נוחות מקסימלית בכל עונות השנה\n🏗️ בניין נמוך ואינטימי – רק 2 קומות!\n📍 חוויית מגורים ייחודית באחד הרחובות היפים והציוריים ביפו\n\n🔥 דירה כזו לא נשארת הרבה זמן בשוק – הזדמנות לגור בלב האותנטיות של יפו!\n\n📞 לתיאום ביקור ולמפרט מלא:\nמייקל רומאנה 054-7272-534\nגלי ג׳ינוריה 052-522-4906\n\n🚀 אל תחכו דירה מרשימה במחיר אטרקטיבי – צרו קשר עכשיו!",
    location: "יפו - גבעת העלייה",
    area: "109 מ\"ר",
    rooms: "4",
    images: Array.from({ length: 8 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-adam-yafo/photo-1.jpg"
  },
  {
    id: "project-dennis-tel-aviv",
    folder: "project-dennis-tel-aviv",
    description: "דירת 4 חדרים בלב תל אביב – שילוב מושלם של נוחות, סגנון ומיקום מנצח! ✨\nבואו לחיות בלב הפועם של תל אביב, ברחוב גורדון, דירה רחבת ידיים, מוארת ומפנקת, שנמצאת דקת הליכה מבתי קפה, מסעדות, חופי הים, חדרי כושר, סופרמרקטים ועוד. אם אתם מחפשים אורח חיים אורבני איכותי – זה המקום בשבילכם!\n\nמה מציעה הדירה?\n🏡 94 מ\"ר של חלוקה חכמה ומרווחת\n🌞 מרפסת שמש נעימה – להירגע ולהתאוורר בעיר התוססת\n🚗 2 חניות פרטיות – נדיר באזור!\n🏗️ בניין מודרני עם מעלית וגישה מלאה לנכים\n🔒 דלתות רב-בריח – ביטחון ונוחות מקסימלית\n🛋️ סלון רחב ידיים עם אווירה נעימה\n🛏️ חדרי שינה מרווחים + ממ\"ד לשקט וביטחון\n🔆 מיזוג אוויר איכותי + דוד שמש לחיסכון באנרגיה\n📍 לוקיישן מושלם – הכל נמצא במרחק הליכה!\n\n🔥 דירה כזו במיקום כזה לא נשארת הרבה זמן בשוק – אל תפספסו!\n\n📞 לתיאום ביקור ולמפרט מלא:\nמייקל רומאנה 054-7272-534\nגלי ג׳ינוריה 052-522-4906\n\n🚀 התקשרו עכשיו והבטיחו לעצמכם איכות חיים במרכז העניינים!",
    location: "תל אביב - רחוב גורדון",
    area: "94 מ\"ר",
    rooms: "4",
    images: Array.from({ length: 12 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-dennis-tel-aviv/photo-1.jpg"
  },
  {
    id: "project-erez-yafo",
    folder: "project-erez-yafo",
    description: "דירת יוקרה במתחם אנדרומדה – רמה של חו״ל בלב יפו העתיקה ✨\nבין נוף ים עוצר נשימה לאדריכלות היסטורית, מחכה לכם אחת מהדירות המבוקשות ביותר במתחם הסגור והמפואר אנדרומדה היל.\n 🏡 140 מ\"ר בנוי בתכנון אדריכלי + מרפסת מרהיבה של 40 מ\"ר\n 🛏️ 2 סוויטות מפנקות + סלון עצום עם אווירה של מלון בוטיק\n 💎 בריכה, ג'קוזי, סאונה, חדר כושר ומועדון דיירים – חוויית נופש 365 ימים בשנה\n 🔐 אבטחה 24/7, שקט, פרטיות, והכל דקה מהים, שוק הפשפשים והטיילת\n💬 אם אתם מחפשים נדל\"ן באמת יוצא דופן – זו הדירה.\n לא עוד נדל\"ן, אלא חוויה. השקפה. איכות חיים.\n📞 לתיאום ביקור ולמפרט מלא:\n מייקל רומאנה – 054-7272-534\n גלי ג׳ינוריה – 052-5224906\n🚀 אל תחכו שהקסם הזה יברח – צרו קשר עכשיו!",
    location: "יפו העתיקה - מתחם אנדרומדה",
    area: "140 מ\"ר + 40 מ\"ר מרפסת",
    rooms: "3",
    images: Array.from({ length: 12 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-erez-yafo/photo-1.jpg"
  },
  {
    id: "project-gihan-yafo",
    folder: "project-gihan-yafo",
    description: "דירה נדירה בשכונת שיכוני חיסכון, תל אביב-יפו! ✨\nדירת 2 חדרים עם ממ׳׳ד ואפשרות לחלוקה חכמה ל-3 חדרים, מרפסת ענקית, הכוללת חניה מקורה ומחסן בטאבו – מושלם למשפחות קטנות, זוגות או משקיעים חכמים.\n\nמה מציעה הדירה?\n✨ מתחם מגורים מסודר ומתוחזק היטב – כמו חדש!\n🏠  70 מ\"ר בנוי + 20 מ\"ר מרפסת מפנקת המקיפה את כל הדירה\n📐 תכנון גמיש עם אופציה לחלוקה ל-3 חדרים\n🚗 חניה פרטית מקורה בטאבו + מחסן צמוד\n💨 מיזוג מרכזי, מטבח עבודת עץ מנגר פרטי מרשימה וייחודית, בניין מטופח ושקט\n📍 מיקום מרכזי ונגיש – קרוב לגני ילדים, בתי ספר, מרכזי קניות ותחבורה ציבורית, כולל הרכבת הקלה\n💼 השקעה חכמה עם תשואה פוטנציאלית של 7,000 ₪ בחודש!\n\n🔥 דירה כזו לא רואים כל יום – תנו לעצמכם הזדמנות לחיות או להשקיע בנכס שמביא ערך אמיתי!\n\n📞 לתיאום ביקור ולמפרט מלא:\nמייקל רומאנה 054-7272-534\nגלי ג׳ינוריה 052-522-4906\n\n🚀 הזדמנויות כאלה נחטפות מהר – צרו קשר עוד היום!",
    location: "תל אביב-יפו - שיכוני חיסכון",
    area: "70 מ\"ר + 20 מ\"ר מרפסת",
    rooms: "2-3",
    images: Array.from({ length: 8 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-gihan-yafo/photo-1.jpg"
  },
  {
    id: "project-gil-yafo",
    folder: "project-gil-yafo",
    description: "דירת 3 חדרים להשקעה או למגורים ברחוב יפת – ביפו שילוב נדיר של שימור ואיכות ✨\nבמיקום שקט ומבוקש ברחוב יפת, תל אביב-יפו, בתוך בניין לשימור עם אופי ייחודי בעיצוב אדריכלי, מחכה לכם דירה מצוינת להשקעה או מגורים – עם דיירים קיימים ותשואה מצוינת!\n\nמה מציעה הדירה?\n🏡 65 מ\"ר בנוי + מרפסת צרה וארוכה עם נוף פתוח\n🏗️ בניין בן 13 שנה – לשימור, לובי מעוצב ושמור\n🔝 קומה 3 עם תחושת גובה של קומה 5-6!\n🔇 מיקום עורפי – שקט, ללא רעש מהרחוב\n🏢 בניין משפחתי – רוב הדירות בבעלות בני המשפחה, דירה פרטית בטאבו!\n🔆 תחזוקה מעולה – בניין עם קבלן ואדריכל שמלווים את הנכס\n\n🔥 נכס יציב עם פוטנציאל השבחה ותשואה גבוהה – השקעה בטוחה בלב יפו!\n\n📞 לתיאום ביקור ולמפרט מלא:\nמייקל רומאנה 054-7272-534\nגלי ג׳ינוריה 052-522-4906 \n\n🚀 הזדמנויות כאלה לא מחכות – צרו קשר עכשיו!",
    location: "יפו - רחוב יפת",
    area: "65 מ\"ר + מרפסת",
    rooms: "3",
    images: Array.from({ length: 12 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-gil-yafo/photo-1.jpg"
  },
  {
    id: "project-roman-yafo",
    folder: "project-roman-yafo",
    description: "דירת יוקרה במתחם אנדרומדה – רמה של חו״ל בלב יפו העתיקה ✨\nבין נוף ים עוצר נשימה לאדריכלות היסטורית, מחכה לכם אחת מהדירות המבוקשות ביותר במתחם הסגור והמפואר אנדרומדה היל.\n 🏡 140 מ\"ר בנוי בתכנון אדריכלי + מרפסת מרהיבה של 40 מ\"ר\n 🛏️ 2 סוויטות מפנקות + סלון עצום עם אווירה של מלון בוטיק\n 💎 בריכה, ג'קוזי, סאונה, חדר כושר ומועדון דיירים – חוויית נופש 365 ימים בשנה\n 🔐 אבטחה 24/7, שקט, פרטיות, והכל דקה מהים, שוק הפשפשים והטיילת\n💬 אם אתם מחפשים נדל\"ן באמת יוצא דופן – זו הדירה.\n לא עוד נדל\"ן, אלא חוויה. השקפה. איכות חיים.\n📞 לתיאום ביקור ולמפרט מלא:\n מייקל רומאנה – 054-7272-534\n גלי ג׳ינוריה – 052-5224906\n🚀 אל תחכו שהקסם הזה יברח – צרו קשר עכשיו!",
    location: "יפו העתיקה - מתחם אנדרומדה",
    area: "140 מ\"ר + 40 מ\"ר מרפסת",
    rooms: "3",
    images: Array.from({ length: 8 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-roman-yafo/photo-1.jpg"
  },
  {
    id: "project-tali-yafo",
    folder: "project-tali-yafo",
    description: "דופלקס מרשים בשכונת דקר, תל אביב-יפו – שילוב נדיר של היסטוריה, יוקרה ונוחות! ✨\nמחפשים דירה ייחודית? מצאנו לכם אחת כזו!\nדופלקס 5 חדרים עם מרפסת גג ענקית, תקרות גבוהות ועיצוב יפואי אותנטי, מושלם למשפחות או משקיעים חכמים.\n\nמה מציעה הדירה?\n✨ חדר הורים מפנק עם מרחב ונוחות מרבית\n🏡 211 מ\"ר בנוי + 100 מ\"ר מרפסת גג\n🌿 חוויית מגורים פתוחה ונעימה עם כיווני אוויר מושלמים\n🚗 נגישות גבוהה – קרוב לתחבורה ציבורית ולרכבת הקלה\n💼 השקעה משתלמת – תשואה פוטנציאלית של 14,000 ₪ בחודש\n🏗️ בניין לשימור עם שיק יפואי מרהיב\n\n💡 הזדמנות נדירה לדירה עם אופי ונוכחות שלא מוצאים בכל יום!\n\n📞 לתיאום ביקור ולמפרט מלא:\nמייקל רומאנה 054-7272-534\n\nאל תחמיצו הזדמנות לגור בנכס נדיר שמחבר בין עבר להווה, בין יפו העתיקה לעיר התוססת של היום! 🏡✨",
    location: "תל אביב-יפו - שכונת דקר",
    area: "211 מ\"ר + 100 מ\"ר מרפסת גג",
    rooms: "5",
    images: Array.from({ length: 18 }, (_, i) => `photo-${i + 1}.jpg`),
    thumbnailImage: "/Romano-Exp/project-tali-yafo/photo-1.jpg"
  }
];

const PropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Handle sliding left
  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  // Handle sliding right
  const slideRight = () => {
    const maxStartIndex = Math.max(0, PROPERTY_DATA.length - 4);
    setCurrentIndex((prevIndex) => Math.min(maxStartIndex, prevIndex + 1));
  };

  // Handle property card click
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setActiveImageIndex(0);
    setIsModalOpen(true);
    // Add a class to the body to prevent scrolling when modal is open
    document.body.classList.add('modal-open');
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Remove the class to re-enable scrolling
    document.body.classList.remove('modal-open');
    // Use a timeout to ensure smooth transition before removing the property data
    setTimeout(() => {
      setSelectedProperty(null);
    }, 300);
  };

  // Handle image navigation
  const handleThumbnailClick = (index, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setActiveImageIndex(index);
  };

  // Navigate through images with arrow keys
  const handleKeyDown = (e) => {
    if (!isModalOpen || !selectedProperty) return;
    
    if (e.key === 'ArrowLeft') {
      setActiveImageIndex((prevIndex) => 
        prevIndex < selectedProperty.images.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowRight') {
      setActiveImageIndex((prevIndex) => 
        prevIndex > 0 ? prevIndex - 1 : 0
      );
    } else if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  // Add and remove event listener for keyboard navigation
  React.useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, activeImageIndex]);

  // Handle image error by using fallback
  const handleImageError = (e) => {
    e.target.src = "/Romano-Exp/images/brick.jpg"; // Fallback image path
    e.target.onerror = null; // Prevent infinite loops if fallback also fails
  };

  // Format project name for display
  const formatProjectName = (folderName) => {
    return folderName
      .replace('project-', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Check if we should show the right arrow
  const canSlideRight = PROPERTY_DATA.length > 4 && currentIndex < PROPERTY_DATA.length - 4;
  
  // Check if we should show the left arrow
  const canSlideLeft = currentIndex > 0;

  // Handle next image button
  const handleNextImage = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (selectedProperty) {
      setActiveImageIndex((prevIndex) => 
        prevIndex < selectedProperty.images.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  // Handle previous image button
  const handlePrevImage = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (selectedProperty) {
      setActiveImageIndex((prevIndex) => 
        prevIndex > 0 ? prevIndex - 1 : selectedProperty.images.length - 1
      );
    }
  };

  return (
    <div className="property-slider-container bg-transparent">
      {/* Left Arrow */}
      {canSlideLeft && (
        <button 
          className="slider-arrow left" 
          onClick={slideLeft}
          aria-label="Previous properties"
        >
          &lt;
        </button>
      )}

      {/* Property Cards */}
      <div className="property-cards">
        {PROPERTY_DATA.slice(currentIndex, currentIndex + 4).map((property) => (
          <motion.div
            key={property.id}
            className="property-card"
            onClick={() => handlePropertyClick(property)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={property.thumbnailImage || "/Romano-Exp/images/brick.jpg"} 
              alt={formatProjectName(property.folder)}
              onError={handleImageError}
            />
            <div className="property-details">
              <p>מיקום: {property.location}</p>
              <p>שטח: {property.area}</p>
              <p>חדרים: {property.rooms}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Arrow */}
      {canSlideRight && (
        <button 
          className="slider-arrow right" 
          onClick={slideRight}
          aria-label="Next properties"
        >
          &gt;
        </button>
      )}

      {/* Property Detail Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal} aria-label="Close">×</button>
            
            {selectedProperty && (
              <>
                <h2>{formatProjectName(selectedProperty.folder)}</h2>
                
                <div className="image-gallery">
                  {selectedProperty.images.length > 0 && (
                    <div className="gallery-main-image-container">
                      <button 
                        className="gallery-nav-button prev" 
                        onClick={handlePrevImage}
                        aria-label="Previous image"
                      >
                        &lt;
                      </button>
                      
                      <img 
                        className="gallery-main-image" 
                        src={`/Romano-Exp/${selectedProperty.folder}/${selectedProperty.images[activeImageIndex]}`}
                        alt={`${formatProjectName(selectedProperty.folder)} - image ${activeImageIndex + 1}`}
                        onError={handleImageError}
                      />
                      
                      <button 
                        className="gallery-nav-button next" 
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        &gt;
                      </button>
                    </div>
                  )}
                  
                  <div className="gallery-thumbnails">
                    {selectedProperty.images.map((image, index) => (
                      <img 
                        key={index}
                        className={`gallery-thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                        src={`/Romano-Exp/${selectedProperty.folder}/${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={(e) => handleThumbnailClick(index, e)}
                        onError={handleImageError}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="property-description">
                  <pre>{selectedProperty.description}</pre>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertySlider;