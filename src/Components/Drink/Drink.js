import React, { useEffect } from "react";
import "./Drink.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Drink({ name, image }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Drink" data-aos="fade-up">
      <div className="drink-container">
        <img src={image} alt={name} />
        <div className="overlay-title">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}
