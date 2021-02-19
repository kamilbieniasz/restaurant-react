import React, { Component } from 'react';
import "./Reservation.scss";

class Reservation extends Component {
    render() {
        return (
            <section className="reservation">
                <h1 className="reservation__title">Wybierz stolik, który chcesz zarezerwować</h1>
                <div className="reservation__hall">
                    <span className="reservation__bar">
                        <p>BAR</p>
                    </span>
                    <span className="reservation__table-column">
                        <span className="reservation__table"><p>4 <i class="fa fa-user"></i></p></span>
                        <span className="reservation__table"><p>2 <i class="fa fa-user"></i></p></span>
                        <span className="reservation__table"><p>4 <i class="fa fa-user"></i></p></span>
                    </span>
                    <span className="reservation__table-column">
                        <span className="reservation__table"><p>2 <i class="fa fa-user"></i></p></span>
                        <span className="reservation__table"><p>2 <i class="fa fa-user"></i></p></span>
                    </span>
                    <span className="reservation__table-column">
                        <span className="reservation__table"><p>4 <i class="fa fa-user"></i></p></span>
                        <span className="reservation__table"><p>2 <i class="fa fa-user"></i></p></span>
                        <span className="reservation__table"><p>4 <i class="fa fa-user"></i></p></span>
                    </span>
                    <span className="reservation__table-column">
                        <span className="reservation__table"><p>2 <i class="fa fa-user"></i></p></span>
                        <span className="reservation__table"><p>2 <i class="fa fa-user"></i></p></span>
                    </span>
                </div>
            </section>
        );
    }
}

export default Reservation;