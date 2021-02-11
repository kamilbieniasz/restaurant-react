import React, { Component } from 'react';
import Food from './food/Food';
import "./Menu.scss";
import Service from "../../service/restaurantService";

const service = new Service();

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = { 
            types: null,
            isLoading: true
        }
    }

    async componentDidMount(){
        this.setState({
            types: await service.getTypes(),
            isLoading: false
        }, () => {
            console.log(this.state.types);
        })
    }

    renderFoodTypes = () =>{
        return this.state.types.map((type, key) => {
            console.log(type.url);
            return <Food key={key} backgroundDarken="linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) )" backgroundURL={type.url} name={type.name} />
        })
    }
    
    render() {
            return (
                <section className="menu">
                    <h1 className="menu__title">Menu</h1>
                    <div className="menu__content">
                        {!this.state.isLoading ? this.renderFoodTypes() : <em>Loading...</em>}

                        {/* <Food backgroundDarken="linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) )" backgroundURL="xD" name="pizza"></Food> */}
                {/* <span className="menu__box"><h2 className="menu__box-title">Pizza</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Hamburgery</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Nuggetsy</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Przekąski</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Dania obiadowe</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Zupy</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Sałatki</h2></span>
                <span className="menu__box"><h2 className="menu__box-title">Desery</h2></span> */}
                    </div>
                </section>
            );
    }
}
export default Menu;