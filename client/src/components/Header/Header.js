import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/hops_logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
            <Link to ="/home"><img className="header__logo" src={Logo} alt="logo"></img></Link>
            <h1 className="header__siteName">CANADIAN CRAFT BEER GUIDE</h1>
        </div>
            <div className="header__nav">
                <NavLink to="/home" style={{ textDecoration: 'none' }}><h5 className="nav">HOME</h5></NavLink>
                <NavLink to="/about" style={{ textDecoration: 'none' }}><h5 className="nav">ABOUT</h5></NavLink>
                <NavLink to="/beers" style={{ textDecoration: 'none' }}><h5 className="nav">BEERS</h5></NavLink>
                <NavLink to="/find" style={{ textDecoration: 'none' }}><h5 className="nav">FIND</h5></NavLink>
                <NavLink to="/mock" style={{ textDecoration: 'none' }}><h5 className="nav">FAVES</h5></NavLink>
            </div>     
        </div>
    );
};

export default Header;