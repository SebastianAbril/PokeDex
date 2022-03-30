import React from 'react';
import "./Section.css";
import SectionCard from '../SectionCard' 



function Section(){
    return(
        <div className="Section">
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            
        </div>
    )
}

export {Section};