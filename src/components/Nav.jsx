import React, { useState } from 'react';

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
                        <button className="accordion-button" type="button" onClick={toggleAccordion} aria-expanded={isOpen ? "true" : "false"} aria-controls="collapseOne">
                            A
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="nav-left">
                                <img id="github-logo" src="../src/assets/github.png" />
                                <img id="gmail-logo" src="../src/assets/gmail.png" />
                                <img id="linkedin-logo" src="../src/assets/linkedin.png" />
                            </div>
                            <div className="nav-right">
                                <button id="home-btn">Home</button>
                                <button id="portfolio-btn">Portfolio</button>
                                <button id="about-btn">About</button>
                                <button id="resume-btn">Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav;