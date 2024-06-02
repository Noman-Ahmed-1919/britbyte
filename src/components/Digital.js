import React, { useRef, useEffect } from "react";


import digital1 from "../images/01.png"
import digital2 from "../images/02.png"
import digital3 from "../images/03.png"
import digital4 from "../images/04.png"
import digital5 from "../images/05.png"
import digital6 from "../images/06.png"
import digital7 from "../images/07.png"

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
    duration: 1200
});


const Digital = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
          section.scrollIntoView({ behavior: 'smooth' });
    
        }
      };
    

   
    return (
        <>
            <div id="digitalback"  >

                <div className="container">
                    <div className="row" id="sec11">

                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="1000" >
                            <img className="digital1" src={digital1} alt="" />

                        </div>

                        <div className="col-lg-8" data-aos="fade-right" data-aos-delay="1000">

                            <h1 className="h1digit">Digital Marketing</h1>
                            <p className="atp">At Byte Brit, we harness the power of digital marketing to propel your brand to new heights in the digital landscape. Our comprehensive digital marketing strategies are tailored to meet your unique business objectives and target audience. From search engine optimization (SEO) and social media marketing to content creation and email campaigns, we employ the latest tools and techniques to increase your online visibility, drive qualified traffic to your website, and ultimately boost your conversions and ROI.</p>

                            <div className="btn-cen">
                                <button className="getbtn" to="/footerback" onClick={() => scrollToSection("footerback")}>GET QUOTE</button>

                            </div>




                        </div>

                    </div>

                </div>







                <div className="container">
                    <div className="row" id="sec12">

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="1000">

                            <h1 className="h1digit">Graphic Designing</h1>
                            <p className="atp">At Byte Brit, we understand the importance of visual storytelling in capturing your audience's attention and conveying your brand's message effectively. Our talented team of graphic designers combines creativity with technical proficiency to deliver stunning visual assets that resonate with your target audience. From logo design and branding to marketing collateral and infographics, we create visually compelling designs that elevate your brand identity and leave a lasting impression.</p>

                            <div className="btnsec12">
                                <button className="getbtngraphic"  to="/footerback" onClick={() => scrollToSection("footerback")}>GET QUOTE</button>

                            </div>

                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="1000">
                            <img className="digital2" src={digital2} alt="" />

                        </div>
                    </div>

                </div>





                <div className="container">
                    <div className="row" id="sec13">

                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="1000">
                            <img className="digital3" src={digital3} alt="" />

                        </div>

                        <div className="col-lg-8" data-aos="fade-right" data-aos-delay="1000">

                            <h1 className="h1digit">App Development</h1>
                            <p className="atp">From conceptualization to deployment, Byte Brit is your trusted partner for custom software application development. Whether you need a mobile app, web application, or enterprise software solution, our team of experienced developers has the skills and expertise to bring your ideas to life. Using the latest technologies and best practices, we build scalable, secure, and high performance applications that meet your specific requirements and exceed your expectations. With a focus on innovation and quality, we deliver tailored solutions that drive business growth and success.</p>

                            <div className="getbtnsec13">
                                <button className="getbtnapp"  to="/footerback" onClick={() => scrollToSection("footerback")}>GET QUOTE</button>


                            </div>




                        </div>

                    </div>

                </div>


                <div className="container">
                    <div className="row" id="sec121">

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="1000">

                            <h1 className="h1digit">Web Development</h1>
                            <p className="atp">Your online presence is the cornerstone of your digital strategy, and at Byte Brit, we specialize in crafting exceptional web experiences that leave a lasting impression. Our web development services combine cutting-edge technologies with innovative design to create websites that are not only visually stunning but also highly functional and user-friendly. Whether you need a simple portfolio site, an e-commerce platform, or a complex web application, our team has the expertise to bring your vision to life.</p>

                            <div className="getbtnsec121">
                                <button id="getbtnweb" className="getbtn2"  to="/footerback" onClick={() => scrollToSection("footerback")}>GET QUOTE</button>

                            </div>

                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="1000">
                            <img className="digital24" src={digital4} alt="" />

                        </div>
                    </div>

                </div>




                <div className="container">
                    <div className="row" id="sec131">

                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="1000">
                            <img className="digital3" src={digital5} alt="" />

                        </div>

                        <div className="col-lg-8" data-aos="fade-right" data-aos-delay="1000">

                            <h1 className="h1digit">UI/UX</h1>
                            <p className="atp">User experience (UX) and user interface (UI) design are at the heart of every successful digital product, and at Byte Brit, we prioritize creating intuitive and visually engaging interfaces that delight users and drive engagement. Our UX/UI experts work closely with you to understand your users' needs, preferences, and pain points, ensuring that every interaction with your product is seamless and intuitive. Whether you're developing a website, mobile app, or software application, we design user-centric interfaces that enhance usability, accessibility, and overall user satisfaction.</p>


                            <div className="getbtn131">
                                <button id="getbtnui" className="getbtn"  to="/footerback" onClick={() => scrollToSection("footerback")}> GET QUOTE  </button>

                            </div>




                        </div>

                    </div>

                </div>



                <div className="container">
                    <div className="row" id="sec122">

                        <div className="col-lg-8" data-aos="fade-down" data-aos-delay="1000">

                            <h1 className="h1digit">web3</h1>
                            <p className="atp">Experience the future of the internet with Byte Brit's cutting-edge Web3 solutions. As pioneers in decentralized technologies, we specialize in leveraging blockchain, decentralized finance (DeFi), non-fungible tokens (NFTs), and decentralized autonomous organizations (DAOs) to build next-generation web applications and platforms. Whether you're looking to integrate blockchain into your existing systems or develop entirely new decentralized solutions, we have the expertise to turn your vision into reality in the Web3 era.</p>

                            <div className="getbtnsec122">
                                <button className="getbtn2"  to="/footerback" onClick={() => scrollToSection("footerback")}>GET QUOTE</button>

                            </div>

                        </div>

                        <div className="col-lg-4" data-aos="fade-down" data-aos-delay="1000">
                            <img className="digital26" src={digital6} alt="" />

                        </div>
                    </div>

                </div>


                <div className="container">
                    <div className="row" id="sec132">

                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="1000">
                            <img className="digital37" src={digital7} alt="" />

                        </div>

                        <div className="col-lg-8" data-aos="fade-right" data-aos-delay="1000">

                            <h1 className="h1digit">Video Editing & Animations</h1>
                            <p className="atp">Make your content come alive with Byte Brit's video editing and animation services. Whether you're producing marketing videos, educational content, or entertainment pieces, our talented team of editors and animators can help you tell your story in a dynamic and engaging way. From cutting-edge animations to polished post-production, we have the creativity and technical expertise to take your videos to the next level and leave a lasting impression on your audience.</p>


                            <div className="getbtnsec132">
                                <button className="getbtn1"  to="/footerback" onClick={() => scrollToSection("footerback")}> GET QUOTE  </button>

                            </div>




                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Digital