import React from "react";
import "./Footer.css";
import GithubIcon from "../../images/GitHub.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">Created by Mabel Hernandez</p>
        <a className="footer__link" 
          href="https://github.com/MabelM1/nyt-bestsellers-list" 
          target="_blank"
          rel="noopener noreferrer">
          <img className="footer__icon" src={GithubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
