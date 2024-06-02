import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import workimg1 from "../images/tenup.png"
import workimg2 from "../images/lamson.png"
import workimg3 from "../images/anchor.png"




const Work = () => {

    const tenupRef = useRef(null);
    const lamsonRef = useRef(null);
    const anchorRef = useRef(null);

    const tenupRef1 = useRef(null);
    const lamsonRef1 = useRef(null);
    const anchorRef1 = useRef(null);

    const workImgRef = useRef(null); // Reference to the work image
    const workHeadingRef = useRef(null);
    let isScrolling = false;


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(tenupRef.current, {

            duration: 1,
            scrollTrigger: {
                // trigger: tenupRef.current,
                trigger: workImgRef.current, // Use workimg1 as the trigger


                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });

        gsap.to(lamsonRef.current, {

            duration: 1,
            scrollTrigger: {
                // trigger: tenupRef.current,
                trigger: workImgRef.current, // Use workimg1 as the trigger


                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });

        gsap.to(anchorRef.current, {

            duration: 1,
            scrollTrigger: {
                // trigger: tenupRef.current,
                trigger: workImgRef.current, // Use workimg1 as the trigger


                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });


        gsap.to(tenupRef1.current, {

            duration: 8,
            scrollTrigger: {
                // trigger: tenupRef1.current,
                trigger: workImgRef.current, // Use workimg1 as the trigger


                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });


        gsap.to(lamsonRef1.current, {

            duration: 8,
            scrollTrigger: {
                // trigger: tenupRef1.current,
                trigger: workImgRef.current, // Use workimg1 as the trigger


                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });


        gsap.to(anchorRef1.current, {

            duration: 8,
            scrollTrigger: {
                // trigger: tenupRef1.current,
                trigger: workImgRef.current, // Use workimg1 as the trigger


                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });


    

        const handleScroll = () => {

            if (isScrolling) return;

            isScrolling = true;
            
            setTimeout(() => {
            const workHeading = workHeadingRef.current;
            const workSection = document.getElementById('work-main');
            const h3Tenup = document.querySelector('.h3tenup');
            if (!h3Tenup) return;

            const sectionOffset1 = 1500; // Adjust this value as needed
            if (!workHeading || !workSection) return;

            const scrollPosition = window.scrollY;
            const sectionOffset = workSection.offsetTop;
            const sectionHeight = workSection.offsetHeight;
           
            const hideTrigger = sectionOffset + (sectionHeight * 0.8);


            if (scrollPosition >= sectionOffset && scrollPosition <= hideTrigger) {
                workHeading.style.position = 'fixed';
                workHeading.style.top = '0';
                workHeading.style.left = '50%';
                workHeading.style.transform = 'translateX(-50%)';
                workHeading.style.opacity = '1'; // Make the heading visible

            } else {
                workHeading.style.position = 'static';
                workHeading.style.left = 'auto'; // Reset left positioning
                workHeading.style.transform = 'none'; // Reset transform
                // workHeading.style.opacity = '0'; // Hide the heading

            }
            isScrolling = false;
            
          
            if (scrollPosition >= sectionOffset1) {
              h3Tenup.classList.add('visible');
            } else {
              h3Tenup.classList.remove('visible');
            }

            
        }, 1000); 
        };
           
        window.addEventListener('scroll', handleScroll);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', changeBgcolorScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', changeBgcolorScroll);
        };
    
       

            

    }, []);

    const changeBgcolorScroll = ()=> {
        let elem = document.getElementById('gape-img')
        let elem2 = document.getElementById('gape-img2')
        let elem3 = document.getElementById('gape-img3')
        let sect = document.getElementById('work-main')
        if(elementIsVisibleInViewport(elem, true)){
            sect.style.background= "linear-gradient(#7200CC, #2EB5F0)"
        }else if(elementIsVisibleInViewport(elem2, true)){
            sect.style.background= "red";
        }
        else if(elementIsVisibleInViewport(elem3, true)){
            sect.style.background= "purple";
        }
       
    }

    const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
          ? ((top > 0 && top < innerHeight) ||
              (bottom > 0 && bottom < innerHeight)) &&
              ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
          : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
      };





    return (
        <>

            <section id="work-main">
                <div className="container" >
                    <div className="row">
                        <div className="col-12">
                            <h1 className="h1work" ref={workHeadingRef}>WORK</h1>



                        
                            <h2 className="h2project" ref={tenupRef}>TENUP</h2>
                            <h3 className='h3tenup' ref={tenupRef1}>Product Design, UIUX <br></br>
                                Design, Branding Visual <br></br>
                                Design, Art Direction</h3>


                            <div  id='gape-img' ref={workImgRef}>
                                <img src={workimg1} alt="star" className="workimg1" />

                            </div>

                            {/*=========== second slider ================*/}

                             <h2 className="h2project1" ref={lamsonRef}>LAMSON</h2>
                             <h3 className='h3tenup1' ref={lamsonRef1}>UIUX Design, <br></br> Branding Visual Design,<br></br> Web Development</h3>


                             <div id='gape-img2'>
                                 <img src={workimg2} alt="star" className="workimg1" />

                             </div> 



                            {/* =========== third slider ================*/}

                             <h2 className="h2project2" ref={anchorRef}>ANCHOR AI</h2>
                            <h3 className='h3tenup2' ref={anchorRef1}>Market Research, Design <br></br> & Marketing, Web Design<br></br> & Development, Search<br></br> Engine, Marketing</h3>


                            <div id='gape-img3'>
                                <img src={workimg3} alt="star" className="workimg1" />

                            </div> 


                        </div>

                    </div>
                </div>


            </section>
        </>

    )
}

export default Work