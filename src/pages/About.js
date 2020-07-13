import React from "react";
import "./About.css"


function About() {
  return (
    <div className="about">
      <h2 className="about__title">Technology Used</h2>
      <ul className="about__list">
        <li className="about__list-item">
          <a href="https://developer.nytimes.com" 
          className="about__list-item-link"
          target="_blank"
          rel="noopener noreferrer">Data provided by The New York Times</a>
        </li>
        <li>
          <a href="https://icons8.com/license"
             className="about__list-item-link"
             target="_blank"
          rel="noopener noreferrer"> Vector Creator</a>
        </li>
        <li>
          <a href="https://error404.fun/"
           className="about__list-item-link"
           target="_blank"
          rel="noopener noreferrer">404 illustration</a>
        </li>
      </ul>
    </div>
  );
}

export default About;
