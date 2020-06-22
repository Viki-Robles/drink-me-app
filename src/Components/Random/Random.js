import React from "react";
import { Link } from "react-router-dom";

export default function Random({ listRandom }) {
  return (
    <div>
      {listRandom.map((drink) => (
        <div key={drink.idDrink}>
          <p className="random-container-p">Checkout this one!</p>
          <Link to={`/drink/${drink.strDrink}`}>
            <div className="random-container">
              <img src={drink.strDrinkThumb} />
              <div className="random-overlay-title">{drink.strDrink}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
