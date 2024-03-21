import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/portfolio.png';
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
                    <div className="app-button"> <a href="https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/"><Button variant="primary">Visit site</Button></a></div>
                    {/* coding study guide */}
                    <div className="app-title"><h3>Coding Study Guide</h3></div>
                    <div className="app-image"><img src={project3Img} /></div>
                    <div className="app-description"><p>Coding information, resources, and tips all in one place.</p></div>
                    <div className="app-button"> <a href="https://ashleyh5440.github.io/new-prework-study-guide/"><Button variant="primary">Visit site</Button></a></div>
                    {/* know it know */}
                    <div className="app-title"><h3>Know It All</h3></div>
                    <div className="app-image"><img src={project6Img} /></div>
                    <div className="app-description"><p>Test your smarts with this comprehensive trivia game.</p></div>
                    <div className="app-button"> <a href="https://art-trivia-game.onrender.com/"><Button variant="primary">Visit site</Button></a></div>
                </div>
                <div id="right">
                    {/* the box office dojo */}
                    <div className="app-title"><h3>The Box Office Dojo</h3></div>
                    <div className="app-image"><img src={project2Img} /></div>
                    <div className="app-description"><p>The perfect place to curate your own personal movie watch list.</p></div>
                    <div className="app-button"> <a href="https://ashleyh5440.github.io/box-office-dojo/"><Button variant="primary">Visit site</Button></a></div>
                    {/* mock portfolio */}
                    <div className="app-title"><h3>Mock Portfolio</h3></div>
                    <div className="app-image"><img src={project4Img} /></div>
                    <div className="app-description"><p>An old portfolio to showcase work.</p></div>
                    <div className="app-button"> <a href="https://ashleyh5440.github.io/pro-portfolio/"><Button variant="primary">Visit site</Button></a></div>
                    {/* password generator */}
                    <div className="app-title"><h3>Password Generator</h3></div>
                    <div className="app-image"><img src={project5Img} /></div>
                    <div className="app-description"><p>Application to generate a secure random password.</p></div>
                    <div className="app-button"> <a href="https://ashleyh5440.github.io/password-generator/"><Button variant="primary">Visit site</Button></a></div>
                </div>
           </div>
        </section>
        // <section className="portfolio">
        //     <div id="portfolio-header"><h1>Portfolio</h1></div>
        //     <div className="projects-container">
        //         <Container className="group">
        //             <Row>
        //                 <Col className="app">
        //                     <div className="app-title"><h3>Gods and Beasts</h3></div>
        //                     <div className="app-image"><img src={project1Img} /></div>
        //                     <div className="app-description"><p>With characters based off global mythology, users can play an online card game against the computer.</p></div>
        //                     <div className="app-button">
        //                         <a href="https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/"><Button variant="primary">Visit site</Button></a>
        //                     </div>
        //                 </Col>
        //                 <Col className="app">
        //                     <div className="app-title"><h3>The Box Office Dojo</h3></div>
        //                     <div className="app-image"><img src={project2Img} /></div>
        //                     <div className="app-description"><p>The perfect place to curate your own personal movie watch list.</p></div>
        //                     <div className="app-button">
        //                         <a href="https://ashleyh5440.github.io/box-office-dojo/"><Button variant="primary">Visit site</Button></a>
        //                     </div>
        //                 </Col>
        //             </Row>
        //             <Row>
        //                 <Col className="app">
        //                     <div className="app-title"><h3>Coding Study Guide</h3></div>
        //                     <div className="app-image"><img src={project3Img} /></div>
        //                     <div className="app-description"><p>Coding information, resources, and tips all in one place.</p></div>
        //                     <div className="app-button">
        //                         <a href="https://ashleyh5440.github.io/new-prework-study-guide/"><Button variant="primary">Visit site</Button></a>
        //                     </div>
        //                 </Col>
        //                 <Col className="app">
        //                     <div className="app-title"><h3>Mock Portfolio</h3></div>
        //                     <div className="app-image"><img src={project4Img} /></div>
        //                     <div className="app-description"><p>An old portfolio to showcase work.</p></div>
        //                     <div className="app-button">
        //                         <a href="https://ashleyh5440.github.io/pro-portfolio/"><Button variant="primary">Visit site</Button></a>
        //                     </div>
        //                 </Col>
        //             </Row>
        //             <Row>
        //                 <Col className="app">
        //                     <div className="app-title"><h3>Password Generator</h3></div>
        //                     <div className="app-image"><img src={project5Img} /></div>
        //                     <div className="app-description"><p>Application to generate a secure random password.</p></div>
        //                     <div className="app-button">
        //                         <a href="https://ashleyh5440.github.io/password-generator/"><Button variant="primary">Visit site</Button></a>
        //                     </div>
        //                 </Col>
        //                 <Col className="app">
        //                     <div className="app-title"><h3>Personal Calendar</h3></div>
        //                     <div className="app-image"><img src={project6Img} /></div>
        //                     <div className="app-description"><p>A  personal calendar to keep track of appointments and tasks.</p></div>
        //                     <div className="app-button">
        //                         <a href="https://ashleyh5440.github.io/personal-calendar/"><Button variant="primary">Visit site</Button></a>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // </section>
    )
};

export default Portfolio;




