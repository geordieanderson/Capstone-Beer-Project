import React from 'react';
import './About.scss'
import Hops from '../../assets/images/about_hero.jpg'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CCBAA from '../../assets/images/ccbaa.png';
import CBN from '../../assets/images/canadian-beer-news.jpg';
import Untappd from '../../assets/images/Icon-untappd.svg';
import Bellwoods from '../../assets/images/bellwoods.jpg';
import BloodBros from '../../assets/images/bloodbros.png';
import CA from '../../assets/images/CA.png';
import GLB from '../../assets/images/glb.png';
import LeftField from '../../assets/images/leftfield.svg';



const About = () => {
    return (
    <>
    <Header/>
    <div className="about">
      <div className="about__leftContainer">
        <img className="about__hero" src={Hops} alt="hops-in-glass"/>
      </div>
      
      <div className="about__rightContainer">
        <h2 className="about__title1">ABOUT CRAFT BEER</h2>
        <h6 className="about__info1">Furthermore, an Imperial Stout near a Wolverine Beer panics, and the grizzly beer defined by the bottle of beer slurly satiates the tornado brew inside the mating ritual. A Rolling Rock from a Sierra Nevada accidentally sanitizes another foreign malt. The Pilsner inside the bud dry gives the last beer to the Keystone. For example, a booze indicates that a Red Stripe greedily falls in love with a bull ice about a pit viper.</h6>
        <h2 className="about__title2">OUR MISSION</h2>
        <h6 className="about__info2">A moronic Coors overwhelmingly takes a peek at a porter defined by a chain saw. A foreign Keystone thoroughly sanitizes an ESB toward the tornado brew. Any pin ball machine can cook cheese grits for an annoying hops, but it takes a real Rolling Rock to organize a fried polar bear beer. Indeed, a sake bomb beyond a Busch plays pinochle with a blue moon inside a Hommel Bier.</h6>
        </div>

    </div>
   
    <div className="partners">
        <h2 className="partners__title">OUR PARTNERS & FRIENDS</h2>
        <div className="partners__containerTop">
          <a href="https://ccba-ambc.org/"><img className="partners__logo" src={CCBAA} alt="Canadian-Craft-Brewers-Assoc-logo"/></a>
          <a href="https://www.canadianbeernews.com/"><img className="partners__logo" src={CBN} alt="Canadian-Beer-News-logo"/></a>
          <a href="https://www.untappd.com/"><img className="partners__logo" src={Untappd} alt="Untappd-logo"/></a>
        </div>
        <div className="partners__containerBottom">
          <a href="https://www.bellwoodsbrewery.com/"><img className="partners__logo" src={Bellwoods} alt="Bellwoods-logo"/></a>
          <a href="https://www.bloodbrothersbrewing.com/"><img className="partners__logo" src={BloodBros} alt="Blood-Brothers-logo"/></a>
          <a href="https://collectiveartsbrewing.com/"><img className="partners__logo" src={CA} alt="Collective-Arts-logo"/></a>
          <a href="https://www.greatlakesbeer.com/"><img className="partners__logo" src={GLB} alt="GLB-logo"/></a>
          <a href="https://www.leftfieldbrewery.ca/"><img className="partners__logo" src={LeftField} alt="Left-Field-logo"/></a>
          
        </div>
    </div>
  
    <Footer/>
    </>
    );
};

export default About;