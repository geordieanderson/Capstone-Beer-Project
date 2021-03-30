import { Component } from 'react';
import './StyleNavBar.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';


class StyleNavBar extends Component {
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
            <div className="stylePage__navbar">
                {this.state.beers.map((beer)=>(
                    <Link key={beer.id} to={"/beers/" + beer.id} style={{ textDecoration: 'none' }} >
                        <h2 className="stylePage__title">{beer.style}</h2>
                    </Link>
                ))}       
            </div>
        );
    }
    }
    
    

export default StyleNavBar;