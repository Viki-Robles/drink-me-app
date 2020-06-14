import React, { useState, useEffect } from "react";
import "./Detail.css";
import { FaCocktail, FaHeartbeat, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.js";

export default function Detail({ match }) {
  const [drink, setDrink] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setDrink(json.drinks[0]);
        setIsLoaded(true);
      });
  }, [match.params.id]);

  if (!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="Detail">
        <div className="Detail-back-button">
          <Link to="/">
            <FaArrowLeft className="icon-back" /> Keep searching
          </Link>
        </div>

        <div className="Detail-title-photo">
          <h1>{drink.strDrink}</h1>
          <div className="Detail-photo">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="Detail-alcohol">
              {drink.strAlcoholic === "Alcoholic" ? (
                <FaCocktail className="Detail-icon-cocktail" />
              ) : (
                <FaHeartbeat className="Detail-icon-heart" />
              )}

              {drink.strAlcoholic}
            </div>
            <div className="Detail-glass">Serve in {drink.strGlass}</div>
          </div>
        </div>

        <div className="Detail-instructions-ingredients">
          <div className="Detail-instructions">
            <div className="Detail-instructions-wrapper">
              <h3>Instructions:</h3>
              {drink.strInstructions.split(". ").map(
                (instruction, index) =>
                  instruction &&
                  instruction !== " " && (
                    <p key={instruction}>
                      <span className="Detail-order">{index + 1}.</span>{" "}
                      {instruction}
                    </p>
                  )
              )}
            </div>
          </div>
          <div className="Detail-ingredients">
            <div className="Detail-ingredients-wrapper">
              <h3>Ingredients</h3>
              <div className="Detail-ingredients-measures">
                <div className="Detail-measures-list">
                  {Object.keys(drink)
                    .filter((key) => key.includes("strMeasure") && drink[key])
                    .map((key) => (
                      <p key={key}>{drink[key]}</p>
                    ))}
                </div>
                <div className="Detail-ingredients-list">
                  {Object.keys(drink)
                    .filter(
                      (key) => key.includes("strIngredient") && drink[key]
                    )
                    .map((key) => (
                      <p key={key}>{drink[key]}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
