import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar'
import Home from "./sections/Home/Home"
import About from "./sections/About/About"
import Project from './sections/Project/Project';
import Contact from "./sections/Contact/Contact"
import Footer from './components/Footer/Footer'
import Skills from "./sections/Skills/Skills";



function App() {
  return (
    <>
      <div className='body'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;
