import "./TechnoidMgStyles.css";

import React from 'react';

import IntroImg from "../assets/Intro-bg.jpg";

import { Link } from "react-router-dom";

const TechnoidMg = () => {
    return (
        <div className="technoid">
            <div className="mask">
                <img className="Intro-Img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>Connecting Talent</p>
                <h1>Technoid USA Inc.</h1>
                <div>
                    <Link to="/contact" className="btn2 btn-light"> Contact </Link>
                </div>
            </div>

        </div>
    )
};

export default TechnoidMg;





