import React from 'react';
import newsimg1 from "../images/newsback.png"


const Newsletter = () => {


    return (
        <>

            <div id='newsmain'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <img className="newsimg1" src={newsimg1} alt="" />


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

        </>
    )
}

export default Newsletter