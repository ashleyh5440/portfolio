import React from 'react';
import 'animate.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import './navfooter.css';

function Nav() {
    return (
        <section className="navbar">
            <div id="logo">
                <img src={logo} alt="logo" />
            </div>
            <div id="links">
                <Link to="about" smooth={true} duration={500}><p>About</p></Link>
                <Link to="portfolio" smooth={true} duration={500}><p>Portfolio</p></Link>
                <Link to="contact" smooth={true} duration={500}><p>Contact</p></Link>
            </div>
        </section>
    );
}

export default Nav;