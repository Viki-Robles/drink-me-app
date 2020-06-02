import React from "react";
import "./Results.css";
import Drink from "../Drink/Drink.js";

export default function Results() {
  return (
    <div className="Results">
      <div className="results-container">
        <Drink />
        <Drink />
        <Drink />
        <Drink />
        <Drink />
        <Drink />
      </div>
    </div>
  );
}
