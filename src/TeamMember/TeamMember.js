import React from 'react';

export default function TeamMember(props) {
    return (
        <div className="TeamMember">
            <a href={props.linkedIn} target="_blank">
                <div className="teamContainer">
                    <img src={props.teamImage} alt={`${props.name}`} />
                    <div className="teamMemberName">{props.name}</div>
                </div>
            </a>
        </div>
    );
}

