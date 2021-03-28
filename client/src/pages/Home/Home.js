import React from 'react';
import './Home.scss'
import Logo from '../../assets/images/hops_logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      
    <div className="App">
      <header className="App-header">
        <h1>CRAFT BEER SITE</h1>
        <h3>Project Startski!</h3>
        <img className="logo" src={Logo} alt="logo"></img>
        <Link to="/styles"><button>GO TO STYLES</button></Link>
      </header>
  
        </div>
    );
};

export default Home;