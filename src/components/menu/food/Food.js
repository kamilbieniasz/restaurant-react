import React from 'react';
import "./Food.scss";

function Food(props) {
    const {backgroundDarken, backgroundURL, name} = props;
    return (
        <div className="food" style={{backgroundImage:`${backgroundDarken}, url(${backgroundURL})`}}>
            <span className="food__name">{name}</span>
        </div>
    );
}

export default Food;