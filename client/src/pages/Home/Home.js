import React from 'react';
import './Home.scss'
import Logo from '../../assets/images/hops_logo.png'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import ABOUT from '../../assets/images/about_cover.jpg';
import STYLES from '../../assets/images/styles_cover.jpg'
import FIND from '../../assets/images/find_cover.jpg'


const Home = () => {
    return (
      
    <div className="App">
      <header className="App-header">
        <h1>CRAFT BEER SITE</h1>
        <h3>Project Startski!</h3>
        <img className="logo" src={Logo} alt="logo"></img>
        <Link to="/beers"><button>GO TO STYLES</button></Link>

        <Carousel>
          <Carousel.Item>
          <Link to="/about"><img className="home__cover" src={ABOUT} alt="about-site"/></Link>
          <Carousel.Caption>
            <h3>ABOUT CRAFT BEER</h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <Link to="/beers"><img className="home__cover" src={STYLES} alt="explore-styles"/></Link>
          <Carousel.Caption>
            <h3>EXPLORE STYLES</h3>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <Link to="/find"><img className="home__cover" src={FIND} alt="find-beer"/></Link>
          <Carousel.Caption>
            <h3>FIND BEER</h3>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </header>
  
        </div>
    );
};

export default Home;