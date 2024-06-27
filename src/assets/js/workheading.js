/* eslint-disable */

import $ from 'jquery';
  function workheading() {
    try{
          // Hook doAnimations on scroll, and trigger a scroll
          $(window).on("load resize scroll", function() {
            $(".frame10").each(function() {
                var windowTop = $(window).scrollTop();
                var elementTop = $(this).offset().top;
                var leftPosition = windowTop - elementTop;
                console.log("leftpos:", leftPosition)

                // Animate frame7 (right to left)

                $(this).find(".frame11").css({ 
                    right:  `${leftPosition - (leftPosition * 0.6)}%`,


                });
               

              
            });
        });

  
    }catch(err){
      console.log(err);
    }
      
  }

  export {workheading}
  