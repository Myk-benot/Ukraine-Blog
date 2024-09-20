import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsActive(false);
  };

  return (
    <div className="navigation">
      {!isActive && <h3 className="title">UKRAINE</h3>}{" "}
      <button
        className="hamburger-button"
        aria-label="Toggle navigation menu"
        aria-expanded={isActive}
        onClick={toggleHamburger}
      >
        {!isActive && <Hamburger onClick={toggleHamburger} />}
      </button>
      <nav className={`nav-container ${isActive ? "active" : ""}`}>
        <ul className="nav-list">
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
          <li className="link" onClick={() => handleNavigation("/Dashboard")}>
            Dashboard
          </li>
        </ul>
      </nav>
    </div>
  );
}
