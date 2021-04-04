import React from 'react';
import './StyleTopRank.scss';
import Untappd from '../../assets/images/Icon-untappd.svg';


const StyleTopRank = ({beer}) =>{


return (
    <section>      
        <div className="header__container">
            <h1 className="header__title">TOP RANKED BEERS</h1>
            <img className="header__image" src={Untappd} alt='Untappd'/>
        </div>

        {beer.topRank.map((rank) =>{
        console.log(rank);

        return(
        <div key={rank.id}> 
            
        <div className="rank__container">         
            <div className="rank__card">   
                <div className="card__top">
                
                    <div className="card__left">
                        <img className='beer__label' src={rank.label} alt={rank.beerName}/>
                    </div>
                    <div className="card__right">     
                        <h4 className="beer__name">{rank.beerName}</h4>
                        <h4 className="beer__brewer">{rank.brewery}</h4>
                        <h4 className="beer__rating">{rank.rating}</h4>
                    </div>

                </div> 
                <div className="card__bottom">
                    <textarea className="card__notes" type="text" placeholder="Add tasting notes"></textarea>
                    <div className="button__container">
                        <button className="button__submit" type="submit">SUBMIT</button>
                        <button className="button__like" type="submit">LIKE</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        )
        })}
    </section> 
    );   
};

export default StyleTopRank;