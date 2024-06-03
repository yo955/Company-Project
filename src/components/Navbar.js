
import React from 'react';
import logoName from '../photos/logo-name.png';
import logoIcon from '../photos/logo-icon.png';
import './css/navbar.css';
export default function Navbar(){
    return(
  <nav className="navbar">
  <div className = "logo">
    <img src = {logoName} className ="logo-name" alt ="Logo Navbar"/>
    <img src = {logoIcon} className ="logo-icon" alt = "Logo Name"/>
  </div>
  <div className = "nav-links">
    <ul>
      <li> About Us</li>
      <li> Services</li>
      <li> Case Studies</li>
      <li> Blog</li>
      <li> How it works</li>
      <li> Hire</li>
    </ul>
  </div>
  <div className = "contact-btn">
    <button>Contact US</button>
  </div>
  </nav>
    );
}