import React, { Component } from 'react';
import muzykaWspolczesna from '../img/muzykaWspolczesna.jpg'

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
          startAnimationHeadline: false,
          startAnimationText: false,
          startAnimationImg: false,
          posYHeadline: 40,
          posYText: 40,
          posYImg: 40,
          opacityHeadline: 0.1,
          opacityText: 0.1,
          opacityImg: 0,
        };
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollPos);
        this.animHeadLineHistory();
        this.animTextHistory();
        this.animImg();
    }

    // animation HeadLine
    animHeadLineHistory = () => {
        if(this.state.startAnimationHeadline === true){

            if(this.state.opacityHeadline >= 0.1 && this.state.opacityHeadline < 1){
                this.setState({opacityHeadline: this.state.opacityHeadline + 0.01});
            }else if(this.state.opacityHeadline > 1){
                this.setState({opacityHeadline: 1});
            }

            if(this.state.posYHeadline <= 40 && this.state.posYHeadline > 0){
                this.setState({posYHeadline: this.state.posYHeadline - 1.5});
            }else if(this.state.posYHeadline < 0){
                this.setState({posYHeadline: 0});
            }
        }
        window.requestAnimationFrame(this.animHeadLineHistory);
    };

    // animation text
    animTextHistory = () => {
        if(this.state.startAnimationText === true){

            if(this.state.opacityText >= 0.1 && this.state.opacityText < 1){
                this.setState({opacityText: this.state.opacityText + 0.01});
            }else if(this.state.opacityText > 1){
                this.setState({opacityText: 1});
            }

            if(this.state.posYText <= 40 && this.state.posYText > 0){
                this.setState({posYText: this.state.posYText - 1.5});
            }else if(this.state.posYText < 0){
                this.setState({posYText: 0});
            }
        }
        window.requestAnimationFrame(this.animTextHistory);
    };

    // animation image
    animImg = () => {
        if(this.state.startAnimationImg === true){

            if(this.state.opacityImg >= 0 && this.state.opacityImg < 1){
                this.setState({opacityImg: this.state.opacityImg + 0.01});
            }else if(this.state.opacityImg > 1){
                this.setState({opacityImg: 1});
            }

            if(this.state.posYImg <= 40 && this.state.posYImg > 0){
                this.setState({posYImg: this.state.posYImg - 1.2});
            }else if(this.state.posYImg < 0){
                this.setState({posYImg: 0});
            }
        }
        window.requestAnimationFrame(this.animImg);
    };

    scrollPos = () => {
        var width = document.body.clientWidth;
        if(width > 1000){
            if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
                this.setState({startAnimationHeadline: true});
            }
            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                this.setState({startAnimationText: true});
            }
            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                this.setState({startAnimationImg: true});
            }
        }else{
            if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
                this.setState({startAnimationHeadline: true});
            }
            if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
                this.setState({startAnimationText: true});
            }
            if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
                this.setState({startAnimationImg: true});
            }
        }
    };

    render(){
        return (
            <div className="projects">
                <div className="boxTextFirstProject">
                    <div className="headlineFirstProject" style={{opacity:this.state.opacityHeadline, transform: "matrix(1, 0, 0, 1, 0, "+this.state.posYHeadline+")"}}>
                        Przeszłość, teraźniejszość i przyszłość w jednym - Marcin Flint
                    </div>
                    <div className="textFirstProject" style={{opacity:this.state.opacityText, transform: "matrix(1, 0, 0, 1, 0, "+this.state.posYText+")"}}>
                        "Siłą „Muzyki współczesnej” jest jej integralność, pomysł – to płyta dobrze napisana, fakt, ale przede wszystkim odpowiednio przemyślana,
                        skomponowana. Sprawdza się koncepcja różnych oblicz lat 90.. Zaczyna się od tego najlepiej nam znanego,
                        nowojorskiego z Biggiem na posterunku (choć ciekawsza jest tu postać ojca na drugim planie i zręczny bardzo,
                        powracający motyw Nikiego Laudy).".
                    </div>
                </div>
                <a href="https://preorder.pl/muzyka/polska/muzyka-wspolczesna-deluxe" target="_blank" rel="noopener noreferrer"><img src={muzykaWspolczesna} className="rightImgFirstProject" alt="plomien81toDlaTych" style={{opacity:this.state.opacityImg, transform: "matrix(1, 0, 0, 1, 0, "+this.state.posYImg+")"}}/></a>
            </div>
        );
    }
}


export default Projects;
