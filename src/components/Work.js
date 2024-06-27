import React, { useRef, useEffect, } from 'react';

import workimg1 from "../images/tenup.png"
import workimg2 from "../images/lamson.png"
import workimg3 from "../images/anchor.png"
import { workheading } from '../assets/js/workheading';




const Work = () => {

   
    const workHeadingRef = useRef(null);

    useEffect(() => {
        
       


        const handleScroll = () => {
            const workHeading = workHeadingRef.current;
            const workSection = document.getElementById('work-main');
            
            const sectionOffset = workSection.offsetTop;
            const sectionHeight = workSection.offsetHeight;
            const scrollPosition = window.scrollY;

            const hideTrigger = sectionOffset + sectionHeight -500;
      
            if (scrollPosition >= sectionOffset && scrollPosition <= hideTrigger) {
              workHeading.classList.add('fixed');
            } else {
              workHeading.classList.remove('fixed');
            }

        };


          
          

        const changeBgcolorScroll = () => {
            let elem = document.getElementById('gape-img');
            let elem2 = document.getElementById('gape-img2');
            let elem3 = document.getElementById('gape-img3');
            let sect = document.getElementById('work-main');
            if (elementIsVisibleInViewport(elem, true)) {
                sect.style.background = "linear-gradient(#7200CC, #2EB5F0)";
            } else if (elementIsVisibleInViewport(elem2, true)) {
                sect.style.background = "red";
            } else if (elementIsVisibleInViewport(elem3, true)) {
                sect.style.background = "purple";
            }
        };

        const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
            if (!el) return false;
            const { top, left, bottom, right } = el.getBoundingClientRect();
            const { innerHeight, innerWidth } = window;
            return partiallyVisible
                ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
                ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
                : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', changeBgcolorScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', changeBgcolorScroll);
        };
    }, []);

    useEffect(() => {
        workheading();
    }, []);




    return (
        <>

            <section id="work-main">
                <div className="container" >
                    <div className="row">
                        <div className="col-12">
                            <h1 className="h1work" ref={workHeadingRef} >WORK</h1>



                            


                            <div id='gape-img' className='frame10'>
                                <img src={workimg1} alt="star" className="workimg1" />

                                <h2 className="h2project frame11" >TENUP</h2>
                                <h3 className='h3tenup frame11' >Product Design, UIUX <br></br>
                                    Design, Branding Visual <br></br>
                                    Design, Art Direction</h3>

                            </div>



                            {/*=========== second slider ================*/}




                            <div id='gape-img2' className='frame10' >


                                <img src={workimg2} alt="star" className="workimg1" />

                                <div className='frame22'>
                                    <h2 className="h2project1 frame11" >LAMSON</h2>
                                    <h3 className="h3tenup1 frame11" >UIUX Design, <br></br> Branding Visual Design,<br></br> Web Development</h3>
                                </div>


                            </div>



                            {/* =========== third slider ================*/}




                            <div id='gape-img3' className='frame10' >

                                <img src={workimg3} alt="star" className="workimg1" />

                                <h2 className="h2project2 frame11" >ANCHOR AI</h2>
                                <h3 className="h3tenup2 frame11" >Market Research, Design <br></br> & Marketing, Web Design<br></br> & Development, Search<br></br> Engine, Marketing</h3>

                            </div>

                            <div id='removework'>

                            </div>


                        </div>

                    </div>
                </div>


            </section>
        </>

    )
}

export default Work