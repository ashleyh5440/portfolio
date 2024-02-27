import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import githubLogo from '../assets/github.png';
import gmailLogo from '../assets/gmail.png';
import linkedinLogo from '../assets/linkedin.png';

function Nav({ toggleCarousel, carouselHidden }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        toggleCarousel(!isOpen);
    };

    return(
        <section>
            <div className={`accordion ${isOpen ? 'expanded' : ''}`} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" onClick={toggleAccordion} aria-expanded={isOpen ? "true" : "false"} aria-controls="collapseOne">A</button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="nav-left">
                                <a href="https://github.com/ashleyh5440"><img id="github-logo" src={githubLogo} alt="GitHub" /></a>
                                <a href="mailto:ashleyh5440@gmail.com"><img id="gmail-logo" src={gmailLogo} alt="Gmail" /></a>
                                <a href="https://www.linkedin.com/in/ashley-hill-63b209154/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /></a>
                            </div>
                            <div className="nav-right">
                                <button id="home-btn" onClick={toggleAccordion}><NavLink to='/' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>Home</NavLink></button>

                                <button id="about-btn" onClick={toggleAccordion}><NavLink to='/about' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>About</NavLink></button>

                                <button id="portfolio-btn" onClick={toggleAccordion}><NavLink to='/portfolio' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>Portfolio</NavLink></button>

                                <button id="resume-btn" onClick={toggleAccordion}><NavLink to='/contact' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>Contact</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nav;
