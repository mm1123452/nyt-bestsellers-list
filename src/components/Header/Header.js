import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/">Home</Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>   
  );
}

export default Header;