import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import { animate } from '../assets/js/animate';

import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header';

AOS.init({
    duration: 1200
});



const About = () => {


    useEffect(() => {
        animate()

    }, [])




    return (
        <>


            <div id="section2" className='frame1'>

                <div className="container-fluid" id="about">
                    <div className="row">
                        <div className="col-12" id='auto'>

                            <h1 className="h1about frame3">ABOUT</h1>


                            <div className='aboutwork frame2'>
                                <p className='inthe'>In the fast paced world of digital marketing staying ahead requires not only adaptability but also a deep understanding of the unique needs of each brand. ByteBrit was founded with a vision to bridge the gap between business and their digitalpotential.Our story is one of continuous growth, innovation, and a story is one of continuous growth, innovation, and a relentless pursuit of excellence.</p>
                            </div>



                        </div>

                    </div>
                </div>


            </div>








        </>
    )
}

export default About