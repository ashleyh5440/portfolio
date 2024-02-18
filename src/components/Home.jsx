import React from "react";
import About from "./About";
import Projects from "./Projects"

function Home() {
    return (
        <section className="base" id="header-img">
        <img id="base-img" src="./src/assets/ds.png"/>
          <div className="y-a-buttons">
            <button id="y-button">Y</button>
            <button id="a-button">A</button>
          </div>
          <div className="x-b-buttons">
            <button id="x-button">X</button>
            <button id="b-button">B</button>
          </div>
          <div className="fadeIn">
            <img id="profile-picture" src="./src/assets/profile-picture.png"/>
            <img id="name" src="./src/assets/name.png"/>
          </div>
      </section>
    );
}

export default Home;