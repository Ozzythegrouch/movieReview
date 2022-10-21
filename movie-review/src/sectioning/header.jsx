import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div class="y-wrap"></div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="./movies">Movies</NavLink>
        <NavLink to="./shows">Shows</NavLink>
        <NavLink to="./login">Login/SignUp</NavLink>
        <NavLink to="./profile">Profile</NavLink>
        <NavLink to="/"><ion-icon name="videocam-outline"></ion-icon></NavLink>
      </nav>
    </header>
  );
};

export default Header;
