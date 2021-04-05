import React from 'react';
import './StyleTrending.scss';
//import Favourites from '../../components/Favourites/Favourites'
import { Link } from 'react-router-dom';


const StyleTrending = ({beer}) =>{


return (
    <section>      
        <div className="header__container">
            <h1 className="header__title">TRENDING NEAR ME</h1>
        </div>

        {beer.trending.map((rank) =>{
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
                    </div>

                </div> 
                <div className="card__bottom">
                    <textarea className="card__notes" type="text" placeholder="Add tasting notes"></textarea>
                    <div className="buttons">
                        <div className="buttons__left">
                            <Link><button className="buttons__submit" type="submit"> SUBMIT</button></Link>
                            <Link to="/find"><button className="buttons__find" type="submit">FIND</button></Link> 
                        </div>
                        <div className="buttons__right">
                            <Link to="/favourites"><button className="buttons__like" type="submit">🍻</button></Link>    
                        </div>
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

export default StyleTrending;