import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll event to collapse the menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu collapse/expand
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
  };

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
              e.target.src = "/fallback-menu.png";
            }}
          />
        </div>
      ) : (
        // Expanded menu - just buttons, no logo
        <div className="menu-container">
          {/* Menu Buttons */}
          <div className="menu-buttons">
            <button onClick={() => handleNavigation("/buy")}>קניית נכס</button>
            <button onClick={() => handleNavigation("/sell")}>מכירת נכס</button>
            <button onClick={() => handleNavigation("/our-team")}>הכרת הצוות</button>
            <button onClick={() => handleNavigation("/join")}>הצטרפות לחברה</button>
            <button onClick={() => handleNavigation("/contact")}>צור קשר</button>
            <button onClick={() => handleNavigation("/about")}>קצת עלינו</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;