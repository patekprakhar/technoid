import "./Technoid2MgStyles.css";

import React, { Component } from 'react';

import technoid2_Img from "../assets/Technoid2Bg-Img.jpg";

class Technoid2MgStyles extends Component {
    render() {


        return (
            <div className="technoid2">
                
                <div className="mask2">
                    <img className="technoid-Img" src={technoid2_Img} alt="technoid2IMG" />
                </div>

                <div className="heading">

                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
export default Technoid2MgStyles;

