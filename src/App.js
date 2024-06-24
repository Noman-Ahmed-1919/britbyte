import React, { useEffect } from "react";

import { Router, Routes, Route } from "react-router-dom";


import './App.css';
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Digital from './components/Digital';
import Brands from './components/Brands';

import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import Header from './components/Header';
import About from "./components/About";
import Whatsapp from "./components/Whatsapp";

AOS.init({
  duration: 1200
});

function App() {


  return (


    <div className="App">


      <Home />
      <div>
        <About />

      </div>

      <div>
        <Brands />

      </div>
      <div>
        <Digital/>

      </div>

      <div>
        <Reviews />

      </div>

      <div>
        <Newsletter />
      </div>

      <div>
        <Footer />

      </div>


<div>
<Whatsapp/>

</div>



    </div>


  );
}

export default App;
