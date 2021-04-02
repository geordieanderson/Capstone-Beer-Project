import React from 'react';
import './StyleNavBar.scss';
import { NavLink } from 'react-router-dom';


const StyleNavBar =({beers}) => {

    console.log('props', beers)
        return(
            <div className="stylePage__navbar">
                <div className="stylePage__navbarTop">
                    {beers.slice(0, 6).map((beer)=>(
                    <NavLink to={`/beers/${beer.id}`} key={beer.id} style={{ textDecoration: 'none' }}>
                        <h2 className="stylePage__title">{beer.navTitle}</h2>   
                    </NavLink>
                    ))}   
                </div>

                <div className="stylePage__navbarMiddle">
                    {beers.slice(6, 12).map((beer)=>(
                    <NavLink to={`/beers/${beer.id}`} key={beer.id} style={{ textDecoration: 'none' }}>
                        <h2 className="stylePage__title">{beer.navTitle}</h2>   
                    </NavLink>
                    ))}   
                </div>

                <div  className="stylePage__navbarBottom">
                    {beers.slice(12, 18).map((beer)=>(
                    <NavLink to={`/beers/${beer.id}`} key={beer.id} style={{ textDecoration: 'none' }}>
                        <h2 className="stylePage__title">{beer.navTitle}</h2>
                    </NavLink>
                    ))}  
                </div>
            </div>
        );
    
}
    
    

export default StyleNavBar;