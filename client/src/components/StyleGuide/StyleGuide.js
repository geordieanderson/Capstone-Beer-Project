import React from 'react';
import './StyleGuide.scss';
//import { Link } from 'react-router-dom';
import IBU from '../../assets/images/IBU_logo.png';
import ABV from '../../assets/images/abv_logo.svg';
import TEMP from '../../assets/images/temp_logo.png';
import Savoury from '../../assets/images/burger.png';
import Dessert from '../../assets/images/dessert.png';
import Cheese from '../../assets/images/cheese.png';
//import Untappd from '../../assets/images/Icon-untappd.svg';

const StyleGuide = ({beer}) =>{

    return(
    <section>
        <div className="style__header">
            <h2 className="style__title">{beer.style}</h2>
        </div>
        
        <div className="description">     
            <img className="descrtiption__image" src={beer.styleImg} alt='style-image'/>
            <div className="description__container">
                <h2 className="description__title">DESCRIPTION </h2>  
                <h5 className="descrtiption__info">{beer.description}</h5>    
            </div>
        </div>

        <div className="serving">
            <div className="style__info--title">SERVING GUIDELINES 
                <div className="style__drink--type">
                    <div className="container__glass">
                        <img className="style__glass" src={beer.glassImg} alt='tulip'/>
                        <h1 className="style__serving">{beer.glassware}</h1>
                    </div>

                    <div className="container__temp">
                        <img className="style__temp" src={TEMP} alt='Temp-levels'/>
                        <h1 className="style__serving">Serving Temp:{beer.servingTemp}</h1>
                    </div>
                </div>

            <div className="xxx">
                <div className="style__drink--details">  
                    <div className="container__ibu">
                        <img className="style__hops" src={IBU} alt='IBU-levels'/>
                            <div className="container__ibuLevels">
                                <h4 className="style__serving">IBU MIN:{beer.ibuMin}</h4>
                                <h4 className="style__serving">IBU MAX:{beer.ibuMax}</h4>
                            </div>
                    </div>
                </div>

                <div className="style__drink--details">       
                    <div className="container__abv">
                        <img className="style__alcohol" src={ABV} alt='ABV-levels'/>
                            <div className="container__abvLevels">
                                <h4 className="style__serving">ABV% MIN:{beer.abvMin}</h4>
                                <h4 className="style__serving">ABV% MAX:{beer.abvMax}</h4>
                            </div>
                    </div>
                </div> 
                </div>    
            </div>
            </div>
            
            <div className="food">
                <div className="style__info--title">SUGGESTED FOOD PAIRINGS
                    <div className="foodContainer">
                        <img className="style__savoury" src={Savoury} alt='savoury'/>
                        <h1 className="style__food">{beer.foodSavoury}</h1>
                        <img className="style__dessert" src={Dessert} alt='dessert'/>
                        <h1 className="style__food">{beer.foodSweet}</h1>
                        <img className="style__cheese" src={Cheese} alt='cheese'/>
                        <h1 className="style__food">{beer.foodCheese}</h1>
                    </div>
                </div>
            </div> 
        

       
        
    </section>
    )
}

export default StyleGuide;