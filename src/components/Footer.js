import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p> 110 Washington Ave.  </p>
                            <p> North Haven | CT 06473 </p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            Ph: 203-239-0148 Cell:6602385412
                        </h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        hpatni@keyseries.us
                        </h4>
                    </div>
                </div>
                <div className="right">
                <h4> About the company</h4>
                <p>This is me Harshit Patni. CEO & Founder of Technoid Inc. </p>
                <div className="social">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
 
                
 

                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
