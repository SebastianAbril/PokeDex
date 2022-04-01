import {useState, useEffect} from 'react';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard';

const URL ="https://pokeapi.co/api/v2/pokemon?limit=5";


export const PokemonListScreen = () => {
    const [paginatedPokemons, setPaginatedPokemons] = useState();
    
    useEffect(()=>{
        fetch(URL)
        .then((response)=> response.json())
        .then((data) => setPaginatedPokemons(data))
    },[])

    return (
        <div className="PokemonListScreen">
            {paginatedPokemons && paginatedPokemons.results.map((pokemon) => {
                return (
                    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                );
            })}
        </div>
    );
};

