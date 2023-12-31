import React from "react";
import "./Footer.css";
import Icon from "../images/ukraine_640.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="footer-div">
        <img src={Icon} className="footer-img"></img>
        <h3> Built By: Myk Benot 2023</h3>
        <img src={Icon} className="footer-img"></img>
      </div>
    </motion.div>
  );
}
