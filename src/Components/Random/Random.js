import React from "react";
import { Link } from "react-router-dom";
import "./Random.css";
import { GrUpdate, GrClose } from "react-icons/gr";

export default function Random({ listRandom, closeRandom, tryAgain }) {
  return (
    <div className="Random">
      <div className="Random-box">
        <div className="Random-buttons">
          <button onClick={tryAgain}>
            <GrUpdate className="Random-icon"/>
          </button>
          <button className="Random-icon" onClick={closeRandom}>
            <GrClose />
          </button>
        </div>

        {listRandom.map((drink) => (
          <Link key={drink.idDrink} to={`/drink/${drink.strDrink}`}>
            <div>
              <p className="Random-title">Checkout this one!</p>
              <div className="Random-container">
                <img src={drink.strDrinkThumb} alt="drink"/>
                <div className="Random-overlay-title">
                  <h3>{drink.strDrink}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
