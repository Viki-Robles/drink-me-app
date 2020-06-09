import React from "react";

export default function Random(props) {
    return (
        <div className="Random">
            <div className="name">{props.name}</div>
            <div className="picture">
                <img src={props.picture} />
            </div>
        </div>
    );
}