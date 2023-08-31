import React from "react";
import "./Hamburger.css";

export default function Hamburger({ onClick }) {
  return (
    <div className="burger-div" onClick={onClick}>
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </div>
  );
}
