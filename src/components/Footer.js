import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");





    // function of sending email data
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted with email:", email, "and message:", message);


        try {
            const res = await axios.post("http://localhost:5000/email-data", { email, message });
            console.log(res);
            toast.error("Email Send Successfully!");

            window.location.reload(); // This will refresh the page

        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong in Input Form");
        }
    };



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
                            <form onSubmit={handleSubmit} >

                                <input className="enter" placeholder="Enter your email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>

                                <div className="message-box" name="message">
                                    <textarea
                                        className="message-input"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>

                                    <div className="sendbutton-main">
                                        <button type="submit" className="sendbutton">SEND</button>
                                        <span className="right-arrow">&#10140;</span>
                                    </div>


                                </div>
                            </form>

                        </div>
                    </div>

                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="horizontal-links">

                                <a className="fothome" href="#home" >home</a>
                                <a className="fotabout" href="#about">about</a>
                                <a className="fotwork" href="#work-main">work</a>
                                <a className="fotdigital" href="#digitalback">services</a>
                                <a className="fotback" href="#footerback">contact</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Footer;