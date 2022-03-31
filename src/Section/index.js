import React from 'react';
import {useState} from 'react';
import "./Section.css";
import SectionCard from '../SectionCard';


const URL ="https://pokeapi.co/api/v2/";

function Card(){
    return (
        <div className='SectionCard'>
            <label className='SectionCardTitle'>
                Hawlucha <span className="SectionCardNumber"> #701</span>
            </label>
             <img className='SectionCardImage' src="https://assets.nintendo.com/image/upload/ar_4:3,c_pad,dpr_2.0,f_auto,q_auto,w_400/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/egdp/pokemon-2" alt="fenix" />
        </div>
    )
}


function Section(){


    return(
        <div className="Section">
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
        </div>
    )
}

export {Section};