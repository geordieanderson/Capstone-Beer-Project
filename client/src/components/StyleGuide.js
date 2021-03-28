import { Component }from 'react';
import './StyleGuide.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IPA from '../assets/images/IPA.png';
import Untappd from '../assets/images/Icon-untappd.svg';

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
        <div className="style__container">
        <img className="style__feature" src={IPA} alt='IPA'/>
        <div className="header__container">
            <h1 className="header__title">TOP RANKED BEERS</h1>
            <img className="header__image" src={Untappd} alt='Untappd'/>
        </div>
        <div className="style__card">
            {this.state.beers.map((beer)=>(
                <Link style={{ textDecoration: 'none' }}>
                <div className="style__ranked">
                
                    <div className="card__detailTop">                     
                        <h4 className="style__name">{beer.beerName}</h4>
                    </div>
                    <div className="card__detailBottom">
                        <h4 className="style__brewer">{beer.brewery}</h4>
                    </div>
                    <div className="card__image">
                        <img className='style__label' src={beer.label} alt={beer.beerName}/>
                    </div>
                    <div className="card__bottom">
                        <h4 className="style__rating">{beer.rating}</h4>
                    </div>
                </div>
                </Link>
            ))}       
        </div>
        </div>
        );
    }
    }

export default StyleGuide;