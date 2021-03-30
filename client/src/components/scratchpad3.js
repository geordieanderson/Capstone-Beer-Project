//STYLENAVBAR//


import React from 'react';
import './StyleNavBar.scss';
import { Link } from 'react-router-dom';

const StyleNavBar = () => {
    return (
        <div className="stylePage__navbar">
            <Link to='/beers/AIPA'><h2 className="stylePage__title">IPA</h2></Link>
            <Link to='/beers/EIPA'><h2 className="stylePage__title">EIPA</h2></Link>
            <Link to='/beers/NEIPA'><h2 className="stylePage__title">NEIPA</h2></Link>
            <Link to='/beers/APA'><h2 className="stylePage__title">APA</h2></Link>
            <Link to='/beers/EPA'><h2 className="stylePage__title">EPA</h2></Link>
            <Link to='/beers/NEPA'><h2 className="stylePage__title">NEPA</h2></Link>
            <Link to='/beers/OST'><h2 className="stylePage__title">OAT STOUT</h2></Link>
            <Link to='/beers/DIST'><h2 className="stylePage__title">DRY STOUT</h2></Link>
            <Link to='/beers/BPO'><h2 className="stylePage__title">BR PORTER</h2></Link>
            <Link to='/beers/IPO'><h2 className="stylePage__title">IMP PORTER</h2></Link>
            <Link to='/beers/ALAG'><h2 className="stylePage__title">AMER LAGER</h2></Link>
            <Link to='/beers/VLAG'><h2 className="stylePage__title">VIENNA LAGER</h2></Link>
            <Link to='/beers/BPIL'><h2 className="stylePage__title">BO PILS</h2></Link>
            <Link to='/beers/GPIL'><h2 className="stylePage__title">GE PILS</h2></Link>
            <Link to='/beers/HWHT'><h2 className="stylePage__title">HEFE</h2></Link>
            <Link to='/beers/WITWHT'><h2 className="stylePage__title">WIT</h2></Link>
            <Link to='/beers/SOUR'><h2 className="stylePage__title">SOUR</h2></Link>
            <Link to='/beers/GOSOUR'><h2 className="stylePage__title">GOSE</h2></Link>
        </div>
    );
};

export default StyleNavBar;