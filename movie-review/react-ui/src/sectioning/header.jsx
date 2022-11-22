import React from 'react';
import NavSearch from '../components/search';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav")
      alert('hello')
  }

  return (
    <header>
      <div className="y-wrap">
        <nav className="navbar">
            <NavLink to="/" className="nav-title"><ion-icon name="library-outline"></ion-icon>The Backlog Center</NavLink>
            <NavLink to="#" onClick={showNavBar} className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </NavLink>
            <div ref={navRef} className="navbar-links" >
              <ul className="navbar-links-container">
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
