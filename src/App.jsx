import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import About from "./pages/About";
import Join from "./pages/Join";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <Router basename="/Romano-Exp/"> {/* 👈 Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
    </Router>
  );
};

export default App;
