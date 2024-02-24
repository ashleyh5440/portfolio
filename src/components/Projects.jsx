import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/portfolio.png';
import project5Img from '../assets/password-generator.png';
import project6Img from '../assets/personal-calendar.png';

function Projects() {
  return (
    <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
        <img className="carousel-image" src={project1Img} text="First slide" />
        <Carousel.Caption>
          <h3>Gods and Beasts</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={project2Img} text="Second slide" />
        <Carousel.Caption>
          <h3>The Box Office Dojo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={project3Img} text="Third slide" />
        <Carousel.Caption>
          <h3>Coding Study Guide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={project4Img} text="Third slide" />
        <Carousel.Caption>
          <h3>Portfolio</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={project5Img} text="Third slide" />
        <Carousel.Caption>
          <h3>Password Generator</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={project6Img} text="Third slide" />
        <Carousel.Caption>
          <h3>Personal Calendar</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects;