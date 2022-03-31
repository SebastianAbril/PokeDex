import React from 'react';
import {useState} from 'react';
import "./Section.css";
import {SectionCard} from '../SectionCard';


const URL ="https://pokeapi.co/api/v2/";




function Section(){

    const [info, setInfo] = useState({});

    const [pokemon, setPokemon] = useState({});

    const FetchData = () =>{
        fetch(URL)
        .then( (response)=> response.json())
        .then( (data) => setInfo(data) )
        console.log(info.pokemon);

        fetch(info)
        .then( (response)=> response.json())
        .then( (data) => setPokemon(data) )
        console.log(pokemon)
    }

    
    return(
        <div className="Section">
            <button onClick={FetchData}  className="Go">GO!</button>
        

    )
            <SectionCard />
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