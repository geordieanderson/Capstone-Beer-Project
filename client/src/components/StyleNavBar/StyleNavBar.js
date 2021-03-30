import React from 'react';
import './StyleNavBar.scss';
import { Link } from 'react-router-dom';

const StyleNavBar = () => {
    return (
        <div className="stylePage__navbar">
            <Link to='/styles/IPA'><h2 className="stylePage__title">IPA</h2></Link>
            <Link to='/styles/EPA'><h2 className="stylePage__title">EIPA</h2></Link>
            <Link to='/styles/NEIPA'><h2 className="stylePage__title">NEIPA</h2></Link>
            <Link to='/styles/APA'><h2 className="stylePage__title">APA</h2></Link>
            <Link to='/styles/EPA'><h2 className="stylePage__title">EPA</h2></Link>
            <Link to='/styles/NEPA'><h2 className="stylePage__title">NEPA</h2></Link>
            <Link to='/styles/OST'><h2 className="stylePage__title">OAT STOUT</h2></Link>
            <Link to='/styles/DIST'><h2 className="stylePage__title">DRY STOUT</h2></Link>
            <Link to='/styles/BPO'><h2 className="stylePage__title">BR PORTER</h2></Link>
            <Link to='/styles/IPO'><h2 className="stylePage__title">IMP PORTER</h2></Link>
            <Link to='/styles/ALAG'><h2 className="stylePage__title">AMER LAGER</h2></Link>
            <Link to='/styles/VLAG'><h2 className="stylePage__title">VIENNA LAGER</h2></Link>
            <Link to='/styles/BPIL'><h2 className="stylePage__title">BO PILS</h2></Link>
            <Link to='/styles/GPIL'><h2 className="stylePage__title">GE PILS</h2></Link>
            <Link to='/styles/HWHT'><h2 className="stylePage__title">HEFE</h2></Link>
            <Link to='/styles/WITWHT'><h2 className="stylePage__title">WIT</h2></Link>
            <Link to='/styles/SOUR'><h2 className="stylePage__title">SOUR</h2></Link>
            <Link to='/styles/GOSOUR'><h2 className="stylePage__title">GOSE</h2></Link>
        </div>
    );
};

export default StyleNavBar;