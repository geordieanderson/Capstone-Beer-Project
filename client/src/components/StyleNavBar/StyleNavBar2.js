import { Component } from 'react';
import './StyleNavBar.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const StyleNavBar2 =({beers}) => {

    console.log('props', beers)
        return(
            <div className="stylePage__navbar">
                {beers.map((beer)=>(
                   
                    <NavLink to={`/beers/${beer.id}`} key={beer.id} >
                        <h2 className="stylePage__title">{beer.style}</h2>
                    </NavLink>
                ))}     
            </div>
        );
    
}
    
    

export default StyleNavBar2;