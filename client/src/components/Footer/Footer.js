import React from 'react';
import './Footer.scss';
import FB from '../../assets/images/Icon-facebook.svg';
import IG from '../../assets/images/Icon-instagram.svg';
import TW from '../../assets/images/Icon-twitter.svg';
import Untappd from '../../assets/images/ut-logo-bottles.svg';

const Footer = () => {
    return (
        <div className="footer">
            <h4 className="footer__copyright">©Canadian Craft Beer Guide. All Rights Reserved.</h4>
            <div className="footer__logoContainer">
                <a href="https://www.facebook.com/"><img className="footer__logo" src={FB} alt="facebook"></img></a>
                <a href="https://www.instagram.com/"><img className="footer__logo" src={IG} alt="instagram"></img></a>
                <a href="https://www.twitter.com/"><img className="footer__logo" src={TW} alt="twitter"></img></a>
                <a href="https://www.untappd.com/"><img className="footer__logo" src={Untappd} alt="untappd"></img></a>
            </div>
        </div>
    );
};

export default Footer;