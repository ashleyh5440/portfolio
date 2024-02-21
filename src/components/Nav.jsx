import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
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
                                <img id="github-logo" src="../src/assets/github.png" />
                                <img id="gmail-logo" src="../src/assets/gmail.png" />
                                <img id="linkedin-logo" src="../src/assets/linkedin.png" />
                            </div>
                            <div className="nav-right">
                                <button id="home-btn"><NavLink to='/' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>Home</NavLink></button>

                                <button id="portfolio-btn"><NavLink to='/portfolio' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>Portfolio</NavLink></button>

                                <button id="about-btn"><NavLink to='/about' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>About</NavLink></button>

                                <button id="resume-btn"><NavLink to='/resume' className={({ isActive }) => (isActive ? "text-white fs-3" :  'text-gray-300 hover:bg-gray-700 hover:text-white text-sm px-3')}>Resume</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav;