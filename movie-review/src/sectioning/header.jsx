import React from 'react';
import NavSearch from '../components/search';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div class="y-wrap">
        <nav class="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="./movies">Movies</NavLink>
            <NavLink to="./shows">Shows</NavLink>
            <NavSearch />
            <NavLink to="./login">Login/SignUp</NavLink>
            <NavLink to="./profile">Profile</NavLink>
            <NavLink to="/"><ion-icon name="library-outline"></ion-icon></NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
