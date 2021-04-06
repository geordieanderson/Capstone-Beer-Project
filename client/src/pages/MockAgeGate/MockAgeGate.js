import React from 'react';
import './MockAgeGate.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cover from '../../assets/images/login_cover.jpg'

const MockAgeGate = () => {
    return (
        <>
        <Header/>
        <div className="age__container">
        <img className="age__cover" src={Cover} alt="cover"/>
        <div className="age__info">
            <h2 className="age__headerTop">YOU MUST BE OF LEGAL DRINKING AGE TO ENTER</h2>
            <h4 className="age__headerBottom">PLEASE CONFIRM YOU ARE OF LEGAL CONSENT</h4>
            <div className="age__enter">
                <Link to='/home'><button>YES</button></Link>
                <button>NO</button>
            </div>  
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default MockAgeGate;