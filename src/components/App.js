import './App.scss';
import Navbar from './navbar/Navbar';
import React, { Component } from 'react';
import Introduction from './introduction/Introduction';
import AboutUs from './about_us/AboutUs';
import Menu from './menu/Menu';
import History from './history/History';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './home/Home';
import Reservation from './reservation/Reservation';

class App extends Component {
  render() {
    return (
      // <div className="container">
      //   <Navbar/>
      //   <Introduction />
      //   <AboutUs />
      //   <Menu />
      //   <div className="container__parallax"></div>
      //   <History />
      //   <Contact />
      //   <Footer />
      // </div>
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/reservation" component={Reservation} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;