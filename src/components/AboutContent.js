import "./AboutContentStyles.css";

import React from 'react'


import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about" > 
    <div className="left" >  
    <h1>Who Am I?</h1>

    <p> Experienced with a demonstrated history of working in the health care, energy, technology and higher education industries. Skilled in Business Process, Documentation, SDLC Management, Software as a Service (SaaS), business intelligence and Integration with experience in full software development life cycle and multiple implementations. Strong information technology professional with a Masters in Technology and Sciences</p>
    
    <Link to="/contact"> 
    <button className="btn">Contact</button>
    </Link>
    </div>
    
    
    </div>
  )
}

export default AboutContent