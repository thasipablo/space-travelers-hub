import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/planet.png';
import '../assets/styles/navigationBar.css';

const NavigationBar = () => {
  const [isActiveLink, setIsActiveLink] = useState(false);
  const handleActiveLink = () => setIsActiveLink(!isActiveLink);
  return (
    <nav className="navbar">
      <div id="logo">
        <img src={logo} alt="logo" />
        <span>Space Travelers&apos; Hub</span>
      </div>
      <div className="nav-items">
        <Link to="/" onClick={handleActiveLink}>
          Rockets
        </Link>
        <Link to="/missions" onClick={handleActiveLink}>
          Missions
        </Link>
        <Link to="/profile" onClick={handleActiveLink}>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
