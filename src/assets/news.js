/* eslint-disable */

import $ from 'jquery';
  function news() {
    try{
          // Hook doAnimations on scroll, and trigger a scroll
          $(window).on("load resize scroll", function() {
            $(".frame6").each(function() {
                var windowTop = $(window).scrollTop();
                var elementTop = $(this).offset().top;
                var leftPosition = windowTop - elementTop;
                console.log("leftpos:", leftPosition)

                // Animate frame7 (right to left)

                $(this).find(".frame7").css({ 
                    right:  `${leftPosition - (leftPosition * 0.6)}%`

                });

              
            });
        });

  
    }catch(err){
      console.log(err);
    }
      
  }

  export {news}