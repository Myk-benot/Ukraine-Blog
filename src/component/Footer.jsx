import React from "react";
import "./Footer.css";
import Icon from "../images/ukraine_640.png";

export default function Footer() {
  return (
    <div className="footer-div">
      <img src={Icon} className="footer-img"></img>
      <h3> Built By: Myk Benot 2023</h3>
      <img src={Icon} className="footer-img"></img>
    </div>
  );
}
