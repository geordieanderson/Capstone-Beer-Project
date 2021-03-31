import React from 'react';
import './FindBeer.scss'
import Logo from '../../assets/images/hops_logo.png'
import { Link } from 'react-router-dom'



const FindBeer = () => {
    return (
      
    <div className="Find">
      <header className="Find-header">
        <h1>COMING SOON</h1> 
        <img className="logo" src={Logo} alt="logo"></img>
        <h1>PLEASE COME BACK LATER</h1>
        <Link to="/"><button>BACK TO HOME</button></Link>

      </header>
  
        </div>
    );
};

export default FindBeer;