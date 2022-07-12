import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo from './logo.png';

function Nav() {
  return (
    <nav className="Nav">
      <figure className="Nav_logo_container">
        <img className="Nav_logo" src={logo} alt="pokemon" />
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
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
