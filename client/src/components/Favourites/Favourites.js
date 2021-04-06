
import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';

class Favourites extends Component {
    state = {
        favourites: "",     
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleClick = (e) => {
        this.props.history.push('/favourites');
    };



    render() {   
        return (
            <>
            <Header />
            <section>
                <form>
                <div>
                    <textarea className="card__notes" type="text" placeholder="Add tasting notes" onChange={this.handleChange}
                    value={this.state.value}></textarea>
                    <div className="button__container">
                        <button className="button__submit" type="submit" onClick={this.handleClick}> SUBMIT</button>
                        <button className="buttons__like" type="submit" onClick={this.handleClick}>🍻</button> 
                        <Link to={'/find'}><button className="buttons__find" type="submit">FIND</button></Link>
                    </div>
                </div>
                </form> 
            </section>
            <Footer/>
            </>
        );  
    }
}

export default Favourites

