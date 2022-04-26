import React from 'react';
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
        <li>Home</li>
        <li>Pokédex</li>
        <li>Legendaries</li>
        <li>Documentation</li>
        <li>About us</li>
      </ul>
    </nav>
  );
}

export { Nav };
