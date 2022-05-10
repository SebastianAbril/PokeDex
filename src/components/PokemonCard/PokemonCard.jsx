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
      <div className="PokemonCardInfo">
        <div className="PokemonCardInfoTitle">{name}</div>
        <ul className="PokemonCardInfoStats">
          <li>Ataque</li>
          <li>Defensa</li>
          <li>Tipo</li>
        </ul>
      </div>

      {pokemon && (
        <picture>
          <img className="PokemonCardImage" src={pokemon.sprites['front_default']} alt="Imageok" />
        </picture>
      )}
    </div>
  );
}

export { PokemonCard };
