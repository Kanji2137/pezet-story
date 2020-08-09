import React, { Component } from 'react';

import plomien81toDlaTych from '../img/plomien81toDlaTych.jpg';

class HomeHistory extends Component {
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
        if(width > 540){
            if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
                this.setState({startAnimationHeadline: true});
            }
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                this.setState({startAnimationText: true});
            }
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                this.setState({startAnimationImg: true});
            }
        }else{
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                this.setState({startAnimationHeadline: true});
            }
            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                this.setState({startAnimationText: true});
            }
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                this.setState({startAnimationImg: true});
            }
        }
    };

    render(){
        return (
            <div className="homeHistory">
                <div className="boxTextStory">
                    <div className="headlineHistory" style={{opacity:this.state.opacityHeadline, transform: "matrix(1, 0, 0, 1, 0, "+this.state.posYHeadline+")"}}>
                        Paweł z Ursynowa, czyli kiedys PZU, dzisiaj Pezet
                    </div>
                    <div className="textHistory" style={{opacity:this.state.opacityText, transform: "matrix(1, 0, 0, 1, 0, "+this.state.posYText+")"}}>
                    Pezet w 1998 roku wraz z Onarem założył grupę Płomień 81. 
                    27 sierpnia 1999 roku z ramienia wytwórni Alsfalt Records został wydany album zatytułowany "Na zawsze będzie płonął".
                    Również w 1999 roku Pezet wraz z Onarem zostali zaproszeni przez DJ-a 600V do udziału przy nagrywaniu albumu pt. Szejsetkilovolt.
                    W 2000 roku Pezet i Onar niezadowoleni z promocji debiutanckiego album zdecydowali się na podpisanie kontraktu z wytwórnią muzyczną R.R.X..
                    26 października tego samego roku został wydany drugi album pt. Nasze dni. W nagraniach wystąpili liczni goście m.in. Waco, Stasiak, 
                    Fenomen i młodszy brat Pezeta – Małolat. Wkrótce potem Onar i Pezet zdecydowali się na współpracę z innymi twórcami hip-hopowymi.
                    Kapliński podjął współpracę z Eldoką i Dizkretem z którymi założył formację Obrońcy Tytułu, wraz z którą występował podczas festiwali freestyle’owych.
                    </div>
                </div>
                <img src={plomien81toDlaTych} className="rightImg" alt="plomien81toDlaTych" style={{opacity:this.state.opacityImg, transform: "matrix(1, 0, 0, 1, 0, "+this.state.posYImg+")"}}/>
            </div>
        );
    }
}


export default HomeHistory;
