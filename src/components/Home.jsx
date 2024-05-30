import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import bioPic from '../assets/about-img.png';
import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/nhakbar.png';
import project5Img from '../assets/password-generator.png';
import project6Img from '../assets/know-it-all.png';
import project7Img from '../assets/hangman.png';

import emailIcon from '../assets/email.png';
import linkedIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resumeIcon from '../assets/resume.png';
import logo from '../assets/logo.png';

import '../App.css'
import '../index.css'

function Home() {

    // useEffect(() => {
    //     // initialize ScrollTrigger
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     // ScrollTrigger for each container
    //     gsap.utils.toArray(".box").forEach(container => {
    //         gsap.from(container, {
    //             scrollTrigger: {
    //                 trigger: container,
    //                 start: 'top bottom-=100',
    //                 end: 'bottom top',
    //                 toggleActions: 'play none none reverse', 
    //             },
    //             opacity: 0,
    //             y: 100,
    //             duration: 1,
    //         });
    //     });
    // })
    return (
        <section>
            <div>
            <Row style={{ height: "100vh", display: "flex",  flexDirection:"column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h1>Ashley Hill</h1> 
                <img style={{width: "15%", marginTop: "40px"}}src={logo} />
            </Row>
            </div>

            <div className='box'>
                <Row id="about">
                <div className="top-border">
                    <h1>About</h1>
                </div>
                    <p style={{marginTop: "70px"}}>After being introduced to coding through a day job, I decided to jump feet-first into web development. I quickly  became fascinated with the challenges and creativity that come with combining art and technology.</p>
                <Col id="left">
                    <img src={bioPic} />
                </Col>
                <Col id="right">
                    <h2 style={{marginTop: "5%"}}>Technical Skills</h2>
                        <div className="badges-container">
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">HTML</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">CSS</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bulma CSS</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bootstrap</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">JavaScript</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">jQuery</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">React</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Handlebars</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Node.js</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Express.js</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">SQL</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">MongoDB</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">RESTful APIs</Badge>
                        <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">UI/UX Design</Badge>
                        </div>
                <p style={{marginTop: "3%"}}><a href="https://docs.google.com/document/d/1ER7rm1hEVcNOiQHMEoPVYly3SFkebmBtu8tABmlulEM/edit" target="_blank">View full resume →</a></p>
                </Col>
                </Row>
            </div>

            <div className='box'>
                <Row id="portfolio">
                <div className="top-border" style={{marginBottom: "5%"}}>
                    <h1>Portfolio</h1>
                </div>
                <div style={{width: "80%"}}>
                    <Carousel className="carousel">
                        <Carousel.Item className="carousel-item">
                           <img className="carousel-image" src={project1Img} text="First slide" />
                            <Carousel.Caption>
                                <h3>Gods and Beasts</h3>
                                <div className="description">
                                    <p>With characters based off global mythology, users can play an online card game against the computer.</p> 
                                    <a href="https://github.com/ashleyh5440/gods-beasts-game" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image" src={project2Img} text="Second slide" />
                            <Carousel.Caption>
                                <h3>The Box Office Dojo</h3>
                                <div className="description">
                                    <p>The perfect place to curate your own personal movie watch list.</p> 
                                    <a href="https://github.com/ashleyh5440/box-office-dojo"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://ashleyh5440.github.io/box-office-dojo/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image" src={project3Img} text="Third slide" />
                            <Carousel.Caption>
                                <h3>Coding Study Guide</h3>
                                <div className="description">
                                    <p>Coding information, resources, and tips all in one place.</p> 
                                    <a href="https://github.com/ashleyh5440/new-prework-study-guide"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://ashleyh5440.github.io/new-prework-study-guide/"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image" src={project4Img} text="Fourth slide" />
                            <Carousel.Caption>
                                <h3>NH Akbar</h3>
                                <div className="description">
                                    <p>The official site of writer NH Akbar.</p> 
                                    <a href="https://github.com/ashleyh5440/author-site"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://nhakbar.netlify.app/"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="https://ashleyh5440.github.io/password-generator/"><img className="carousel-image" src={project5Img} text="Fifth slide" /></a>
                            <Carousel.Caption>
                                <h3>Password Generator</h3>
                                <div className="description">
                                    <p>Generate a secure random password.</p> 
                                    <a href="https://github.com/ashleyh5440/password-generator"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://ashleyh5440.github.io/password-generator/"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image" src={project6Img} text="Sixth slide" />
                            <Carousel.Caption>
                                <h3>Know It All</h3>
                                <div className="description">
                                    <p>Test your smarts with this comprehensive trivia game.</p> 
                                    <a href="https://github.com/ashleyh5440/art-trivia-game"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://art-trivia-game.onrender.com/"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-image" src={project7Img} text="Sixth slide" />
                            <Carousel.Caption>
                                <h3>Halloween Hangman</h3>
                                <div className="description">
                                    <p>Escape the noose by guessing the correct word in the Halloween-themed hangman game.</p> 
                                    <a href="https://github.com/ashleyh5440/hangman"><Button variant="primary">View on GitHub</Button></a>
                                    <a href="https://ashleyh5440.github.io/hangman/"><Button variant="primary">Visit site</Button></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                </Row>
            </div>

            <div className='box'>
                <Row id="contact">
                <div className="top-border">
                    <h1>Contact</h1>
                </div>
               <div id="icons" style={{marginTop: "15%", marginBottom: "20%", padding: "2%"}}>
                    <div className='contact-icon'><a href="mailto:contact.ashleycreates@gmail.com"><img src={emailIcon} /></a></div>
                    <div className='contact-icon'><a href="https://github.com/ashleyh5440"><img src={githubIcon} /></a></div>
                    <div className='contact-icon'><a href="https://www.linkedin.com/in/ashley-hill-63b209154/"><img src={linkedIcon} /></a></div>
                    <div className='contact-icon'><a href="https://docs.google.com/document/d/1ER7rm1hEVcNOiQHMEoPVYly3SFkebmBtu8tABmlulEM/edit"><img src={resumeIcon} /></a></div>
               </div>
                </Row>
            </div>
        </section>
    )
}

export default Home;