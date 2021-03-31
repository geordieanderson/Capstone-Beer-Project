import React from 'react';
import './About.scss'
import Logo from '../../assets/images/hops_logo.png'
import { Link } from 'react-router-dom'



const About = () => {
    return (
      
    <div className="About">
      <header className="About-header">
        <h1>ABOUT PAGE</h1>
        
        <img className="logo" src={Logo} alt="logo"></img>
        <Link to="/"><button>GO HOME</button></Link>

      </header>
  
        </div>
    );
};

export default About;