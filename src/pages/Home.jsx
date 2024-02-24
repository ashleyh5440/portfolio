import { useState } from 'react';
import Projects from '../components/Projects';
import ContactLinks from '../components/ContactLinks';
import profilePic from '../assets/profilepic.png';

function Home() {
    return (
        <section>
            <div className="intro">
                <div className="container-left">
                    <h2 class="animate__animated animate__zoomIn">Hi, I'm Ashley</h2>
                    <br />
                <p class="animate__animated animate__fadeIn animate__delay-2s">Front end developer with background experience in education, marketing, publishing, and web development.</p>
                </div>
                <div className="container-right">
                    <img id="profile-pic" src={profilePic} />
                </div>
            </div>
            <div className="projects-carousel-container">
                <h1>Recent Projects</h1>
                <Projects />
            </div>
            <div className="contact-links-container">
                <h1>Contact Info</h1>
                <ContactLinks />
            </div>
        </section>
    );
};

export default Home;
