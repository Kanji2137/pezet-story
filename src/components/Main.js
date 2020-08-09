import React, { Component } from 'react';

import WelcomePage from './WelcomePage'
import Navbar from './Navbar'
import HomeHistory from './HomeHistory'
import Projects from './Projects'
import Footer from './Footer'

import TweenLite from 'gsap';

class Main extends Component {
    componentDidMount() {
        this.cursorPos();
    }
    cursorPos = () => {
        document.addEventListener("DOMContentLoaded", function(event) {
            var cursor = document.querySelector(".custom-cursor");
            var links = document.querySelectorAll("a");
            var initCursor = false;
          
            for (var i = 0; i < links.length; i++) {
              var selfLink = links[i];
          
              selfLink.addEventListener("mouseover", function() {
                cursor.classList.add("custom-cursor--link");
              });
              selfLink.addEventListener("mouseout", function() {
                cursor.classList.remove("custom-cursor--link");
              });
            }
          
            window.onmousemove = function(e) {
              var mouseX = e.clientX;
              var mouseY = e.clientY;
          
              if (!initCursor) {
                // cursor.style.opacity = 1;
                TweenLite.to(cursor, 0.3, {
                  opacity: 1
                });
                initCursor = true;
              }
          
              TweenLite.to(cursor, 0, {
                top: mouseY + "px",
                left: mouseX + "px"
              });
            };
          
            window.onmouseout = function(e) {
              TweenLite.to(cursor, 0.3, {
                opacity: 0
              });
              initCursor = false;
            };
          });
    };
    render(){
        return (
            <div className="main">
                <Navbar/>
                <WelcomePage/>
                <HomeHistory/>
                <Projects/>
                <Footer/>
               <div className="custom-cursor"></div>
            </div>
        );
    }
}


export default Main;
