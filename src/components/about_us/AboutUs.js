import React from 'react';
import "./AboutUs.scss";

function AboutUs(props) {
    return (
        <section className="about-us" id="about-us">
            <h1 className="about-us__title">O nas</h1>
            <div className="about-us__content-container">
                <span className="about-us__image"></span>
                <span className="about-us__content">
                    <h2 className="about-us__content-title">Lorem Ipsum</h2>
                    <p className="about-us__content-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate expedita, voluptatibus natus cumque voluptas magni? 
                        Ipsa voluptas saepe aspernatur id alias nostrum vitae dolorem. Voluptatum esse asperiores sunt. Sint, ut?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate expedita, voluptatibus natus cumque voluptas magni? 
                        Ipsa voluptas saepe aspernatur id alias nostrum vitae dolorem. Voluptatum esse asperiores sunt. Sint, ut?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate expedita, voluptatibus natus cumque voluptas magni? 
                        Ipsa voluptas saepe aspernatur id alias nostrum vitae dolorem. Voluptatum esse asperiores sunt. Sint, ut?
                    </p>
                </span>
            </div>
        </section>
    );
}
export default AboutUs;