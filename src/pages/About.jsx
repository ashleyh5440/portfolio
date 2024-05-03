import { useState } from 'react';
import aboutPic from '../assets/about-img.png';
import logo from '../assets/logo.png';
import Badge from 'react-bootstrap/Badge';
import 'animate.css';

function About() {
    return (
        <section className="about-section">
            <div className="bio-container">
                <div id="container-left">
                    <h1>About</h1>
                    <img className="animate__animated animate__slideInUp" id="about-img" src={aboutPic} />
                </div>
                <div className="animate__animated animate__rotateIn animate__delay-2s" id="container-right" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p>After being introduced to coding through a day job, I decided to jump feet-first into web development. I quickly became fascinated with the challenges and creativity that come with combining art and technology.</p>
                <img id="logo2" src={logo} />
                </div>
            </div>
            <div className="experience-container">
                <h1>Technical Skills</h1>
                <div className="badges-container">
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">HTML</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">CSS</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bulma CSS</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Bootstap</Badge>
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
                <p><a href="https://docs.google.com/document/d/1ER7rm1hEVcNOiQHMEoPVYly3SFkebmBtu8tABmlulEM/edit" target="_blank">View full resume →</a></p>
            </div>
        </section>
    )
};

export default About;
