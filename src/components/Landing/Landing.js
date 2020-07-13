import React from 'react';
import './Landing.css'
import landingImage from '../../images/reading.png'

function Landing() {
  return (
    <section className="landing">
      <img className="landing__image" 
        src={landingImage}
        alt="placeholder"/>
      <div className="landing__text">
        <h1 className="landing__header">The New York Times Best Sellers List</h1>
        <p className="landing__subHeader">Discover your next favorite book!</p>
      </div>
    </section>   
  );
}

export default Landing;