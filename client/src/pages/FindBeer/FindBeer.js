import React from 'react';
import './FindBeer.scss'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../assets/images/find_hero.jpg'


const FindBeer = () => {
  return (
    <>
    <Header/>
    <div className="find__container">
    <img className="find__hero" src={Hero} alt="empty-glass"/>
      <div className="find__heading">
        <h2 className="find__title">WE ARE OUT HAVING A BEER,</h2>
        <h2 className="find__title">PLEASE COME BACK LATER</h2>
      </div>
      
    </div>
    <Footer/>
    </>
    );
};

export default FindBeer;