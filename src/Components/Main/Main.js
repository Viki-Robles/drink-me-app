import React, { useState, useEffect } from "react";
import martini from "./images/martini.png";
import "./Main.css";
import Results from "../Results/Results.js";

export default function Main() {
  const [listIngredients, setListIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((json) => {
        setListIngredients(json.drinks);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loadin Main...</div>;
  } else {
    return (
      <div className="Main">
        <div className="container">
          <h2>Let's do some Chemistry together..</h2>
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <div className="container-text">
            <p>
              <span>DrinkMeApp</span>
              is an application where you can be creative at home and experiment
              <br />
              by exploring the different type of coctails and drinks that are
              available on our "DYI" guide.
              <br />
            </p>
          </div>
          <div className="container-buttons">
            <p>Select and ingredient from the drop down menu</p>

            <button>Feeling lucky</button>
            <img src={martini} alt="martini" />
          </div>
        </div>
        <form>
          <select onChange={(e) => setIngredient(e.target.value)}>
            {listIngredients.map((drink) => (
              <option key={drink.strIngredient1} value={drink.strIngredient1}>
                {drink.strIngredient1}
              </option>
            ))}
          </select>
        </form>
        <Results ingredient={ingredient} />
      </div>
    );
  }
}
