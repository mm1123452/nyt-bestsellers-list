import React from "react";
import {Link} from 'react-router-dom'
import illustration from '../images/illustration-404.svg'
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound">
      <img className="notfound__image" src={illustration}/>
      <div className="notfound__content">
        <h2 className="notfound__text">Sorry, we couldn't find that page</h2>
        <Link className="notfound__link" to="/">Return to home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
