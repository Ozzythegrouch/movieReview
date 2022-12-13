import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavSearch from '../search';
import './navbar.css'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
        <nav className="navbar">
            <NavLink to="/" className="navTitle"><ion-icon name="library-outline"></ion-icon>The Backlog Center</NavLink>
            {(toggleMenu  || screenWidth > 980) && (
               <ul className="navbarLinksList">
                  <li><NavLink to="./movies" className="navItems">Movies</NavLink></li>
                  <li><NavLink to="./shows" className="navItems">Shows</NavLink></li>
                  <li><NavLink to="./login" className="navItems">Login</NavLink></li>
                  <li><NavLink to="./signup" className="navItems">Sign Up</NavLink></li>
                  <li><NavSearch className="navItems" /></li>
               </ul>
              )}
              <button onClick={toggleNav} className='navBtn'><ion-icon size="large" name="menu-outline"></ion-icon></button>
        </nav>
  )
}

export default NavBar