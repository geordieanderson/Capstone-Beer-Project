import React from 'react';
import './FavouritesMock.scss'
import { Link } from 'react-router-dom';


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CASOUR from '../../assets/images/ca-sour.jpg';
import Canuck from '../../assets/images/canuck.jpg';
import Octopus from '../../assets/images/octopus.jpg';
import Eephus from '../../assets/images/eephus.png';
import Naughty from '../../assets/images/naughty.jpeg';

const FavouritesMock = () =>{
    return (
    <>
    <Header/>
        <section>

        <div className="mock">
            <h1 className="mock__title">MY FAVOURITES</h1>
        </div>

        <div className="mock__container">

        <div className="mock__card">
            <div className="mock__data">
                <img className='mock__label' src={CASOUR} alt="CASour-beer-label"/>
                <h4 className="mock__name">Blueberry, Chocolate, Coffee & Vanilla Sour</h4>
                <h4 className="mock__brewer">Collective Arts Brewing</h4>
            </div>
            <div className="mock__input">
                <textarea className="mock__notes" type="text" placeholder="Add tasting notes"></textarea>
                <div className="mock__btnContainer">  
                    <div className="mock__btnContainerLeft">     
                        <button className="buttons__submit" type="submit">➕</button>
                        <button className="buttons__submit" type="submit">✖</button>
                    </div> 
                        <Link to="/find"><button className="buttons__find" type="submit">📍</button></Link> 
                    </div>
                </div>
        </div>

        <div className="mock__card">
            <div className="mock__data">
                <img className='mock__label' src={Canuck} alt="Canuck-beer-label"/>
                <h4 className="mock__name">Canuck</h4>
                <h4 className="mock__brewer">Great Lakes Brewery</h4>
            </div>
            <div className="mock__input">
                <textarea className="mock__notes" type="text" placeholder="Add tasting notes"></textarea>
                <div className="mock__btnContainer">  
                    <div className="mock__btnContainerLeft">     
                        <button className="buttons__submit" type="submit">➕</button>
                        <button className="buttons__submit" type="submit">✖</button>
                    </div> 
                        <Link to="/find"><button className="buttons__find" type="submit">📍</button></Link> 
                    </div>
                </div>
        </div>

        <div className="mock__card">
            <div className="mock__data">
                <img className='mock__label' src={Octopus} alt="octopus-beer-label"/>
                <h4 className="mock__name">Octopus Wants to Fight</h4>
                <h4 className="mock__brewer">Great Lakes Brewery</h4>
            </div>
            <div className="mock__input">
                <textarea className="mock__notes" type="text" placeholder="Add tasting notes"></textarea>
                <div className="mock__btnContainer">  
                    <div className="mock__btnContainerLeft">     
                        <button className="buttons__submit" type="submit">➕</button>
                        <button className="buttons__submit" type="submit">✖</button>
                    </div> 
                        <Link to="/find"><button className="buttons__find" type="submit">📍</button></Link> 
                    </div>
                </div>
        </div>

        <div className="mock__card">
            <div className="mock__data">
                <img className='mock__label' src={Eephus} alt="eephus-beer-label"/>
                <h4 className="mock__name">Eephus</h4>
                <h4 className="mock__brewer">Left Field Brewery</h4>
            </div>
            <div className="mock__input">
                <textarea className="mock__notes" type="text" placeholder="Add tasting notes"></textarea>
                <div className="mock__btnContainer">  
                    <div className="mock__btnContainerLeft">     
                        <button className="buttons__submit" type="submit">➕</button>
                        <button className="buttons__submit" type="submit">✖</button>
                    </div> 
                        <Link to="/find"><button className="buttons__find" type="submit">📍</button></Link> 
                    </div>
                </div>
        </div>

        <div className="mock__card">
            <div className="mock__data">
                <img className='mock__label' src={Naughty} alt="beer-label"/>
                <h4 className="mock__name">Naughty Neighbour</h4>
                <h4 className="mock__brewer">Nickel Brook Brewing Co</h4>
            </div>
            <div className="mock__input">
                <textarea className="mock__notes" type="text" placeholder="Add tasting notes"></textarea>
                <div className="mock__btnContainer">  
                    <div className="mock__btnContainerLeft">     
                        <button className="buttons__submit" type="submit">➕</button>
                        <button className="buttons__submit" type="submit">✖</button>
                    </div> 
                        <Link to="/find"><button className="buttons__find" type="submit">📍</button></Link> 
                    </div>
                </div>
        </div>

        </div>

        </section> 
    <Footer/>
    </>
    );   
};

export default FavouritesMock;