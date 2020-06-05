import React from "react";
import martini from "./images/martini.png";
import "./Main.css";


export default function Main() {
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
                        <span>D</span>
                        <span>r</span>
                        <span>i</span>
                        <span>n</span>
                        <span>k</span>
                        <span>M</span>
                        <span>e</span>
                        <span>A</span>
                        <span>p</span>
                        <span>p</span>
                    is an application where you can be creative at home and experiment<br />
                    by exploring the different type of coctails and drinks that are available on our "DYI" guide.<br />
                    </p>
                </div>
                <div className="container-buttons">
                    <button>By Ingredient</button>
                    <button>Feeling lucky</button>
                    <img src={martini} alt="martini" />
                </div>
            </div>
        </div>

    );
}