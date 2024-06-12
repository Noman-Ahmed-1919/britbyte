import React, { useEffect, useState } from 'react';
import newsimg1 from "../images/newsback.png"


const Newsletter = () => {

    const [imageTransform, setImageTransform] = useState('scale(1)'); // State variable for transform

   
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('newsmain');
            const image = document.querySelector('.newsimg1');
            if (section && image) {
                const rect = section.getBoundingClientRect();
                console.log(rect);

                if (rect.top >= 0) {
                    setImageTransform('scale(1)');
                } else {
                    setImageTransform('scale(0.8)');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <div id='newsmain'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>


                            <div className='parent-newsimage'>
                                <div>
                                    <img className="newsimg1" src={newsimg1} alt="" style={{ transform: imageTransform }} />

                                </div>

                                <div className='child-image'>
                                    <h1 className='h1newsletter'>NEWSLETTER</h1>

                                    <div className="newsletter-form">
                                        <div className="input-container">

                                            <input
                                                type="email"
                                                placeholder="enter your email"
                                                className="email-input"
                                                style={{ color: "#1C0034" }}
                                                id="custom-input"
                                            />
                                            <button className="subscribe-btn">Subscribe</button>
                                        </div>

                                    </div>
                                </div>


                            </div>




                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Newsletter