import React, { useEffect } from "react";

import { Router, Routes, Route } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";


import './App.css';
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Digital from './components/Digital';
import About from './components/About';
import Brands from './components/Brands';

import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import Header from './components/Header';

AOS.init({
  duration: 1200
});

function App() {


  return (


<div className="App">

        <div>
          <Home />
        </div>
        <div>
     <About/>

        </div>
        <Brands />

        <div>
        <Reviews />

        </div>
        <div>
          <Digital />

        </div>
        <div>
          {/* <Newsletter /> */}
        </div>
        <Footer />

     </div>


  );
}

export default App;
