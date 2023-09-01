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
  );
}
