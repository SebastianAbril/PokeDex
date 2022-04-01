import React from 'react';
import "./SectionCard.css"

function SectionCard({pokemon}){
    return(
        <div className='SectionCard'>
            <div className='SectionCardTitle'>
                {pokemon} <span className="SectionCardNumber"> #701</span>
            </div>
            
             <img className='SectionCardImage' src="https://assets.nintendo.com/image/upload/ar_4:3,c_pad,dpr_2.0,f_auto,q_auto,w_400/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/egdp/pokemon-2" alt="fenix" />
        </div>
    )
}

export {SectionCard}