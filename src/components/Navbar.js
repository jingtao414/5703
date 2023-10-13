
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../Navbar.css';
import { useState } from 'react';

function Navbar() {

  const location = useLocation();
  const [showDescription, setShowDescription] = useState(true);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }

  return (
    <div className="navbar-container">
    <img src="/logo1.png" alt="Visual Health Logo" className="logo" />
  

      <hr className="divider" />
      <AppBar position="fixed" style={{ backgroundColor: '#4E9064' }}>
        <Toolbar className='Toolbar'>
          <Link to="/smoking" className={`${location.pathname === "/smoking" ? "active-link" : ""} navbar-link`}>Smoking</Link>
          <Link to="/aerobicexecise" className={`${location.pathname === "/aerobicexecise" ? "active-link" : ""} navbar-link`}>BloodPressure</Link>
          <Link to="/reduceweight" className={`${location.pathname === "/reduceweight" ? "active-link" : ""} navbar-link`}>LosingWeight</Link>
          <Link to="/mortality" className={`${location.pathname === "/mortality" ? "active-link" : ""} navbar-link`}>Body Weight</Link>
          <Link to="/sugar" className={`${location.pathname === "/sugar" ? "active-link" : ""} navbar-link`}>Sugar beverage health effect</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
