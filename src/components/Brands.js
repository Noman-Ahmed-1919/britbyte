import React from "react";
import Marquee from 'react-fast-marquee';

import img1 from "../images/brand1.png"
import img2 from "../images/brand2.png"
import img3 from "../images/brand3.png"
import img4 from "../images/bramd4.png"
import img5 from "../images/brnad5.png"
import img6 from "../images/brnad6.png"
import img7 from "../images/brnad7.png"




const Brands = () =>{
    return(
        <>
        
<div id="brandsec1">

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">

<h1 className="h1brand">BRANDS WE &nbsp; HAVE &nbsp; WORKED WITH</h1>

<Marquee direction="left" speed={100} delay={5}>

                <img id="img1" src={img1} alt="" />
                <img id="img1" src={img2} alt="" />
                <img id="img1" src={img3} alt="" />
                <img id="img1" src={img4} alt="" />
                <img id="img1" src={img5} alt="" />
                <img id="img1" src={img6} alt="" />
                <img id="img1" src={img7} alt="" />
               



                </Marquee>


                </div>

            </div>

        </div>
        </div>

        </>
    )
}

export default Brands