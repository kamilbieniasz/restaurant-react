import React from 'react';
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar(props) {

    return (
        <nav className="navbar">
            <h1 className="navbar__title"><HashLink className="navbar__link" to="/#introduction">Ristorante</HashLink></h1>
            <ul className="navbar__list">
                <li className="navbar__content"><HashLink className="navbar__link" to="/#about-us">O nas</HashLink></li>
                <li className="navbar__content"><HashLink className="navbar__link" to="/#menu">Menu</HashLink></li>
                <li className="navbar__content"><Link className="navbar__link" to="/reservation">Rezerwacje</Link></li>
                <li className="navbar__content"><HashLink className="navbar__link" to="/#history">Historia</HashLink></li>
                <li className="navbar__content"><HashLink className="navbar__link" to="/#contact">Kontakt</HashLink></li>
                <li className="navbar__content"><i className="fa fa-twitter navbar__twitter"></i></li>
                <li className="navbar__content"><i className="fa fa-facebook-f navbar__facebook"></i></li>
                <li className="navbar__content"><i className="fa fa-instagram navbar__instagram"></i></li>
            </ul>
        </nav>
    );
}
export default Navbar;