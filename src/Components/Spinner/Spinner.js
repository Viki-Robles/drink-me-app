import React from "react";
import "./Spinner.css";
import { MdBubbleChart } from "react-icons/md";

import SpinnerImg from "./Spinner.png";

export default function Spinner() {
  return (
    <div className="Spinner">
      <div className="Spinner-container">
        <MdBubbleChart className="Spinner-bubbles" />
        <img className="Spinner-icon" src={SpinnerImg} alt="spinner logo" />
        <MdBubbleChart className="Spinner-bubbles2" />
      </div>
      <h3>Loading your drinks!!</h3>
    </div>
  );
}
