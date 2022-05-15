import { useState, useEffect } from 'react';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import './PokemonListScreen.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchFormat } from '../../components/SearchFormat/SearchFormat';
import { useInfiniteScroll } from './useInfiniteScroll';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=900';

export const PokemonListScreen = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const [displayData] = useInfiniteScroll(pokemonList);

  /* console.log(paginatedPokemons); */
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, []);

  return (
    <div className="PokemonListScreen">
      <SearchBar onSearch={(value) => setSearchedPokemon(value)} />
      <SearchFormat />
      <main className="PokemonList">
        {pokemonList &&
          pokemonList.results
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
