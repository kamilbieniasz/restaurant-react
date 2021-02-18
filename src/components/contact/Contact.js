import React, { Component } from 'react';
import Switch from "react-switch";
import "./Contact.scss";
import map from '../../assets/svg/map.svg'
import streetView from '../../assets/svg/street-view-doll.svg'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
    }
        //let isChecked = false;
        
        //const map = document.querySelector('.contact__map');
        //const streetView = document.querySelector('.contact__street-view');
        //const changeMapViewBtn = document.querySelector('.contact__change-map-view');

        changeMapView = () => {
            document.querySelector('.contact__map').classList.toggle('contact__map--disabled');
            document.querySelector('.contact__street-view').classList.toggle('contact__map--disabled')
            this.setState({
                isChecked: !this.state.isChecked
            })
        };
        render(){
        return (
            <section className="contact" id="contact">
                <h1 className="contact__title">Kontakt</h1>
                <div className="contact__content-container">
                    <h2 className="contact__content">Ristorante</h2>
                    <p className="contact__content">00-000 Miasto</p>
                    <p className="contact__content">ulica 39</p>
                    <p className="contact__content">123-456-789</p>
                    <p className="contact__content">Ristorante@ristorante.pl</p>
                </div>
                <iframe ref={this.map} className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.36554559107!2d21.99570071583654!3d50.04198322459296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb018c3f4fbd%3A0x5033f39cd685a056!2sGaleria%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1613404893012!5m2!1spl!2spl"></iframe>
                <iframe ref={this.streetView} className="contact__street-view contact__map--disabled" src="https://www.google.com/maps/embed?pb=!4v1613405365912!6m8!1m7!1sFn5S_P09spe8e_tOoZXVbw!2m2!1d50.04186440617641!2d21.99783165271863!3f32.580071779271904!4f0!5f0.7820865974627469"></iframe>
                {/* <button className="contact__change-map-view" onClick={changeMapView}></button> */}
                <span className="contact__switch">
                    <img src={map}/>
                    <Switch checked={this.state.isChecked} onChange={this.changeMapView} uncheckedIcon={false} checkedIcon={false}/>
                    <img src={streetView} />
                </span>
            </section>
        );
        }
}

export default Contact;