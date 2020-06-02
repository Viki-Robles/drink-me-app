import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Drink.css";

export default function Drink() {
  return (
    <div className="Drink">
      <Router>
        <Link to="/detail/id">
          <div className="drink-container">
            <img
              src="https://www.thecocktaildb.com/images/media/drink/jfkemm1513703902.jpg"
              alt=""
            />
            <div className="overlay-title">
              <h3>HPegu Club</h3>
            </div>
          </div>
        </Link>
      </Router>
    </div>
  );
}
