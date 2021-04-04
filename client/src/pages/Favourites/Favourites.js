import React, { Component } from 'react';
import './Favourites.scss'
import axios from 'axios';

class Favourites extends Component {
    state = {
        tastingNotes: "",     
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleClick = (e) => {
        this.props.history.push('/favourites');
    };

    handleSubmit = (e) => {
        e.preventDefault();


    axios
    .post `http://localhost:8080/favourites`, {
        tastingNotes: this.state.tastingNotes
    }
    .then (response => {
        console.log('fave.js response', response)
        this.setState({
            tastingNotes: ""
        })
        this.props.history.push('/favourites')
    })
    .catch (error => console.log(error));
    }
    

    render() {
       
        return (
            <section>
                <h1>MY FAVOURITES</h1>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <textarea className="card__notes" type="text" placeholder="Add tasting notes" onChange={this.handleChange}
                    value={this.state.value}></textarea>
                    <div className="button__container">
                        <button className="button__submit" type="submit" onClick={this.handleClick}> SUBMIT</button>
                        <button className="button__like" type="submit">LIKE</button>
                    </div>
                </div>
                </form> 
            </section>
        );  
    }
}

export default Favourites