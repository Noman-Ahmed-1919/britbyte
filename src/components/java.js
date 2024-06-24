import React from "react";
import $ from 'jquery';

const java = () =>{
  
    window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight; //total no of line
        const scrolled = window.scrollY; //specific no of line where we have ,when scoll it increase
        // console.log(Math.ceil(scrolled))
        if (Math.ceil(scrolled) > -150) {
          
            document.getElementById('scrollToTop').style.display = 'inline';
        } else {
            document.getElementById('scrollToTop').style.display = 'none';
        }
    });
          
          $("#scrollToTop").on("click", function() {
            window.scrollTo(0, 0);
        });
  
        
    }
  
  
  
    (
        <>
        




        
        </>
    )


export default java;