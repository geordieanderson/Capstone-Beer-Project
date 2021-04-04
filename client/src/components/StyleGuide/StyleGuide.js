import React from 'react';
import './StyleGuide.scss';
import IBU from '../../assets/images/IBU_logo.png';
import ABV from '../../assets/images/abv_logo.svg';
import TEMP from '../../assets/images/temp_logo.png';
import Savoury from '../../assets/images/burger.png';
import Dessert from '../../assets/images/dessert.png';
import Cheese from '../../assets/images/cheese.png';


const StyleGuide = ({beer}) =>{

return(

    <div className="guide">

        <div className="guideLeft">
            <div className="type">
                <h2 className="type__name">{beer.style}</h2>
                <img className="type__image" src={beer.styleImg} alt='style-image'/>
            </div>
        </div>

        <div className="guideRight">
            <div className="description">     
                <h2 className="description__title">DESCRIPTION</h2>  
                <h6 className="descrtiption__info">{beer.description}</h6>                  
            </div>
    
            <div className="specs">
                <h2 className="specs__title">SPECS</h2>
                <div className="specs__container">
                    <div className="ibu__container">
                        <img className="ibu__logo" src={IBU} alt='IBU-levels'/>
                            <div className="hops__container">
                                <h6 className="hops__range">IBU MIN:{beer.ibuMin}</h6>
                                <h6 className="hops__range">IBU MAX:{beer.ibuMax}</h6>
                            </div>     
                    </div>
     
                    <div className="abv__container">
                        <img className="abv__logo" src={ABV} alt='ABV-levels'/>
                            <div className="alcohol__container">
                                <h6 className="alcohol__range">ABV% MIN:{beer.abvMin}</h6>
                                <h6 className="alcohol__range">ABV% MAX:{beer.abvMax}</h6>
                            </div>
                    </div>  
                </div>
            </div> 
    
            <div className="serving">
                <h2 className="serving__title">SERVING GUIDELINES</h2>
                    <div className="serving__container">
                        <div className="glass__container">
                            <img className="glass__logo" src={beer.glassImg} alt='tulip'/>
                            <h6 className="glass__type">{beer.glassware}</h6>
                        </div>
    
                        <div className="temp__container">
                            <img className="temp__logo" src={TEMP} alt='Temp-levels'/>
                            <h6 className="temp__temp">Serving Temp:{beer.servingTemp}</h6>
                        </div>
                    </div>  
            </div>
           
            <div className="food">
                <h2 className="food__title">SUGGESTED FOOD PAIRINGS</h2>
                    <div className="food__container">
                        <img className="food__savoury" src={Savoury} alt='savoury'/>
                        <h6 className="food__item">{beer.foodSavoury}</h6>
                        <img className="food__dessert" src={Dessert} alt='dessert'/>
                        <h6 className="food__item">{beer.foodSweet}</h6>
                        <img className="food__cheese" src={Cheese} alt='cheese'/>
                        <h6 className="food__item">{beer.foodCheese}</h6>
                    </div>
            </div>         
        </div>  

    </div>
    )
}
    
export default StyleGuide;