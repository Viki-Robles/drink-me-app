import React, { useState } from "react";
import "./NavBar.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "./Logo.png";

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
      >
        <img src={Logo} alt="logo" />
      </Link>
      <NavBarButton onButtonSwitched={() => setIsOpen(!isOpen)} />
      <NavBarBox isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
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
function NavBarBox(props) {
  return (
    <div className="NavBar-logo-menu">
      <div className={`NavBar-box ${props.isOpen ? "is-open" : ""}`}>
        <Link
          className="NavBar-box-link"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div onClick={props.closeMenu}>Home</div>
        </Link>

        <Link
          className="NavBar-box-link"
          to="Team"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div onClick={props.closeMenu}>Team</div>
        </Link>
      </div>
    </div>
  );
}
