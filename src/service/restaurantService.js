import React, { Component } from 'react';


const basicUrl = "https://db-restaurant.herokuapp.com/";

class restaurantService extends Component {
    getTypes = async () => {
        return await fetch(basicUrl + 'types')
            .then(response => {return response.json()})
            .then(data => {return data});
    }    
}

export default restaurantService;