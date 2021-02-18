import React, { Component } from 'react';
import "./Home.scss";
import Navbar from '../navbar/Navbar';
import Introduction from '../introduction/Introduction';
import AboutUs from '../about_us/AboutUs';
import Menu from '../menu/Menu';
import History from '../history/History';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Introduction />
                <AboutUs />
                <Menu />
                <div className="container__parallax"></div>
                <History />
                <Contact />
            </div>
        );
    }
}

export default Home;