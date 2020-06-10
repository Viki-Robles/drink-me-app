import React from "react";

export default function Random(props) {
    return (
        <div className="random">
            <div className="random-name">{props.name}</div>
            <div className="random-picture">
                <img src={props.picture} />
            </div>
        </div>
    );
}