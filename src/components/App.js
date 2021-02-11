import './App.scss';
import Navbar from './navbar/Navbar';
import React, { Component } from 'react';
import Introduction from './introduction/Introduction';
import AboutUs from './about_us/AboutUs';
import Menu from './menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Introduction />
        <AboutUs />
        <Menu />
      </div>
    );
  }
}

export default App;