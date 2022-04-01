import React from 'react';
import {useState, useEffect} from 'react';
import "./Section.css";
import {SectionCard} from '../SectionCard';


const URL ="https://pokeapi.co/api/v2/pokemon/";




function Section(){

    const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);

    useEffect(()=>{},[])

   /*  const FetchData = () =>{
        fetch(URL)
        .then( (response)=> response.json())
        .then( (data) => setPokemon(data) )
        console.log(info.pokemon);
    } */

    return(
        <div className="Section">
            {pokemon.map( p=> (
                <div key={p}>{p}</div>
            ))}
        

    )
            <SectionCard pokemon={pokemon} />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            
        </div>
    )
}

export {Section};