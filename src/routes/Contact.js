import React from 'react'

import Navbar  from "../components/Navbar"

import Footer from '../components/Footer'

import Technoid2Mg from '../components/Technoid2Mg'

import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Technoid2Mg heading="CONTACT." text=" Lets conversation here."/>
    <Form />
    <Footer />
    </div>
  )
}


export default Contact