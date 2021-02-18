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
                <section className="menu" id="menu">
                    <h1 className="menu__title">Menu</h1>
                    <div className="menu__content">
                        {!this.state.isLoading ? this.renderFoodTypes() : <em>Loading...</em>}
                    </div>
                </section>
            );
    }
}
export default Menu;