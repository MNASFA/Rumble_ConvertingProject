// 
import './HeaderSite.css'
import logo from '../assets/img/logo.png'
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    
        <nav className="navbar">
            <Container>
              <div className="navbar-logo">
                <a href="/">
                  <img style={{width:'130px'}} src={logo} alt="Your Logo" />
                </a>
              </div>
              <div className="NavBar-Full-Width">
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/AboutUs">About Us</NavLink></li>
                  <li><NavLink to="/Services">Services</NavLink></li>
                  <li><NavLink to="/Blog">Blog</NavLink></li>
                  <li><NavLink to="/Contact">Contact</NavLink></li>
                  <li><NavLink to="/Marques">Marques</NavLink></li>
                </ul>
              </div>
              <div className="navbar-toggle" onClick={toggleNavbar}>
                {isOpen ? <FaTimes className='icon' /> : <FaBars className='icon' />}
              </div>
            </Container>
        <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
                <li><NavLink to="/Blog">Blog</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Marques">Marques</NavLink></li>
          </ul>
        </div>
      </nav>
    
  );
};

export default Navbar;
