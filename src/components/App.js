import './App.scss';
import Navbar from './navbar/Navbar';
import React, { Component } from 'react';
import Introduction from './introduction/Introduction';
import AboutUs from './about_us/AboutUs';
import Menu from './menu/Menu';
import History from './history/History';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Introduction />
        <AboutUs />
        <Menu />
        <div className="container__parallax"></div>
        <History />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;