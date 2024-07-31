import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import bioPic from '../assets/about-img.png';

import emailIcon from '../assets/email.png';
import linkedIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resumeIcon from '../assets/resume.png';
import logo from '../assets/logo.png';

import '../index.css';

function Home() {
    const fireFliesContainerRef = useRef(null);
    const totalFireFlies = 50;

    useEffect(() => {
        // initialize ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // ScrollTrigger for each container
        gsap.utils.toArray(".box").forEach(container => {
            gsap.from(container, {
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom-=100',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse', 
                },
                opacity: 0,
                y: 100,
                duration: 1,
            });
        });

        // Firefly animation
        const w = window.innerWidth;
        const h = window.innerHeight;

        const Anim = (elm) => {
            const containerRect = fireFliesContainerRef.current.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;

            gsap.to(elm, {
                duration: Math.random() * 10 + 10,
                x: Math.random() * containerWidth,
                y: Math.random() * containerHeight,
                opacity: Math.random(),
                scale: Math.random() * 0.5 + 1,
                delay: Math.random() * 2,
                onComplete: () => Anim(elm),
            });
        };

        const fireFlies = fireFliesContainerRef.current.children;

        for (let i = 0; i < totalFireFlies; i++) {
            const fireFly = fireFlies[i];
            gsap.set(fireFly, { opacity: 0 });
            Anim(fireFly);
        }

        return () => {
            for (let i = 0; i < totalFireFlies; i++) {
                gsap.killTweensOf(fireFlies[i]);
            }
        };
    }, []);
    return (
        <section>
            <div className="fireflies-container" ref={fireFliesContainerRef}>
                {Array.from({ length: totalFireFlies }, (_, index) => (
                    <div
                        key={index}
                        className="dot"
                    />
                ))}
                <div id="top">
                    <Row style={{ height: "100vh", display: "flex",  flexDirection:"column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                        <h1>Ashley Hill</h1> 
                        <img id="logo-img" src={logo} />
                    </Row>
                </div>

               <div>
                    <div className="top-border" style={{overflow: "hidden"}}>
                        <h1>About</h1>
                    </div>
                    <Row id="about">
                        <Col style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end"}}>
                            <div className="bio-pic-container">
                                <img src={bioPic} />
                            </div>
                        </Col>
                        <Col style={{overflowY: "hidden"}}>
                            <p style={{padding: "60px 20px"}}>After being introduced to coding through a day job, I decided to jump feet-first into web development. I quickly  became fascinated with the challenges and creativity that come with combining art and technology.</p>
                            <div className="badges-container">
                                <h2>Technical Skills</h2>
                                <div className="badge-box">
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">HTML</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">CSS</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bulma CSS</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bootstrap</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">JavaScript</Badge>
                                </div>
                                <div className="badge-box">
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">jQuery</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">React</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Handlebars</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Node.js</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Express.js</Badge>
                                </div>
                                <div className="badge-box">
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">SQL</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">MongoDB</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">RESTful APIs</Badge>
                                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">UI/UX Design</Badge>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row id="portfolio">
                        <div className="top-border">
                            <h1>Portfolio</h1>
                        </div>
                      <Col>
                        <Carousel fade>
                                <Carousel.Item>
                                    <div className="project-img" id="project1">
                                    </div>
                                    <div className="project-description">
                                        <h3>Gods and Beast</h3>
                                        <p>Mythology card game.</p>
                                        <a href="https://gods-and-beasts.onrender.com/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project2">
                                    </div>
                                    <div className="project-description">
                                        <h3>The Box Office Dojo</h3>
                                        <p>The perfect place to curate your own personal movie watch list.</p>
                                        <a href="https://github.com/ashleyh5440/box-office-dojo" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                        <a href="https://ashleyh5440.github.io/box-office-dojo/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project3">
                                    </div>
                                    <div className="project-description">
                                        <h3>Coding Study Guide</h3>
                                        <p>Coding information, resources, and tips all in one place.</p>
                                        <a href="https://github.com/ashleyh5440/new-prework-study-guide" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                        <a href="https://ashleyh5440.github.io/new-prework-study-guide/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project4">
                                    </div>
                                    <div className="project-description">
                                        <h3>Password Generator</h3>
                                        <p>Generate a secure random password.</p>
                                        <a href="https://github.com/ashleyh5440/password-generator" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                        <a href="https://ashleyh5440.github.io/password-generator/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project5">
                                    </div>
                                    <div className="project-description">
                                        <h3>Know It All</h3>
                                        <p>Test your smarts with this comprehensive trivia game.</p>
                                        <a href="https://github.com/ashleyh5440/know-it-all" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                        <a href="https://know-it-all-trivia.netlify.app/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project6">
                                    </div>
                                    <div className="project-description">
                                        <h3>Halloween Hangman</h3>
                                        <p>Escape the noose by guessing the correct word in the Halloween-themed hangman game.</p>
                                        <a href="https://github.com/ashleyh5440/hangman" target="_blank"><Button variant="primary">Visit site</Button></a>
                                        <a href="https://ashleyh5440.github.io/hangman/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                        </Carousel>
                      </Col>
                    </Row>

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
            </div>
        </section>
    )
}

export default Home;









// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'animate.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Badge from 'react-bootstrap/Badge';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// import bioPic from '../assets/about-img.png';
// import project1Img from '../assets/gods-and-beasts.png';
// import project2Img from '../assets/the-box-office-dojo.png';
// import project3Img from '../assets/coding-study-guide.png';
// import project4Img from '../assets/nhakbar.png';
// import project5Img from '../assets/password-generator.png';
// import project6Img from '../assets/know-it-all.png';
// import project7Img from '../assets/hangman.png';

// import emailIcon from '../assets/email.png';
// import linkedIcon from '../assets/linkedin.png';
// import githubIcon from '../assets/github.png';
// import resumeIcon from '../assets/resume.png';
// import logo from '../assets/logo.png';

// import '../App.css'
// import '../index.css'

// function Home() {
//     return (
//         <section>
//             <div id="top">
//             <Row style={{ height: "100vh", display: "flex",  flexDirection:"column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
//                 <h1>Ashley Hill</h1> 
//                 <img id="logo-img" src={logo} />
//             </Row>
//             </div>
//             <div className='box'>
//                 <Row id="about">
//                 <div className="top-border">
//                     <h1>About</h1>
//                 </div>
//                     <p style={{paddingTop: "15%"}}>After being introduced to coding through a day job, I decided to jump feet-first into web development. I quickly  became fascinated with the challenges and creativity that come with combining art and technology.</p>
//                 <Col id="left">
//                     <img src={bioPic} />
//                 </Col>
//                 <Col id="right">
//                     <h2 style={{marginTop: "5%"}}>Technical Skills</h2>
//                         <div className="badges-container">
//                             <div className="badge-box">
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">HTML</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">CSS</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bulma CSS</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bootstrap</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">JavaScript</Badge>
//                             </div>
//                             <div className="badge-box">
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">jQuery</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">React</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Handlebars</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Node.js</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Express.js</Badge>
//                             </div>
//                             <div className="badge-box">
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">SQL</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">MongoDB</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">RESTful APIs</Badge>
//                             <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">UI/UX Design</Badge>
//                             </div>
//                         </div>
//                 <p style={{marginTop: "3%"}}><a href="https://docs.google.com/document/d/1ER7rm1hEVcNOiQHMEoPVYly3SFkebmBtu8tABmlulEM/edit" target="_blank">View full resume →</a></p>
//                 </Col>
//                 </Row>
//             </div>

//             <div className='box'>
//                 <Row id="portfolio">
//                     <div className="top-border" style={{marginBottom: "5%"}}>
//                         <h1>Portfolio</h1>
//                     </div>
//                     <div style={{width: "80%", border: "2px solid red"}}>
//                         {/* <Row style={{width: "80%", border: "2px solid green"}}>
//                             <Col>1 of 1</Col>
//                             <Col>1 of 1</Col>
//                             <Col>1 of 1</Col>
//                         </Row>
//                         <Row>
//                             <Col>1 of 1</Col>
//                             <Col>1 of 1</Col>
//                             <Col>1 of 1</Col>
//                         </Row> */}

//                     {/* <Carousel className="carousel">
//                         <Carousel.Item className="carousel-item">
//                            <img className="carousel-image" src={project1Img} text="First slide" />
//                             <Carousel.Caption>
//                                 <h3>Gods and Beasts</h3>
//                                 <div className="description">
//                                     <p>With characters based off global mythology, users can play an online card game against the computer.</p> 
//                                     <a href="https://gods-and-beasts.onrender.com/" target="_blank"><Button variant="primary">Visit site</Button></a>
//                                 </div>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <img className="carousel-image" src={project2Img} text="Second slide" />
//                             <Carousel.Caption>
//                                 <h3>The Box Office Dojo</h3>
//                                 <div className="description">
//                                     <p>The perfect place to curate your own personal movie watch list.</p> 
//                                     <a href="https://github.com/ashleyh5440/box-office-dojo"><Button variant="primary">View on GitHub</Button></a>
//                                     <a href="https://ashleyh5440.github.io/box-office-dojo/" target="_blank"><Button variant="primary">Visit site</Button></a>
//                                 </div>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <img className="carousel-image" src={project3Img} text="Third slide" />
//                             <Carousel.Caption>
//                                 <h3>Coding Study Guide</h3>
//                                 <div className="description">
//                                     <p>Coding information, resources, and tips all in one place.</p> 
//                                     <a href="https://github.com/ashleyh5440/new-prework-study-guide"><Button variant="primary">View on GitHub</Button></a>
//                                     <a href="https://ashleyh5440.github.io/new-prework-study-guide/"><Button variant="primary">Visit site</Button></a>
//                                 </div>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <a href="https://ashleyh5440.github.io/password-generator/"><img className="carousel-image" src={project5Img} text="Fifth slide" /></a>
//                             <Carousel.Caption>
//                                 <h3>Password Generator</h3>
//                                 <div className="description">
//                                     <p>Generate a secure random password.</p> 
//                                     <a href="https://github.com/ashleyh5440/password-generator"><Button variant="primary">View on GitHub</Button></a>
//                                     <a href="https://ashleyh5440.github.io/password-generator/"><Button variant="primary">Visit site</Button></a>
//                                 </div>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <img className="carousel-image" src={project6Img} text="Sixth slide" />
//                             <Carousel.Caption>
//                                 <h3>Know It All</h3>
//                                 <div className="description">
//                                     <p>Test your smarts with this comprehensive trivia game.</p> 
//                                     <a href="https://github.com/ashleyh5440/art-trivia-game"><Button variant="primary">View on GitHub</Button></a>
//                                     <a href="https://know-it-all-trivia.netlify.app/"><Button variant="primary">Visit site</Button></a>
//                                 </div>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <img className="carousel-image" src={project7Img} text="Sixth slide" />
//                             <Carousel.Caption>
//                                 <h3>Halloween Hangman</h3>
//                                 <div className="description">
//                                     <p>Escape the noose by guessing the correct word in the Halloween-themed hangman game.</p> 
//                                     <a href="https://github.com/ashleyh5440/hangman"><Button variant="primary">View on GitHub</Button></a>
//                                     <a href="https://ashleyh5440.github.io/hangman/"><Button variant="primary">Visit site</Button></a>
//                                 </div>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     </Carousel> */}
//                     </div>
//                 </Row>
//             </div>

//             <div className='box'>
//                 <Row id="contact">
//                 <div className="top-border">
//                     <h1>Contact</h1>
//                 </div>
//                <div id="icons" style={{marginTop: "15%", marginBottom: "20%", padding: "2%"}}>
//                     <div className='contact-icon'><a href="mailto:contact.ashleycreates@gmail.com"><img src={emailIcon} /></a></div>
//                     <div className='contact-icon'><a href="https://github.com/ashleyh5440"><img src={githubIcon} /></a></div>
//                     <div className='contact-icon'><a href="https://www.linkedin.com/in/ashley-hill-63b209154/"><img src={linkedIcon} /></a></div>
//                     <div className='contact-icon'><a href="https://docs.google.com/document/d/1ER7rm1hEVcNOiQHMEoPVYly3SFkebmBtu8tABmlulEM/edit"><img src={resumeIcon} /></a></div>
//                </div>
//                 </Row>
//             </div>
//         </section>
//     )
// }

// export default Home;