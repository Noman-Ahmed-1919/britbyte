import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>

            <div id="footerback">

                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h1 className="h1footer">LETS START WORKING TOGETHER</h1>

                        </div>
                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <ul className="social-links text-center">
                                <li>
                                    <a href="https://www.instagram.com/bytebrit?igsh=MWJvZm15M2FqZHA5Ng%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <span>&#10138;
                                    </span>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/bytebrit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <span>&#10138;
                                    </span>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=61556716203618&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <span>&#10138;
                                    </span>
                                </li>
                            </ul>







                            <div className="contact-details">
                                <p className="contact-detail">Contact Detail:</p>

                                <p style={{ color: 'white' }}>
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} /> {/* Email icon */}
                                    </span>
                                    <span style={{ marginLeft: '5px' }}>bytebrit.io@gmail.com</span> {/* Email address */}
                                </p>
                                <p style={{ color: 'white' }}>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone} /> {/* Phone icon */}
                                    </span>
                                    <span style={{ marginLeft: '5px' }}>+44 7471 4636 05</span> {/* Phone number */}
                                </p>
                            </div>

                        </div>

                        <div className="col-md-4">
                            {/* <p className="enter">Enter your email...</p> */}
                            <input className="enter" placeholder="Enter your email..."></input>

                            <div className="message-box">
                                <textarea
                                    className="message-input"
                                    placeholder="Message"
                                ></textarea>
                                <div className="sendbutton-main">
                                <button className="sendbutton">SEND</button>
                                <span className="right-arrow">&#10140;</span>
                                </div>
                              

                            </div>

                        </div>



                    </div>

                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="horizontal-links">
                            <Link to="/">home</Link>

                                {/* <a href="#home" >home</a> */}
                                <a href="#about">about</a>
                                <a href="#work">work</a>
                                <a href="#services">services</a>
                                <a href="#contact">contact</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Footer;