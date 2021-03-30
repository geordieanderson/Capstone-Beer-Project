import React from 'react';
import './StyleTopRank.scss';
import Untappd from '../../assets/images/Icon-untappd.svg';

const StyleTopRank = ({beer}) =>{

return (
    <>      
        <div className="header__container">
            <h1 className="header__title">TOP RANKED BEERS</h1>
            <img className="header__image" src={Untappd} alt='Untappd'/>
        </div>

        {beer.topRank.map((rank) =>{
        console.log(rank);

        return(
        <div className="cardContainer">
        <div className="style__card">
            <div key={rank.id}>
                <div className="style__ranked">
                    <div className="card__detailTop">     
                        <h4 className="style__name">{rank.beerName}</h4>
                    </div>
                    
                    <div className="card__detailBottom">
                        <h4 className="style__brewer">{rank.brewery}</h4>
                    </div>

                    <div className="card__image">
                        <img className='style__label' src={rank.label} alt={rank.beerName}/>
                    </div>

                    <div className="card__bottom">
                        <h4 className="style__rating">{rank.rating}</h4>
                    </div> 
                </div>
            </div>
        </div>
        </div>
        )
        })}
    </> 
    );   
};

export default StyleTopRank;