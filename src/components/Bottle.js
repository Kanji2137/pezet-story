import React, { Component } from 'react';

class Bottle extends Component {
    render(){
        return (
            <div className="container">
                <div className="whiteFilling"></div>
                <svg className="polylineStyle">
                    <polyline points="20,59 20,140 60,140 60,60 62,58 62,45 50,35 50,2 30,2 30,35 18,45 18,58 20,60" />
                </svg>
            </div>
        );
    }
}


export default Bottle;
