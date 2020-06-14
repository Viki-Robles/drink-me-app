import React from "react";
import "./Drink.css";

export default function Drink({ id, name, image }) {
  return (
    <div className="Drink">
          <div className="drink-container">
            <img src={image} alt={name} />
            <div className="overlay-title">
              <h3>{name}</h3>
            </div>
          </div>
    </div>
  );
}
