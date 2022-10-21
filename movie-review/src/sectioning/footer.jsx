import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div class="y-wrap">
        <nav>
            <NavLink to="./contact">Contact</NavLink>
            <NavLink to="./about">About</NavLink>
            <p>Follow:</p>
            <NavLink><ion-icon name="logo-twitter"></ion-icon></NavLink>
            <NavLink><ion-icon name="logo-facebook"></ion-icon></NavLink>
            <NavLink><ion-icon name="logo-instagram"></ion-icon></NavLink>
            <NavLink><ion-icon name="logo-snapchat"></ion-icon></NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
