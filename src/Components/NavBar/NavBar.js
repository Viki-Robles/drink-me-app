import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        const sections = [
            'Home', 'Team', 'Contact', 'Random'];
        const navLinks = sections.map(section => (
            <li><a href={'#' + section}>{section}</a></li>
        )
        );
        return (
            <nav>
                <h2 className="Logo">DrinkMeApp</h2>
                <ul>{navLinks}</ul>
            </nav>
        );
    }
}
export default NavBar;