import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="navigation">
      <h3 className="title">UKRAINE</h3>
      <ul className={`nav-list ${isActive ? "Active" : ""}`}>
        <li className="link" onClick={() => handleNavigation("/Home")}>
          Home
        </li>
        <li className="link" onClick={() => handleNavigation("/About")}>
          About
        </li>
        <li className="link" onClick={() => handleNavigation("/Places")}>
          Places
        </li>
        <li className="link" onClick={() => handleNavigation("/People")}>
          People
        </li>
      </ul>
      <Hamburger onClick={toggleHamburger} />
    </div>
  );
}
