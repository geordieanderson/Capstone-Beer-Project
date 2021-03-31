import React from 'react';
import './StyleNavBar.scss';

import { NavLink } from 'react-router-dom';


const StyleNavBar =({beers}) => {

    console.log('props', beers)
        return(
            <div className="stylePage__navbar">
                {beers.map((beer)=>(
                   
                    <NavLink to={`/beers/${beer.id}`} key={beer.id} style={{ textDecoration: 'none' }}>
                        <h2 className="stylePage__title">{beer.style}</h2>
                    </NavLink>

                ))}     
            </div>
        );
    
}
    
    

export default StyleNavBar;