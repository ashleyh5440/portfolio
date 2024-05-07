import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';


import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/nhakbar.png';
import project5Img from '../assets/password-generator.png';
import project6Img from '../assets/know-it-all.png';



function Portfolio() {
    return (
        <section className="portfolio">
            <div id="portfolio-header"><h1>Portfolio</h1></div>
            <div className="projects-container">
                {/* left side */}
                <div id="left">
                    {/* gods and beasts */}
                    <div className="app-title"><h3>Gods and Beasts</h3></div>
                    <div className="app-image"><img src={project1Img} /></div>
                    <div className="app-description"><p>With characters based off global mythology, users can play an online card game against the computer.</p></div>
                    <div className="app-button"> 
                        <a href="https://github.com/ashleyh5440/gods-beasts-game" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                        <a href="https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/" target="_blank"><Button variant="primary">Visit site</Button></a>
                    </div>
                    
                    {/* coding study guide */}
                    <div className="app-title"><h3>Coding Study Guide</h3></div>
                    <div className="app-image"><img src={project3Img} /></div>
                    <div className="app-description"><p>Coding information, resources, and tips all in one place.</p></div>
                    <div className="app-button"> 
                        <a href="https://github.com/ashleyh5440/new-prework-study-guide" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                        <a href="https://ashleyh5440.github.io/new-prework-study-guide/" target="_blank"><Button variant="primary">Visit site</Button></a>
                    </div>
                    
                    {/* know it all */}
                    <div className="app-title"><h3>Know It All</h3></div>
                    <div className="app-image"><img src={project6Img} /></div>
                    <div className="app-description"><p>Test your smarts with this comprehensive trivia game.</p></div>
                    <div className="app-button">
                        <a href="https://github.com/ashleyh5440/art-trivia-game" target="_blank"><Button variant="primary">View on GitHub</Button></a> 
                        <a href="https://art-trivia-game.onrender.com/" target="_blank"><Button variant="primary">Visit site</Button></a>
                    </div>
                </div>
                <div id="right">
                    {/* the box office dojo */}
                    <div className="app-title"><h3>The Box Office Dojo</h3></div>
                    <div className="app-image"><img src={project2Img} /></div>
                    <div className="app-description"><p>The perfect place to curate your own personal movie watch list.</p></div>
                    <div className="app-button"> 
                        <a href="https://github.com/ashleyh5440/box-office-dojo" target="_blank"><Button variant="primary">View on GitHub</Button></a> 
                        <a href="https://ashleyh5440.github.io/box-office-dojo/" target="_blank"><Button variant="primary">Visit site</Button></a>
                    </div>
                    
                    {/* NH Akbar */}
                    <div className="app-title"><h3>NH Akbar</h3></div>
                    <div className="app-image"><img src={project4Img} /></div>
                    <div className="app-description"><p>Official site of writer NH Akbar.</p></div>
                    <div className="app-button"> 
                        <a href="https://github.com/ashleyh5440/author-site" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                        <a href="https://nhakbar.netlify.app/" target="_blank"><Button variant="primary">Visit site</Button></a>
                    </div>
                    
                    {/* password generator */}
                    <div className="app-title"><h3>Password Generator</h3></div>
                    <div className="app-image"><img src={project5Img} /></div>
                    <div className="app-description"><p>Application to generate a secure random password.</p></div>
                    <div className="app-button"> 
                        <a href="https://github.com/ashleyh5440/password-generator" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                        <a href="https://ashleyh5440.github.io/password-generator/" target="_blank"><Button variant="primary">Visit site</Button></a>
                    </div>
                </div>
           </div>
        </section>
    )
};

export default Portfolio;




