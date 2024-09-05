import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/soda">Soda</NavLink>
      <NavLink to="/chips">Chips</NavLink>
      <NavLink to="/fresh-sardines">Fresh Sardines</NavLink>
    </nav>
  );
}

export default Navbar;
