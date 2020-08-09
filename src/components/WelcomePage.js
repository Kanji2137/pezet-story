import React, { Component } from 'react';

import Slider from './Slider'
import SlideLeft from './SlideLeft'

class WelcomePage extends Component {
    render(){
        return (
            <section className="hero">
                <SlideLeft/>
                <Slider/>
            </section>
        );
    }
}


export default WelcomePage;
