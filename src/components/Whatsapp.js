import React, {useEffect} from 'react'
import java from './java.js';
import whatsapp from "../images/whatsapp.png"


const Whatsapp = () => {
  
    useEffect(()=>{
        java()
       },[])
 

    return (
<>
<div className="whatsapp" >
<a href=" https://wa.me/4407471463605" target="_blank" id="scrollToTop"> <img src={whatsapp} className='whatappset' style={{widt:"60px"}}/></a>


</div>
</>

    );
}
export default Whatsapp;