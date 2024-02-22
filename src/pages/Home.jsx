import { useState } from 'react';
import Projects from '../components/Projects';
import ContactLinks from '../components/ContactLinks';
import profilePic from '../assets/profilepic.png';

function Home() {
    return (
        <section>
            <div className="intro">
                <div className="container-left">
                    <h1>Hi, I'm Ashley</h1>
                    <br />
                <p>Front end developer with background experience in education, marketing, publishing, and web development.</p>
                </div>
                <div className="container-right">
                    <img id="profile-pic" src={profilePic} />
                </div>
            </div>
            <div className="projects-carousel-container">
                <Projects />
            </div>
            <div className="contact-links-container">
                <ContactLinks />
            </div>
        </section>
    );
};

export default Home;
