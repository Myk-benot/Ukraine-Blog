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
    if (!isActive) {
      document.querySelector(".nav-list.Active").classList.remove("Active");
    }
  };

  const handleNavigation = (path) => {
    Navigate(path);
    setIsActive(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="navigation">
        {isActive ? (
          <div className="nav-list Active">
            <ul>
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
          </div>
        ) : (
          <>
            <h3 className="title">UKRAINE</h3>
            <ul className="nav-list">
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
          </>
        )}
      </div>
    </motion.div>
  );
}
