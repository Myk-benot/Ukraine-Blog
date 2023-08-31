import React from "react";
import "./Home.css";
import Ukraine1 from "../images/Ukraine1.jpeg";
import Ukraine2 from "../images/Ukraine2.jpeg";
import Ukraine3 from "../images/Ukraine3.jpg";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <h1 className="home-title">
          Welcome to <span className="title-accent">Ukraine</span>
        </h1>
        <p className="home-intro">
          Ukraine, a diverse Eastern European nation, boasts rich history,
          vibrant culture, and picturesque landscapes, bridging tradition and
          modernity.
        </p>
        <div className="home-images">
          <img src={Ukraine1} className="home-img" alt="Ukraine"></img>
          <img
            src={Ukraine2}
            className="home-img"
            alt="Motherland Statue Ukraine"
          ></img>
        </div>
        <p className="home-intro">
          The Motherland Monument in Ukraine, a towering symbol of strength and
          unity, stands as a tribute to the nation's resilience and valor. This
          monumental statue inspires with its commanding presence and honors the
          sacrifices of the past.
        </p>
        <div className="iconic-container">
          <img src={Ukraine3} className="iconic-img"></img>
          <p className="home-intro">
            Ukraine, an icon in its own right, boasts an array of iconic facets.
            Its sweeping landscapes, from the Carpathian Mountains to the Black
            Sea, hold an iconic beauty. The nation's historical narrative, from
            Kyiv's ancient origins to the resilience of its Cossack past, paints
            an iconic portrait. The iconic Chernobyl Exclusion Zone encapsulates
            both a cautionary tale and a symbol of human perseverance. Ukrainian
            literature, art, and cuisine resonate as iconic cultural markers.
            Through its triumphs and challenges, Ukraine embodies an enduring
            iconic spirit that captivates the world.
          </p>
        </div>
      </div>
    </>
  );
}
