import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const Navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const handleNavigation = (path) => {
    Navigate(path);
    setIsActive(false);
  };

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="navigation">
        <h3 className="title">UKRAINE</h3>
        <ul className={`nav-list ${isActive ? "Active" : ""}`}>
          <li className="link" onClick={() => handleNavigation("/Home")}>
            home
          </li>
          <li className="link" onClick={() => handleNavigation("/About")}>
            about
          </li>
          <li className="link" onClick={() => handleNavigation("/Places")}>
            places
          </li>
          <li className="link" onClick={() => handleNavigation("/People")}>
            people
          </li>
        </ul>
        <Hamburger onClick={toggleHamburger} />
      </div>
    </motion.div>
  );
}
