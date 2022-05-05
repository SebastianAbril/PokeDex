import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logo from './Logo.png';

function Nav() {
  return (
    <nav className="Nav">
      <figure className="Nav_logo_container">
        <img className="Nav_logo" src={Logo} alt="pokemon" />
      </figure>
      <ul className="Nav_options">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/PokeDex">
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
