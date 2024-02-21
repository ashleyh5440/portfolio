import { useState } from 'react';

import arrowImg from '../assets/arrow.png';
import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/portfolio.png';
import project5Img from '../assets/password-generator.png';
import project6Img from '../assets/personal-calendar.png';

function Projects () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const projects = [
        {title: "Gods and Beasts", img: project1Img},
        {title: "Box Office Dojo", img: project2Img},
        {title: "Coding Study Guide", img: project3Img},
        {title: "Portfolio", img: project4Img},
        {title: "Password Generator", img: project5Img},
        {title: "Personal Calendar", img: project6Img},
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1);
    };
    
    return (
       <section>
        <button className="pre-btn" onClick={prevSlide}><img src={arrowImg} /></button>
        <button className="nxt-btn" onClick={nextSlide}><img src={arrowImg} /></button>
        <div className="carousel">
            {projects.map((project, index) => (
                <div className={`card-container ${index === currentSlide ? 'active' : ''}`} key={index}>
                    <div className="card-content">
                        <div className="project-title">{project.title}</div>
                        <div className="project-img"><img src={project.img} style={{ width: '300px', height: '200px' }}/></div>
                    </div>
                </div>
            ))}
        </div>    
       </section>
    );
};

export default Projects;