import { useHistory } from "react-router-dom";
import React from "react";
import "./ButtonUp.css";

export default function ButtonUp() {
    const history = useHistory();

    function buttonUp() {
        return history.push("/");
    }

    return (
        <div>
            <button onClick={buttonUp}
                className="buttonUp">Go Up</button>
        </div>
    );
}