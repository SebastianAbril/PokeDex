import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="Nav">
      <figure className="Nav_logo_container">
        <img
          className="Nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon"
        />
      </figure>
      <ul className="Nav_options">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/pepito">
            Pokédex
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/legendaries">
            Legendaries
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/documentation">
            Documentation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };