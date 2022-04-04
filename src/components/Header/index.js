import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <label className="HeaderAbout">About</label>
      <label className="HeaderTitle">Pokedex</label>
      <div className="HeaderMode">
        <label className="HeaderModeDark">Dark</label>
        <label className="HeaderModeLight">Light</label>
      </div>
    </header>
  );
}

export { Header };
