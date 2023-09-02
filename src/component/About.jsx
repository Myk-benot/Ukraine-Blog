import "./About.css";
import Wolves from "../images/Wolves.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="about-div">
          <img src={Wolves} className="about-img"></img>
          <p className="about-text">
            "As a couple, we stand strong against the world's trials, bound by
            love and resilience. In the same way, Ukraine's indomitable spirit
            shines as it confronts global challenges. Together, love and unity
            pave the way for a brighter tomorrow."
          </p>
          <p className="about-text">
            Amidst a vast world, quiet determination defines a loyal American.
            With unwavering dedication and a strong work ethic, persistence
            becomes a testament to the values held dear. Just as a nation's
            greatness emerges from steadfast commitment, so does an individual's
            strength shape the journey ahead.
          </p>
          <p className="about-text">
            "Within our global tapestry emerges a soul, Ukrainian and wondrous
            to behold. A blend of beauty, care, and strength untold, she mirrors
            a nation's resilience, a story of old. Who is she, this embodiment
            of grace, a living riddle in this vast embrace?"
          </p>
          <p className="about-text">
            "As our paths intertwine within the grand mosaic of life, your
            Ukrainian essence and my American spirit create a beautiful harmony.
            Let's cherish the uniqueness we bring, finding strength in our bond.
            In a world that often seems vast, we discover our own universe in
            one another, proving that love knows no boundaries."
          </p>
        </div>
      </motion.div>
    </>
  );
}
