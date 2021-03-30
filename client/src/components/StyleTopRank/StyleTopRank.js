import React from 'react';
import './StyleTopRank.scss';
//import Untappd from '../../assets/images/Icon-untappd.svg';

const StyleTopRank = ({beer}) =>{

return (
        <>      
        {beer.topRank.map((rank) =>{
            console.log(rank);

return(
        <div>
            <div key={rank.id}>
            <h2>{rank.beerName}</h2>
            <h2>{rank.brewery}</h2>
            <h2>{rank.rating}</h2>     
            </div>
        </div>
    )
        })}
        </> 
    );   
};



export default StyleTopRank;