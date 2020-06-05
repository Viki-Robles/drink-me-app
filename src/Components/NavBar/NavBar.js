import React, { useState } from "react";
import "./NavBar.css";
import { FaAlignJustify } from "react-icons/fa";

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
      <button className="NavBar-button" onClick={() => onButtonSwitched()}>
        <FaAlignJustify className="NavBar-hamburguer" />
      </button>
  );
}
function NavBarBox({ isOpen }) {
  return (
    <div className="NavBar-logo-menu">
      <div className="NavBar-logo">DrinkMeApp</div>
      <div className={`NavBar-box ${isOpen ? "is-open" : ""}`}>
        <div className="NavBar-box-link">Home</div>
        <div className="NavBar-box-link">Team</div>
        <div className="NavBar-box-link">Contact</div>
        <div className="NavBar-box-link">Random</div>
      </div>
    </div>
  );
}
