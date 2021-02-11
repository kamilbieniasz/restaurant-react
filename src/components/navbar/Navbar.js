import React from 'react';
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar(props) {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">Ristorante</h1>
            <ul className="navbar__list">
                <li className="navbar__content">O nas</li>
                <li className="navbar__content">Menu</li>
                <li className="navbar__content">Historia</li>
                <li className="navbar__content">Kontakt</li>
                <li className="navbar__content"><i className="fa fa-twitter navbar__twitter"></i></li>
                <li className="navbar__content"><i className="fa fa-facebook-f navbar__facebook"></i></li>
                <li className="navbar__content"><i className="fa fa-instagram navbar__instagram"></i></li>
            </ul>
        </nav>
    );
}
export default Navbar;