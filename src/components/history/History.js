import React from 'react';
import "./History.scss";

function History(props) {
    return (
        <section className="history" id="history">
            <h1 className="history__title">Nasza historia</h1>
            <div className="history__content-container">
                <span className="history__image"></span>
                <span className="history__content">
                    <h2 className="history__content-title">1980</h2>
                        <p className="history__content-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Amet totam sequi delectus a maxime earum autem fugit alias reiciendis architecto veritatis, quis eos aut, id at, magni repudiandae itaque unde.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Amet totam sequi delectus a maxime earum autem fugit alias reiciendis architecto veritatis, quis eos aut, id at, magni repudiandae itaque unde.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Amet totam sequi delectus a maxime earum autem fugit alias reiciendis architecto veritatis, quis eos aut, id at, magni repudiandae itaque unde.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Amet totam sequi delectus a maxime earum autem fugit alias reiciendis architecto veritatis, quis eos aut, id at, magni repudiandae itaque unde.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Amet totam sequi delectus a maxime earum autem fugit alias reiciendis architecto veritatis, quis eos aut, id at, magni repudiandae itaque unde.
                        </p>
                </span>
            </div>
        </section>
    );
}

export default History;