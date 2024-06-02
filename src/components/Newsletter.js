import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import newsimg1 from "../images/newsback.png"


const Newsletter = () =>{
   
    const sectionRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(sectionRef.current, {
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "",
            end: "",
            scrub: 1, // Adjust the scrub value
           
        },
       
        width: '70vw', // Set the width you want to shrink to (half of the viewport width)
            marginLeft: 'calc(50% - 35vw)', // Set the left margin to center the section
            marginRight: 'calc(50% - 35vw)',

    });
}, []);
      return(
        <>
        
        <div  id='newsmain'>


        <section  ref={sectionRef} className="shrink-section" >

<div  className='container-fluid'>
    <div className='row'>
        <div className='col-12'>
            <img className="newsimg1"   src={newsimg1} alt="" />


<h1 className='h1newsletter'>NEWSLETTER</h1>

<div className="newsletter-form">
<div className="input-container">

      <input
        type="email"
        placeholder="enter your email"
        className="email-input"
        style={{color:"#1C0034"}}
        id="custom-input" 
      />
      <button className="subscribe-btn">Subscribe</button>
      </div>

    </div>

        </div>
         
    </div>

</div>

    </section>
    </div>





    <section id='mobile'>
    <div  className='container-fluid'>
    <div className='row'>
        <div className='col-12'>


<h1 className='h1newsletter'>NEWSLETTER</h1>

<div className="newsletter-form">
<div className="input-container">

      <input
        type="email"
        placeholder="enter your email"
        className="email-input"
        style={{color:"#1C0034"}}
        id="custom-input" 
      />
      <button className="subscribe-btn">Subscribe</button>
      </div>

    </div>

        </div>
         
    </div>

</div>
    </section>


        </>
    )
}

export default Newsletter