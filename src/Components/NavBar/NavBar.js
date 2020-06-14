import React, { useState } from "react";
import "./NavBar.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-scroll';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="NavBar">
      <Link
          className="NavBar-logo"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >DrinkMeApp</Link>
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
      <div className={`NavBar-box ${isOpen ? "is-open" : ""}`}>
      <Link
          className="NavBar-box-link"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Home</Link>
        <Link
          className="NavBar-box-link"
          to="Team"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Team</Link>
        <Link
          className="NavBar-box-link"
          to="Contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Contact</Link>
      </div>
    </div>
  );
}
