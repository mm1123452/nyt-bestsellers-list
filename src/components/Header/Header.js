import React from 'react';
import './Header.css'

function Header() {
  return (
    <header>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a href="#" className="navigation__link">Home</a>
          </li>
          <li className="navigation__list-item">
            <a href="#" className="navigation__link">About</a>
          </li>
        </ul>
      </nav>
    </header>   
  );
}

export default Header;