import React from "react";
import { motion } from "framer-motion";
import "./People.css";
import peopleArray from "./People-info.jsx";

const Person = (props) => {
  const { icon, name, prof, desc } = props.person;

  return (
    <div className="person-card">
      <div className="person-icon">{icon}</div>
      <div className="person-info">
        <h3 className="person-name">{name}</h3>
        <p className="person-prof">{prof}</p>
        <p className="person-desc">{desc}</p>
      </div>
    </div>
  );
};

export default function People() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="people-container">
        {peopleArray.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </motion.div>
  );
}
