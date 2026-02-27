import React from "react";
import { NavLink } from 'react-router-dom';

// import '../sass/modules/Header.scss';

function Header() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/aboutus">About Us</NavLink>
        <br />
        <NavLink to="/lifestyle">Life Style</NavLink>
        <br />
        <NavLink to="#">Contact Us</NavLink>
      </nav>
    </>
  );
}

export default Header;
