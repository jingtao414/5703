
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
      <Typography variant="h3" className="website-title">
        Health Misinformation
      </Typography>

      {showDescription && (
        <Typography variant="h6" className="website-description">
          A platform to debunk common health myths and provide reliable information.这个网站目前功能就这么多，不禁让我想起莎士比亚的一首诗，网站的复杂性不在于功能而在于其设计。可惜我懒得设计，你也许好奇这段话都是废话，么错，我就在水字数来测试。
        </Typography>
      )}
      <div
        onClick={toggleDescription}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: '#333',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: '0.3s',
          marginLeft: '1120px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#555"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#333"}
      >
        {showDescription ? '-' : '+'}
      </div>
      <hr className="divider" />
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Link to="/smoking" className={`${location.pathname === "/smoking" ? "active-link" : ""} navbar-link`}>Smoking</Link>
          <Link to="/aerobicexecise" className={`${location.pathname === "/aerobicexecise" ? "active-link" : ""} navbar-link`}>BloodPressure</Link>
          <Link to="/reduceweight" className={`${location.pathname === "/reduceweight" ? "active-link" : ""} navbar-link`}>LosingWeight</Link>
          <Link to="/mortality" className={`${location.pathname === "/mortality" ? "active-link" : ""} navbar-link`}>Body Weight</Link>
          <Link to="/sugar" className={`${location.pathname === "/sugar" ? "active-link" : ""} navbar-link`}>Sugar</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import '../Navbar.css';

// function Navbar() {
//   const location = useLocation();
//   const [showDescription, setShowDescription] = useState(true);

//   return (
//     <AppBar position="static" style={{ backgroundColor: 'black', padding: '10px' }}>
//       <Typography variant="h4" style={{ fontFamily: 'cursive', color: 'white' }}>
//         Health Misinformation
//       </Typography>
//       {showDescription && (
//         <Typography variant="body1" style={{ fontFamily: 'cursive', color: 'white', marginBottom: '10px' }}>
//           Discover the truth behind popular health myths and misconceptions.
//         </Typography>
//       )}
//       <div onClick={() => setShowDescription(!showDescription)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
//         {showDescription ? <ArrowDropUpIcon color="action" /> : <ArrowDropDownIcon color="action" />}
//       </div>
//       <hr style={{ borderColor: 'white', margin: '10px 0' }}/>
//       <Toolbar>
//         <Link to="/smoking" className={`${location.pathname === "/smoking" ? "active-link" : ""} navbar-link`}>Smoking</Link>
//         <Link to="/aerobicexecise" className={`${location.pathname === "/aerobicexecise" ? "active-link" : ""} navbar-link`}>BloodPressure</Link>
//         <Link to="/reduceweight" className={`${location.pathname === "/reduceweight" ? "active-link" : ""} navbar-link`}>LosingWeight</Link>
//         <Link to="/mortality" className={`${location.pathname === "/mortality" ? "active-link" : ""} navbar-link`}>Body Weight</Link>
//         <Link to="/sugar" className={`${location.pathname === "/sugar" ? "active-link" : ""} navbar-link`}>Sugar</Link>
//         <Link to="/alcohol" className={`${location.pathname === "/alcohol" ? "active-link" : ""} navbar-link`}>Alcohol</Link>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
