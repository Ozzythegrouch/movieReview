import React from 'react';
import NavSearch from '../components/search';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

const Header = () => {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(true)

  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (
    <header>
      <div className="y-wrap">
        <nav className="navbar">
            <NavLink to="/" className="nav-title"><ion-icon name="library-outline"></ion-icon>The Backlog Center</NavLink>
            <NavLink to="#" ref={navRef} onClick={handleClick} className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </NavLink>
            <div className="navbar-links" >
              <ul ref={navRef} onClick={handleClick} className="navbar-links-container">
                <li><NavLink to="./movies">Movies</NavLink></li>
                <li><NavLink to="./shows">Shows</NavLink></li>
                <li><NavSearch /></li>
                <li><NavLink to="./profile">Profile</NavLink></li>
              </ul>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
