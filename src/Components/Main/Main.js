import React, { useState, useEffect } from "react";
import martini from "./images/martini.png";
import "./Main.css";
import Results from "../Results/Results.js";
import { Link } from "react-router-dom";

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
      <div className="Main" id="Home">
        <div className="container">
          <h2>Let's do some Chemistry together...</h2>
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <div className="container-paragraphs">
            <div className="container-text">
              <p>
                Have you ever been in a situation where the sun is shining is on
                and all you want is a cocktail to cool you down?
                <br />
                Me too! We have made it easy for you to decide what cocktail to
                make.
                <br />
              </p>
            </div>
            <p className="container-p">
              Click on an ingredient below and voila, hey presto you have a
              selection to choose from.
              <br />
              Not sure on how to make it? No worries, click on your cocktail of
              choice and we’ll help you through making it!
              <br />
              <br />
              Feeling lucky? <br />
              <br />
              Live on the edge and find a new cocktail to make.
            </p>
          </div>
          <div className="container-buttons">
            <div className="main-picture-container">
              <img src={martini} alt="martini" />
            </div>
            <div className="container-buttons-boxes">
              <div>
                <button
                  className="button-random"
                  onClick={() => fetchRandomData(!buttonOn)}
                >
                  Feeling lucky
                </button>
                <div className="random">
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
                </div>
              </div>
              <form className="container-form">
                <select
                  onChange={(e) => setIngredient(e.target.value)}
                  className="container-select"
                >
                  <option selected disabled>
                    Choose your ingredient here
                  </option>
                  {listIngredients
                    .sort((drinkA, drinkB) =>
                      drinkA.strIngredient1 > drinkB.strIngredient1 ? 1 : -1
                    )
                    .map((drink) => (
                      <option
                        key={drink.strIngredient1}
                        value={drink.strIngredient1}
                      >
                        {drink.strIngredient1}
                      </option>
                    ))}
                </select>
              </form>
            </div>
          </div>
        </div>
        {ingredient && <Results ingredient={ingredient} />}
        <hr className="hr1" />
      </div>
    );
  }
}
