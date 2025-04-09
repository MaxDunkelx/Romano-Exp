import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // For mobile, we want the menu collapsed by default
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll event to collapse the menu (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        if (window.scrollY > 50) {
          setIsCollapsed(true);
        } else {
          setIsCollapsed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Toggle menu for mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle menu collapse/expand for desktop
  const toggleMenu = () => {
    if (isCollapsed) {
      // If collapsed, expand the menu and scroll to top
      setIsCollapsed(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    // Close mobile menu after navigation
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // If mobile, render mobile menu
  if (isMobile) {
    return (
      <div className="mobile-menu-bar">
        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <img 
            src="/Romano-Exp/images/menu-4.webp" 
            alt="Menu" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/menu-3.png";
            }}
          />
        </div>
        
        {/* Mobile Menu Buttons - Only shown when menu is open */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-buttons">
            <button onClick={() => handleNavigation("/buy")}>נכסים למכירה</button>
            <button onClick={() => handleNavigation("/sell")}>נכסים להשכרה</button>
            <button onClick={() => handleNavigation("/our-team")}>הצוות שלנו</button>
            <button onClick={() => handleNavigation("/join")}>הצטרפות לחברה</button>
            <button onClick={() => handleNavigation("/contact")}>יצירת קשר</button>
            <button onClick={() => handleNavigation("/about")}>אודות</button>
          </div>
        )}
      </div>
    );
  }

  // Desktop menu (unchanged except for button names)
  return (
    <div className={`menu-bar ${isCollapsed ? "collapsed" : ""}`}>
      {isCollapsed ? (
        // Collapsed menu icon
        <div className="collapsed-menu-icon" onClick={toggleMenu}>
          <img 
            src="/Romano-Exp/images/menu-4.webp" 
            alt="Menu" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/menu-3.png";
            }}
          />
        </div>
      ) : (
        // Expanded menu - just buttons, no logo
        <div className="menu-container">
          {/* Menu Buttons */}
          <div className="menu-buttons">
            <button onClick={() => handleNavigation("/buy")}>נכסים למכירה</button>
            <button onClick={() => handleNavigation("/sell")}>נכסים להשכרה</button>
            <button onClick={() => handleNavigation("/our-team")}>הצוות שלנו</button>
            <button onClick={() => handleNavigation("/join")}>הצטרפות לחברה</button>
            <button onClick={() => handleNavigation("/contact")}>יצירת קשר</button>
            <button onClick={() => handleNavigation("/about")}>אודות</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;