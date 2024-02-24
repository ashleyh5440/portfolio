import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/portfolio.png';
import project5Img from '../assets/password-generator.png';
import project6Img from '../assets/personal-calendar.png';

function Portfolio() {
    return (
        <section className="portfolio-container">
            <div id="portfolio-header"><h1>Portfolio</h1></div>
            <div>
                <Container>
                    <Row>
                        <Col className="app">
                            <div className="app-title"><h3>Gods and Beasts</h3></div>
                            <div className="app-image"><img src={project1Img} /></div>
                            <div className="app-description"><p>With characters based off global mythology, users can play an online card game against the computer.</p></div>
                        </Col>
                        <Col className="app">
                            <div className="app-title"><h3>The Box Office Dojo</h3></div>
                            <div className="app-image"><img src={project2Img} /></div>
                            <div className="app-description"><p>The perfect place to curate your own personal movie watch list.</p></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="app">
                            <div className="app-title"><h3>Coding Study Guide</h3></div>
                            <div className="app-image"><img src={project3Img} /></div>
                            <div className="app-description"><p>Coding information, resources, and tips all in one place.</p></div>
                        </Col>
                        <Col className="app">
                            <div className="app-title"><h3>Mock Portfolio</h3></div>
                            <div className="app-image"><img src={project4Img} /></div>
                            <div className="app-description"><p>An old portfolio to showcase work.</p></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="app">
                            <div className="app-title"><h3>Password Generator</h3></div>
                            <div className="app-image"><img src={project5Img} /></div>
                            <div className="app-description"><p>Application to generate a secure random password.</p></div>
                        </Col>
                        <Col className="app">
                            <div className="app-title"><h3>Personal Calendar</h3></div>
                            <div className="app-image"><img src={project6Img} /></div>
                            <div className="app-description"><p>A  personal calendar to keep track of appointments and tasks.</p></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
};

export default Portfolio;




