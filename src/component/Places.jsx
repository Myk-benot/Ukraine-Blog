import React from "react";
import "./Places.css";
import placesArray from "./Place-info";

const City = (props) => {
  const { name, description, image, link } = props.city;

  return (
    <div className="places-div">
      <img src={image} className="places-img" alt={name} />
      <div className="desc-div">
        <h3 className="places-title">{name}</h3>
        <p className="places-text">{description}</p>
        <a
          href={link}
          className="places-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want more information?
        </a>
      </div>
    </div>
  );
};

export default function Places() {
  return (
    <div>
      {placesArray.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </div>
  );
}
