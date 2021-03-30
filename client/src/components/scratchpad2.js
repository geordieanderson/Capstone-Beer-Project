
//styleguide//

import { Component }from 'react';
import './StyleGuide.scss';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import IPA from '../../assets/images/IPA.png';
import IBU from '../../assets/images/IBU_logo.png';
import ABV from '../../assets/images/abv_logo.svg';
import TEMP from '../../assets/images/temp_logo.png';
import Savoury from '../../assets/images/Icon-savoury.svg';
import Dessert from '../../assets/images/Icon-dessert.svg';
import Cheese from '../../assets/images/Icon-cheese.svg';
//import Untappd from '../../assets/images/Icon-untappd.svg';

class StyleGuide extends Component {

    state = {
        beers: [],
    }
      
    componentDidMount(){
        axios.get('http://localhost:8080/beers').then((response)=>{
            this.setState({
                beers: response.data,
            });
        });
    }
    
    
render(){
    return(
    <div>
        {this.state.beers.map((beer)=>( 
            <div>
                <div className="style__header">
                    <h2 className="style__title">{beer.style}</h2>
                </div>
                <div className="style__container">
                    <img className="style__feature" src={IPA} alt='IPA'/>
                        <div className="style__info--title">DESCRIPTION   
                            <h1 className="style__description">{beer.description}</h1>
                        </div>
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

                            <div className="style__drink--details">  
                                <div className="container__ibu">
                                <img className="style__hops" src={IBU} alt='IBU-levels'/>
                                <div className="container__ibuLevels">
                                <h4 className="style__serving">IBU MIN:{beer.ibuMin}</h4>
                                <h4 className="style__serving">IBU MAX:{beer.ibuMax}</h4>
                                </div>
                                </div>
                                <div className="container__abv">
                                <img className="style__alcohol" src={ABV} alt='ABV-levels'/>
                                <div className="container__abvLevels">
                                <h4 className="style__serving">ABV% MIN:{beer.abvMin}</h4>
                                <h4 className="style__serving">ABV% MAX:{beer.abvMax}</h4>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="style__info--title">FOOD PAIRINGS
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
                </div>
           
        ))}
    </div>
    )
    }
}



export default StyleGuide;