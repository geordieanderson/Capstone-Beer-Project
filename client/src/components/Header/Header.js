import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/hops_logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
            <img className="header__logo" src={Logo} alt="logo"></img>
            <h1 className="header__siteName">CANADIAN CRAFT BEER</h1>
        </div>
            <div className="header__nav">
                <NavLink to="/" style={{ textDecoration: 'none' }}><h5 className="nav">HOME</h5></NavLink>
                <NavLink to="/" style={{ textDecoration: 'none' }}><h5 className="nav">INFO</h5></NavLink>
                <NavLink to="/" style={{ textDecoration: 'none' }}><h5 className="nav">FIND BEER</h5></NavLink>
            </div>     
        </div>
    );
};

export default Header;