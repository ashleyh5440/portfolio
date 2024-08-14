import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

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
            gsap.to(container, {
                scrollTrigger: {
                    trigger: container,
                    start: '2px 100%', 
                    end: 'bottom', 
                    toggleActions: 'play reverse play reverse', 
                },
                opacity: 1,
                y: 100,
                duration: 2,
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
                        <br />
                        <p style={{fontFamily: "Englebert, cursive", fontSize: "17px"}}>Web developer and wordsmith</p>
                    </Row>
                </div>

               <section>
                    <div className="box">
                        <div className="top-border" style={{overflow: "hidden"}}><h1>About</h1></div>
                        <Row id="about">
                        <Col className="bio-pic-container">
                            <img src={bioPic} />
                        </Col>
                        <Col>
                            <p style={{padding: "60px 20px", lineHeight: "1.6"}}>
                            I blend creativity with code to create websites that not only look great but also tell your story in a way that resonates with audiences. I help people and businesses establish their unique voice, craft web content and copy, and combine art and technology to build intuitive, user-friendly sites that engage visitors and drive results. </p>
                            <div>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row className="skills-box">
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Web Development</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Writing</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    {/* <ul>
                                                        <li>HTML</li>
                                                        <li>Handlebars</li>
                                                        <li>CSS</li>
                                                        <li>Bootstrap</li>
                                                        <li>Bulma</li>
                                                        <li>JavaScript</li>
                                                        <li>React</li>
                                                        <li>jQuery</li>
                                                        <li>Node.js</li>
                                                        <li>Express.js</li>
                                                        <li>SQL</li>
                                                        <li>MongoDB</li>
                                                        <li>RESTful APIs</li>
                                                        <li>UI/UX Design</li>
                                                    </ul> */}
                                                        <div className="badge-box">
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
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                        <div className="wri-badge-box">
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Web Content</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Ad Copy</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Email Marketing</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Social Media Posts</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Content Editing</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Proofreading</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Mission Statements</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Brand Development</Badge>
                                                            <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Taglines</Badge>
                                                        </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                        </Row>
                        </div>

                    <div className="box">
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
                                        <p>Mythology card game.<br />
                                        Created with MongoDB, Express.js, React, Node.js, CSS</p>
                                        <a href="https://gods-and-beasts.onrender.com/" target="_blank"><Button variant="primary">Visit site</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project7">
                                    </div>
                                    <div className="project-description">
                                        <h3>Elsewhere Emporium</h3>
                                        <p>Online fantasy magic shop.<br />
                                        Created with React, CSS</p>
                                        <a href="https://github.com/ashleyh5440/elsewhere-emporium" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project2">
                                    </div>
                                    <div className="project-description">
                                        <h3>The Box Office Dojo</h3>
                                        <p>The perfect place to curate your own personal movie watch list.<br />
                                        Created with HTML, CSS, JavaScript</p>
                                        <a href="https://github.com/ashleyh5440/box-office-dojo" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project3">
                                    </div>
                                    <div className="project-description">
                                        <h3>Coding Study Guide</h3>
                                        <p>Coding information, resources, and tips all in one place.<br />
                                        Created with HTML, CSS, JavaScript</p>
                                        <a href="https://github.com/ashleyh5440/new-prework-study-guide" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project4">
                                    </div>
                                    <div className="project-description">
                                        <h3>Password Generator</h3>
                                        <p>Generate a secure random password.<br />
                                        Created with HTML, CSS, JavaScript</p>
                                        <a href="https://github.com/ashleyh5440/password-generator" target="_blank"><Button variant="primary">View on GitHub</Button></a>

                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project5">
                                    </div>
                                    <div className="project-description">
                                        <h3>Know It All</h3>
                                        <p>Test your smarts with this comprehensive trivia game.<br />
                                        Created with React, Node.js, CSS</p>
                                        <a href="https://github.com/ashleyh5440/know-it-all" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="project-img" id="project6">
                                    </div>
                                    <div className="project-description">
                                        <h3>Halloween Hangman</h3>
                                        <p>Escape the noose by guessing the correct word in the Halloween-themed hangman game.<br />
                                        Created with HTML, CSS, JavaScript</p>
                                        <a href="https://github.com/ashleyh5440/hangman" target="_blank"><Button variant="primary">View on GitHub</Button></a>
                                    </div>
                                </Carousel.Item>
                        </Carousel>
                      </Col>
                    </Row>
                    </div>

                    <div className="box">
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
            </div>
        </section>
    )
}

export default Home;