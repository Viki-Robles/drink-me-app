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
            <GrUpdate />
          </button>
          <button onClick={closeRandom}>
            <GrClose />
          </button>
        </div>

        {listRandom.map((drink) => (
          <Link to={`/drink/${drink.strDrink}`}>
            <div key={drink.idDrink}>
              <p className="random-container-title">Checkout this one!</p>
              <div className="random-container">
                <img src={drink.strDrinkThumb} alt="drink"/>
                <div className="random-overlay-title">
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
