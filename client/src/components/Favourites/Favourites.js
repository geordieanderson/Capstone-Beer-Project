


import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Favourites extends Component {
    state = {
        favourites: [],     
    };

    componentDidMount() {
        axios
        .get("http://localhost:8080/favourites")
        .then( response => {
          this.setState({
            favourites: response.data
          })
        })
      }

    render() {   
        return (
            <>
            <Header />
            <section>
                {this.state.favourites.map((favourite) =>(
                    <Link key={favourite.id} to={'/favourites'}>
                        <h2>{favourite.beerName}</h2>
                        <h4>{favourite.brewery}</h4>
                    </Link>
                ))}
            </section>
            <Footer/>
            </>
        );  
    }
}

export default Favourites

