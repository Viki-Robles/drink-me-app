import React from "react";
import martini from "./images/martini.jpg";
import "./Main.css";


export default function Main() {
    return (
        <div className="Main">
            <div className="container">
                <h2>Here is our App</h2>
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                <div className="container-text">
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.<br />
                Donec eu libero sit amet quam egestas semper.</p>
                </div>
                <div className="container-buttons">
                    <button>By Ingredient</button>
                    <button>I feel lucky today</button>
                </div>
                <div className="container-image">
                    <img src={martini} alt="martini" />
                </div>
            </div>
        </div>

    );
}