import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import project1Img from '../assets/gods-and-beasts.png';
import project2Img from '../assets/the-box-office-dojo.png';
import project3Img from '../assets/coding-study-guide.png';
import project4Img from '../assets/nhakbar.png';
import project5Img from '../assets/password-generator.png';
import project6Img from '../assets/know-it-all.png';

function Projects() {
  return (
    <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <a href="https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/"><img className="carousel-image" src={project1Img} text="First slide" /></a>
        <Carousel.Caption>
          <h3>Gods and Beasts</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://ashleyh5440.github.io/box-office-dojo/"><img className="carousel-image" src={project2Img} text="Second slide" /></a>
        <Carousel.Caption>
          <h3>The Box Office Dojo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://ashleyh5440.github.io/new-prework-study-guide/"><img className="carousel-image" src={project3Img} text="Third slide" /></a>
        <Carousel.Caption>
          <h3>Coding Study Guide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://nhakbar.netlify.app/"><img className="carousel-image" src={project4Img} text="Fourth slide" /></a>
        <Carousel.Caption>
          <h3>NH Akbar</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://ashleyh5440.github.io/password-generator/"><img className="carousel-image" src={project5Img} text="Fifth slide" /></a>
        <Carousel.Caption>
          <h3>Password Generator</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://art-trivia-game.onrender.com/"> <img className="carousel-image" src={project6Img} text="Sixth slide" /></a>
        <Carousel.Caption>
          <h3>Know It All</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects;