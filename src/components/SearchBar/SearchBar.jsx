import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <p>
        800 <span>Pokemons</span> for you to choose your favorite
      </p>
      <input className="SearchBarInput" type="text" placeholder="Find your pokémon..." />
    </div>
  );
}

export { SearchBar };

/* function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }; 

    return( [
            <input
                className="TodoSearch"
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChange}
            />,
            <p>{searchValue}</p>
        ]
    )
}
 */
