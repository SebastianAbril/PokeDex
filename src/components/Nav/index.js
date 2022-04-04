import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <label className="NavContact">Contact us</label>
      <input className="NavSearch" placeholder="search" />
      <label className="NavSurprise">Surprise!</label>
    </div>
  );
}

export { Nav };
