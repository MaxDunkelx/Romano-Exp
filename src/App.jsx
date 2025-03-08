import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import About from "./pages/About";
import Join from "./pages/Join";
import ContactUs from "./pages/ContactUs"; // Import the ContactUs page
import OurTeam from "./pages/OurTeam"; // Import the OurTeam page

import "./App.css";

const App = () => {
  return (
    <Router>
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