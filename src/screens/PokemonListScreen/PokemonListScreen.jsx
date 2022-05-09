import { useState, useEffect } from 'react';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import './PokemonListScreen.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=14';

export const PokemonListScreen = () => {
  const [paginatedPokemons, setPaginatedPokemons] = useState();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPaginatedPokemons(data));
  }, []);

  return (
    <div className="PokemonListScreen">
      <SearchBar />
      <main className="PokemonList">
        {paginatedPokemons &&
          paginatedPokemons.results.map((pokemon) => {
            return (
              <PokemonCard
                onClick={() => console.log('hola')}
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            );
          })}
      </main>
    </div>
  );
};
