import React, { useRef, useEffect } from 'react';

const Marquee = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const marqueeElement = containerRef.current.querySelector('.marquee');
    const marqueeWidth = marqueeElement.offsetWidth;

    // Calculate the duration based on the width of the container and marquee
    const duration = (marqueeWidth + containerWidth) / 50; // Adjust the divisor to control the speed

    // Set animation duration and iteration count dynamically
    marqueeElement.style.animationDuration = `${duration}s`;
    marqueeElement.style.animationIterationCount = 'infinite';

    return () => {
      // Cleanup
      marqueeElement.style.animation = 'none'; // Reset animation when component unmounts
    };
  }, []);

  return (
    <div ref={containerRef} className="marquee-container">
      <h1 className="marquee">EMPOWERING BUSINESSES THROUGH</h1>
    </div>
  );
};

export default Marquee;