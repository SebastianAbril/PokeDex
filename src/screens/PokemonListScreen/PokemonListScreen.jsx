import { useState, useEffect } from 'react';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import './PokemonListScreen.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { usePaginationList } from './usePaginationList';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=900';

export const PokemonListScreen = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [data, prev, next] = usePaginationList(pokemonList, searchedPokemon);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className="PokemonListScreen">
      <SearchBar onSearch={(value) => setSearchedPokemon(value)} />

      <main className="PokemonList">
        {data &&
          data.map((pokemon) => {
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
      <div className="buttonsContainer">
        <button className="prevButton button" onClick={prev}>
          Back
        </button>
        <button className="nextButton button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};
