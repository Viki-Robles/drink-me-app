import React, { useState, useEffect } from "react";
import "./Detail.css";
import { FaCocktail, FaHeartbeat } from "react-icons/fa";

export default function Detail({ match }) {
  const [drink, setDrink] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const ingredientsIndexes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];

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
    return <div>Loading</div>;
  } else {
    return (
      <div className="Detail">
        <h1>{drink.strDrink}</h1>
        <p className="Detail-instructions">
          {drink.strInstructions.split(".").map(
            (instruction, index) =>
              instruction && (
                <p key={instruction}>
                  {index + 1}- {instruction}
                </p>
              )
          )}
        </p>

        <div className="Detail-img-ingredients">
          <div className="Detail-img">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="Detail-alcohol">
              {drink.strAlcoholic === "Alcoholic" ? (
                <FaCocktail className="Detail-icon-cockatil" />
              ) : (
                <FaHeartbeat className="Detail-icon-heart" />
              )}

              {drink.strAlcoholic}
            </div>
            <div className="Detail-glass">Serve in {drink.strGlass}</div>
          </div>
          <div className="Detail-ingredients">
            <h2>Ingredients</h2>
            {ingredientsIndexes.map((ingredient) => {
              return (
                <div className="Detail-ingredients-measures" key={ingredient}>
                  <p>{`drink.strMeasure${ingredient}`}:</p>
                  <p>{`drink.strIngredient${ingredient}`}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
