import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Expertise from "./routes/Expertise";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom"

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
    );
}

export default App;

/* this our parrent the app.js, we will call children pages(Home, Project, About us and Contact Us page here) */
