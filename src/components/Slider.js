import React, { Component } from 'react';

import A from '../img/muzykaWspolczesna.jpg'
import B from '../img/radioPezet.jpg'
import C from '../img/muzykaKlasyczna.jpg'
import D from '../img/muzykaRozrywkowa.jpg'
import E from '../img/muzykaEmocjonalna.jpg'
class Slider extends Component {
    componentDidMount() {
        var images = [A, B, C, D, E];

        var x = 0;
    
        var imgs = document.getElementById('img');
    
        setInterval(slider, 9000);
    
    
        function slider() {
    
          if (x < images.length) {
            x = x + 1;
          } else {
            x = 1;
          }
          imgs.innerHTML = "<img src=" + images[x - 1] + ">";
        }
    }

    render(){
        return (
            <div className="slider">
                <div className="blackSheet"></div>
                <div id="img">
                    <img src={E} alt="picturess"/>
                </div>
            </div>
        );
    }
}


export default Slider;
