import React from 'react';
import NavSearch from '../components/search';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="y-wrap">
        <nav className="navbar">
            <NavLink to="/"><ion-icon name="library-outline"></ion-icon>The Backlog Center</NavLink>
            <NavLink to="./movies">Movies</NavLink>
            <NavLink to="./shows">Shows</NavLink>
            <NavSearch />
            <NavLink to="./login">Login/SignUp</NavLink>
            <NavLink to="./profile">Profile</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
