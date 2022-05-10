import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const hanldeChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div className="SearchBar">
      <p>
        800 <span>Pokemons</span> for you to choose your favorite
      </p>
      <input
        className="SearchBarInput"
        type="text"
        placeholder="Find your pokémon..."
        onChange={hanldeChange}
      />
    </div>
  );
}

export { SearchBar };
