import React, { useState, useEffect } from "react";
import Random from "../Random/Random";


export default function RandomResults() {
    const [listRandom, setRandom] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((response) => response.json())
            .then((json) => {
                setRandom(json.drinks);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return <div>Loadin Main...</div>;
    } else {
        return (
            <div>
                {
                    listRandom.map((drink) => (
                        <Random
                            key={drink.idDrink}
                            name={drink.strDrink}
                            picure={drink.strDrinkThumb} />
                    ))
                }
            </div>
        );
    }
}