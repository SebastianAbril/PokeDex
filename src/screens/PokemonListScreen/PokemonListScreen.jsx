import { useState, useEffect } from 'react';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import './PokemonListScreen.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000';
/* let NumberOfPokemons; */

export const PokemonListScreen = () => {
  const [paginatedPokemons, setPaginatedPokemons] = useState();
  const [searchedPokemon, setSearchedPokemon] = useState('');

  console.log(paginatedPokemons);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPaginatedPokemons(data));
  }, []);

  return (
    <div className="PokemonListScreen">
      <SearchBar onSearch={(value) => setSearchedPokemon(value)} />
      <main className="PokemonList">
        {paginatedPokemons &&
          paginatedPokemons.results
            .filter((pokemon) => {
              return pokemon.name.includes(searchedPokemon);
            })
            .map((pokemon) => {
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
