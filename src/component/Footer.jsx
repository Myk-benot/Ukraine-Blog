import "./Footer.css";
import Icon from "../images/ukraine_640.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
        <h3> Myk.benot @2023</h3>
        <a
          href="https://www.linkedin.com/in/michael-reutzel-920758319/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} style={{ margin: "10px", color: "#ffd700" }} />
        </a>
        <a
          href="https://github.com/Myk-benot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} style={{ margin: "10px", color: "#ffd700" }} />
        </a>
        <img src={Icon} className="footer-img"></img>
      </div>
    </motion.div>
  );
}
