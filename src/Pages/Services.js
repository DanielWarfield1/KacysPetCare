import "../styles.css";
import DogTitle from "../Components/DogTitle.js";
import MadeByDaniel from "../Components/MadeByDaniel.js";
import Prints from "../Components/Prints.js";
import Sketch from "react-p5";
import React from "react";

export default function Services() {
  return (
    <div>
      <DogTitle />
      <Prints />
      <div style={{ width: "1000px", height: "200px" }}></div>
      <MadeByDaniel />
    </div>
  );
}
