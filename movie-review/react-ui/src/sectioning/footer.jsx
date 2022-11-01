import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="y-wrap">
        <nav>
            <NavLink to="./contact">Contact</NavLink>
            <NavLink to="./about">About</NavLink>
            <NavLink to="/"><ion-icon name="library-outline"></ion-icon></NavLink>
            <div className="follow-buttons">
              <p>Follow:</p>
              <NavLink><ion-icon name="logo-twitter"></ion-icon></NavLink>
              <NavLink><ion-icon name="logo-facebook"></ion-icon></NavLink>
              <NavLink><ion-icon name="logo-instagram"></ion-icon></NavLink>
              <NavLink><ion-icon name="logo-github"></ion-icon></NavLink>
            </div>  
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
