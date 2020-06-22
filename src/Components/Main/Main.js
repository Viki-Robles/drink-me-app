import React, { useState, useEffect } from "react";
import "./Main.css";
import Results from "../Results/Results.js";
import { Link } from "react-router-dom";
import Bubbles from "../Bubbles/Bubbles";
import MainText from "../MainText/MainText";

export default function Main() {
  const [listIngredients, setListIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonOn, setButtonOn] = useState(false);
  const [listRandom, setRandom] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((json) => {
        setListIngredients(json.drinks);
        setIsLoaded(true);
      });
  }, []);

  const fetchRandomData = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((json) => {
        setRandom(json.drinks);
      });
  };

  if (!isLoaded) {
    return <div>Loadin Main...</div>;
  } else {
    return (
      <div>
        <>
          <div className="Main" id="Home">
            <div className="container">
              <h2>Fancy a cocktail?</h2>
              <Bubbles />
              <div className="container-main">
                <MainText />
                <div className="container-buttons">
                  <div className="container-buttons-boxes">
                    <div>
                      <button
                        className="button-random"
                        onClick={() => fetchRandomData(!buttonOn)}>
                        Feeling lucky
                      </button>
                      <div className="random">
                      </div>
                    </div>
                    <form className="container-form">
                      <select
                        onChange={(e) => setIngredient(e.target.value)}
                        className="container-select">
                        <option selected disabled>Choose your ingredient here
                        </option>
                        {listIngredients
                          .sort((drinkA, drinkB) =>
                            drinkA.strIngredient1 > drinkB.strIngredient1 ? 1 : -1)
                          .map((drink) => (
                            <option
                              key={drink.strIngredient1}
                              value={drink.strIngredient1}>
                              {drink.strIngredient1}
                            </option>
                          ))}
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <div>
          {ingredient && <Results ingredient={ingredient} />}
          {listRandom.map((drink) => (
            <div key={drink.idDrink}>
              <p className="random-container-p">Checkout this one!</p>
              <Link to={`/drink/${drink.strDrink}`}>
                <div className="random-container">
                  <img src={drink.strDrinkThumb} />
                  <div className="random-overlay-title">
                    {drink.strDrink}
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <hr className="hr1" />
        </div>
      </div>
    );
  }
}
