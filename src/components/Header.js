import React, { useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/white.png";



const Header = ( ) =>{




    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        // window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
        // section.scrollIntoView({top: section.offsetTop, behavior: "smooth" });
        section.scrollIntoView({ behavior: "smooth" });

  
      }
    };
  

    const navLinkStyles = ({ isActive }) => {
        return {
          // fontWeight: isActive ? 'bold' : 'normal',
          // color: isActive ? '#279EFF' : '#ffffff',
          // borderBottom: isActive? '3px solid #ffffff' : 'none',
        }
      }
    
    


    return(
        <>

        <div className="heanav">

             
<section  id='hide' className='container'>

<nav className="navbar navbar-expand-xl navbar-dark"  >


  <a className="navbar-brand" href="#" id="stico" >
    <img id='logo' style={{ marginTop:"12px" }} src={logo} width={135} height={35} className="d-inline-block align-top" alt="" />
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto" >
      <li className="nav-item">
        <NavLink to="/"   id="aboutaa"  style={navLinkStyles}  className="nav-link"  >
             Home
        </NavLink>
      </li>
   
      <li className="nav-item" >
        <NavLink to="/about" onClick={() => scrollToSection("about")} style={navLinkStyles} smooth="true"  behavior="smooth" id="" className="nav-link " >   About </NavLink>
      </li>
     
      <li className="nav-item" >
        <NavLink to="/digitalback" onClick={() => scrollToSection("digitalback")} smooth="true" id="abouta2" style={navLinkStyles} className="nav-link ">  Services</NavLink>
      </li>
      
      
      
     
    </ul>
 
  </div>


</nav>

</section>

</div>

        
        </>
    )
}
export default Header