import React, { useState, useEffect } from "react";
import "./Results.css";
import Drink from "../Drink/Drink.js";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.js";


export default function Results(props) {
  const [drinks, serDrinks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${props.ingredient}`
    )
      .then((response) => response.json())
      .then((json) => {
        serDrinks(json.drinks);
        setIsLoaded(true);
      });
  }, [props.ingredient]);

  if (!isLoaded) {
    return (
        <Spinner />
    );
  } else {
    return (
      <div className="Results">
        <div className="Results-header">
          {drinks.length > 1 ? "Fancy any of these?" : "Fancy this one?"}
        </div>
        <div className="Results-container">
          {drinks.map(
            (drink) =>
              Number(drink.idDrink) !== 17246 && (
                <div key={drink.idDrink} className="results-drink-wrapper">
                  {
                    <Link to={`/drink/${drink.strDrink}`}>
                      <Drink
                        id={drink.idDrink}
                        name={drink.strDrink}
                        image={drink.strDrinkThumb}
                      />
                    </Link>
                  }
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}
