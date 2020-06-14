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
        setRandom(json.drinks)
      });
  }

  if (!isLoaded) {
    return <div>Loadin Main...</div>;
  } else {
    return (
      <div className="Main" id="Home">
        <div className="container">
          <h2>Let's do some Chemistry together..</h2>
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <div className="container-text">
            <p>
              <span className="container-logo">DrinkMeApp</span>
              is an application where you can be creative at home on your own space and experiment
              the different type of coctails and drinks that are
              available on our "DYI" recipe guide.
              <br />
            </p>
          </div>
          <p className="container-p">Please use the buttons below to choose an ingredient or if you feel is 
          your "lucky" day choose the "lucky button" for inspiration.</p>
          <div className="container-buttons">
          <div className="main-picture-container">
              <img src={martini} alt="martini" />
            </div>
            <div className="container-buttons-boxes">
              <div>
                <button className="button-random"
                  onClick={() => fetchRandomData(!buttonOn)}>Feeling lucky
                </button>
                <div className="random-container">
                  {
                    listRandom.map((drink) => (
                      <div key={drink.idDrink}>
                        <p className="random-container-p">Checkout this one!</p>
                        <Link to={`/drink/${drink.idDrink}`}>
                        <div className="random-container-picture">
                          <div className="random-container-title">{drink.strDrink}</div>
                          <img src={drink.strDrinkThumb} />
                        </div>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
              <form className="container-form">
                <select onChange={(e) => setIngredient(e.target.value)} className="container-select">
                  {listIngredients.map((drink) => (
                    <option key={drink.strIngredient1} value={drink.strIngredient1}>
                      {drink.strIngredient1}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
        </div>
        {ingredient && <Results ingredient={ingredient} />}
      </div>
    );
  }
}
