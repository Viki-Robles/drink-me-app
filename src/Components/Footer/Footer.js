import React from "react";
import "./Footer.css";
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <div className="Footer">
      <Link
          className="Footer-logo"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >DrinkMeApp</Link>
    </div>
  );
}
