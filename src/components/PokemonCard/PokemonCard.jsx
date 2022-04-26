import { useState, useEffect } from 'react';
import './PokemonCard.css';

//sprites.front_default

function PokemonCard({ name, url, onClick }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [url]);

  return (
    <div onClick={onClick} className="PokemonCard">
      <div className="PokemonCardTitle">
        {name} <span className="PokemonCardNumber"> #701</span>
      </div>

      {pokemon && (
        <img className="PokemonCardImage" src={pokemon.sprites['front_default']} alt="Imageok" />
      )}
    </div>
  );
}

export { PokemonCard };
