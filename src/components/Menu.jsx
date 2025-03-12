import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when expanding
    }
  };

  return (
    <div className={`menu-bar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Menu Buttons */}
      <div className={`menu-buttons ${isCollapsed ? "hidden" : ""}`}>
        <button onClick={() => navigate("/buy")}>קניית נכס</button>
        <button onClick={() => navigate("/sell")}>מכירת נכס</button>
        <button onClick={() => navigate("/our-team")}> הכרת הצוות </button>
        <button onClick={() => navigate("/join")}>הצטרפות לחברה</button>
        <button onClick={() => navigate("/contact")}>צור קשר</button>
        <button onClick={() => navigate("/about")}>קצת עלינו</button>
      </div>

      {/* Logo Button */}
      <button className="logo-button" onClick={toggleMenu}>
      <img src="Romano-Exp/icons/BetterLogo.jpg" alt="EXP Realty Logo" />
      </button>

      {/* Collapsed Menu Icon */}
      {isCollapsed && (
        <div className="collapsed-menu-icon" onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <span className="menu-text">תפריט</span>
        </div>
      )}
    </div>
  );
};

export default Menu;