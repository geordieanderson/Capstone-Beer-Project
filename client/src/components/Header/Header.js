import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/hops_logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
            <Link to ="/"><img className="header__logo" src={Logo} alt="logo"></img></Link>
            <h1 className="header__siteName">CANADIAN CRAFT BEER GUIDE</h1>
        </div>
            <div className="header__nav">
                <NavLink to="/about" style={{ textDecoration: 'none' }}><h5 className="nav">ABOUT</h5></NavLink>
                <NavLink to="/beers" style={{ textDecoration: 'none' }}><h5 className="nav">STYLES</h5></NavLink>
                <NavLink to="/find" style={{ textDecoration: 'none' }}><h5 className="nav">FIND BEER</h5></NavLink>
            </div>     
        </div>
    );
};

export default Header;