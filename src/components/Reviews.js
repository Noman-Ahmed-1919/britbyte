import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reviewsimg1 from "../images/Star 1.png"
import { pract } from '../assets/js/pract';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
    duration: 1200
});


const Reviews = () => {

    const sectionRef = useRef(null);
    const testimonialRef = useRef(null);
    const testimonialRef1 = useRef(null);
    const testimonialRef2 = useRef(null);
    const testimonialRef3 = useRef(null);





    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(sectionRef.current, {

            duration: 3,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 200px',

                end: 'bottom center',
                scrub: true,


            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });


        gsap.to(testimonialRef.current.children, {
            y: '-160%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });

        gsap.to(testimonialRef1.current.children, {
            y: '-120%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });

        gsap.to(testimonialRef2.current.children, {
            y: '-70%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });

        gsap.to(testimonialRef3.current.children, {
            y: '-80%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });


    }, []);

    useEffect(() => {
        pract()

    }, [])

    return (
        <>


            <section id='reviews-main' className='desktop-screen'>

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-lg-12" class="frame6" id="mobile-reviews">
                            <div id='sec-rev' >
                                <h1 className='h1reviews frame7' id="moving-heading">REVIEWS</h1>
                            </div>


                            <div className='rev-margintop'>

                                <div className='testimonial-flex' id='flex-right'>

                                    <div ref={testimonialRef2}>

                                        <div className="testimonial-container">
                                            <div className="testimonial-content">
                                                <h2 className="testimonial-heading">Sarah Johnson</h2>
                                                <div className="stars-container">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <img
                                                            key={star}
                                                            src={reviewsimg1} // Path to your star image
                                                            alt="star"
                                                            className="star-icon"
                                                        />
                                                    ))}
                                                </div>

                                            </div>
                                            <p className="testimonial-text">
                                                "ByteBrit's website design team delivered beyond expectation! Their professionalism and creativity transformed our online presence, driving remarkable client engagement. Highly recommended!"
                                            </p>
                                        </div>
                                    </div>

                                    <div ref={testimonialRef} id="mar-jack">

                                        <div className="testimonial-container" >
                                            <div className="testimonial-content">
                                                <h2 className="testimonial-heading">David Thompson</h2>
                                                <div className="stars-container">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <img
                                                            key={star}
                                                            src={reviewsimg1} // Path to your star image
                                                            alt="star"
                                                            className="star-icon"
                                                        />
                                                    ))}
                                                </div>

                                            </div>
                                            <p className="testimonial-text">
                                                "ByteBrit's social media marketing service elevated our brand awareness exponentially! Their strategic approach and responsiveness made for a seamless partnership. Exceptional results!"                                            </p>
                                        </div>
                                    </div>

                                </div>



                                <div className='testimonial-flex'>

                                    <div ref={testimonialRef3}>


                                        <div className="testimonial-container">
                                            <div className="testimonial-content">
                                                <h2 className="testimonial-heading">Emily Roberts</h2>
                                                <div className="stars-container">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <img
                                                            key={star}
                                                            src={reviewsimg1} // Path to your star image
                                                            alt="star"
                                                            className="star-icon"
                                                        />
                                                    ))}
                                                </div>

                                            </div>
                                            <p className="testimonial-text">
                                                "ByteBrit's UI/UX design team crafted an interface that wowed our users! Their attention to detail and understanding of user behavior ensured an intuitive experience. Thrilled with the outcome!"                                            </p>
                                        </div>
                                    </div>



                                    <div ref={testimonialRef1}>

                                        <div className="testimonial-container">
                                            <div className="testimonial-content">
                                                <h2 className="testimonial-heading">Michael Adams</h2>
                                                <div className="stars-container">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <img
                                                            key={star}
                                                            src={reviewsimg1} // Path to your star image
                                                            alt="star"
                                                            className="star-icon"
                                                        />
                                                    ))}
                                                </div>

                                            </div>
                                            <p className="testimonial-text" >
                                                "ByteBrit's video editing service turned our footage into a masterpiece! Their creativity and technical prowess delivered a captivating final product. Highly recommend for brand elevation! "                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>




                </div>

            </section>






            <section id='reviews-main' className='laptop-devices'>

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-lg-12" class="frame6" id="mobile-reviews">

                            <h1 className='h1reviews-laptop' id="moving-heading">REVIEWS</h1>
                            {/* <div id='sec-rev' >
                <h1 className='h1reviews frame7' id="moving-heading">REVIEWS</h1>
            </div> */}


                            <div className='rev-margintop'>

                                <div className='testimonial-flex' id='flex-right'>

                                    <div >

                                        <div className="container" >
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className="testimonial-container" data-aos="fade-left" data-aos-delay="1000" >
                                                        <div className="testimonial-content">
                                                            <h2 className="testimonial-heading">Sarah Johnson</h2>
                                                            <div className="stars-container">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <img
                                                                        key={star}
                                                                        src={reviewsimg1} // Path to your star image
                                                                        alt="star"
                                                                        className="star-icon"
                                                                    />
                                                                ))}
                                                            </div>

                                                        </div>
                                                        <p className="testimonial-text">
                                                            "ByteBrit's website design team delivered beyond expectation! Their professionalism and creativity transformed our online presence, driving remarkable client engagement. Highly recommended!"
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div id="mar-jack">

                                        <div className="container" >
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className="testimonial-container" data-aos="fade-right" data-aos-delay="1000">
                                                        <div className="testimonial-content">
                                                            <h2 className="testimonial-heading">David Thompson</h2>
                                                            <div className="stars-container">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <img
                                                                        key={star}
                                                                        src={reviewsimg1} // Path to your star image
                                                                        alt="star"
                                                                        className="star-icon"
                                                                    />
                                                                ))}
                                                            </div>

                                                        </div>
                                                        <p className="testimonial-text">
                                                            "ByteBrit's social media marketing service elevated our brand awareness exponentially! Their strategic approach and responsiveness made for a seamless partnership. Exceptional results!"                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                                <div>

                                    <div>



                                        <div className="container" >
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className="testimonial-container" data-aos="fade-left" data-aos-delay="1000">
                                                        <div className="testimonial-content">
                                                            <h2 className="testimonial-heading">Emily Roberts</h2>
                                                            <div className="stars-container">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <img
                                                                        key={star}
                                                                        src={reviewsimg1} // Path to your star image
                                                                        alt="star"
                                                                        className="star-icon"
                                                                    />
                                                                ))}
                                                            </div>

                                                        </div>
                                                        <p className="testimonial-text">
                                                            "ByteBrit's UI/UX design team crafted an interface that wowed our users! Their attention to detail and understanding of user behavior ensured an intuitive experience. Thrilled with the outcome!"                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                    <div>

                                        <div className="container" >
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className="testimonial-container" data-aos="fade-right" data-aos-delay="1000">
                                                        <div className="testimonial-content">
                                                            <h2 className="testimonial-heading">Michael Adams</h2>
                                                            <div className="stars-container">
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <img
                                                                        key={star}
                                                                        src={reviewsimg1} // Path to your star image
                                                                        alt="star"
                                                                        className="star-icon"
                                                                    />
                                                                ))}
                                                            </div>

                                                        </div>
                                                        <p className="testimonial-text" >
                                                            "ByteBrit's video editing service turned our footage into a masterpiece! Their creativity and technical prowess delivered a captivating final product. Highly recommend for brand elevation! "                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>




                </div>

            </section>

        </>
    )
}
export default Reviews;