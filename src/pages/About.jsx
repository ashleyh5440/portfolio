import { useState } from 'react';
import aboutPic from '../assets/about-img.png';
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
                <div className="animate__animated animate__rotateIn animate__delay-2s" id="container-right">
                <p>After being introduced to coding through a day job, I decided to jump feet-first into web development. I quickly became fascinated with the challenges and creativity that come with combining art and technology.</p>
                </div>
            </div>
            <div className="experience-container">
                <h1>Experience</h1>
                <div className="badges-container">
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">HTML</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">CSS</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">JavaScript</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">React</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Handlebars</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">Node.js</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite">SQL</Badge>
                    <Badge bg="secondary" className="badge animate__animated animate__pulse animate__infinite	">MongoDB</Badge>
                </div>
                <p><a href="https://docs.google.com/document/d/1E_i5ZidIdzxLwg_h1SG0OUFw2ohQ1Ai-ghYQtK8gYmg/edit" target="_blank">View full resume →</a></p>
            </div>
        </section>
    )
};

export default About;
