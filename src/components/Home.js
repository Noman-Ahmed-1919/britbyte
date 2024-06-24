import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Brands from './Brands';

import Marquee from 'react-fast-marquee';




const Home = () => {


    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);






    return (
        <>

            <div className="sub-sec">

                <div id="section1">
                    <Header />

                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">

                                <div className="main-heading">


                                    <h1 className="welcome">WELCOME &nbsp;TO <br></br> <span className="welcome1">BYTEBRIT</span></h1>

                                    <Marquee direction="left" speed={100} delay={5}>

                                        {/* <h1 className="marquee" >EMPOWERING BUSINESS THROUGH TECHNOLOGY</h1> */}

                                        <h1 className="marquee" >WE &nbsp; ARE &nbsp; CURRENTLY REBUILDING&nbsp;</h1>


                                    </Marquee>


                                </div>


                                <p className='guide' >We guide game-changing Tech, AI & Commerce <br></br> Brands, across platforms & places,<br></br> through agile design & digital experience.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* <Work /> */}
    


        </>
    )
}

export default Home