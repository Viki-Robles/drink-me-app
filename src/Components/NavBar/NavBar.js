import React, { useState } from 'react';
import NavBarIcon from './NavBar.svg';
import './NavBar.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="NavBar">
            <NavBarButton onButtonSwitched={() => setIsOpen(!isOpen)} />
            <NavBarBox isOpen={isOpen} />
        </div>
    );
}
function NavBarButton({ onButtonSwitched }) {
    return (
        <button
            className="NavBar-button"
            onClick={() => onButtonSwitched()}
        >
            <img src={NavBarIcon} alt="NavBar icon" />
        </button>
    );
}
function NavBarBox({ isOpen }) {
    return (
        <div className={`NavBar-box ${isOpen ? 'is-open' : ''}`}>
            <div className="NavBar-box-link">Home</div>
            <div className="NavBar-box-link">Team</div>
            <div className="NavBar-box-link">Contact</div>
            <div className="NavBar-box-link">Random</div>
        </div>
    );
}
