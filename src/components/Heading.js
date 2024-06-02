import React, { useEffect } from 'react';

const Heading = () => {


    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          console.log(scrollPosition)
          const para1 = document.querySelector('.para1');
          console.log(para1)
          if (para1) {
            const newPosition = scrollPosition - 800;
            console.log(newPosition)
            para1.style.right = `${-newPosition}px`; // Negate the position to move from right to left
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
  
 <>
 
 <div className='para1'>
      <h1>Work</h1>
    </div>

 </>




);
};

export default Heading;