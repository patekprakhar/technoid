import React from 'react'

import Navbar  from "../components/Navbar"

import Footer from '../components/Footer'

import Technoid2Mg from "../components/Technoid2Mg";

import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <div>
    <Navbar />
    <Technoid2Mg heading="ABOUT." text=" This is me Harshit Patni. CEO & Founder of Technoid Inc."/>
    <AboutContent/>
    <Footer />
    </div>
  )
}

export default About;