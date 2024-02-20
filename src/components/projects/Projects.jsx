import { useState } from 'react';

function Projects () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const projects = [
        {title: "Gods and Beasts", img: "../assets/gods-and-beasts.png"},
        {title: "Box Office Dojo", img: ""},
        {title: "Coding Study Guide", img: ""},
        {title: "Portfolio", img: ""},
        {title: "Password Generator", img: ""},
        {title: "Personal Calendar", img: ""},
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1);
    };
    
    return (
       <section>
        <button className="pre-btn" onClick={prevSlide}><img src="" /></button>
        <button className="nxt-btn" onClick={nextSlide}><img src="" /></button>
        <div className="carousel">
            {projects.map((project, index) => (
                <div className={`card-container ${index === currentSlide ? 'active' : ''}`} key={index}>
                    <div className="card-content">
                        <div className="project-title">{project.title}</div>
                        <div className="project-img"><img src={project.img} /></div>
                    </div>
                </div>
            ))}
        </div>    
       </section>
    );
};

export default Projects;