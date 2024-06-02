/* eslint-disable */

import $ from 'jquery';
  function animate() {
    try{


      // Hook doAnimations on scroll, and trigger a scroll

    $(window).on("load resize scroll", function() {

      $(".frame1").each(function() {
        var windowTop = $(window).scrollTop();
        console.log("WindowTop:",  windowTop);

        var elementTop = $(this).offset().top;
        console.log("elementTop:",  elementTop);


        var leftPosition = windowTop - elementTop;

        // right to left
        if(leftPosition > -1000 && leftPosition <=0){
            console.log(leftPosition);
            
            $(this)
            .find(".frame2")
            .css({ right: `${leftPosition -(leftPosition * 0.8)}%` });
        }
        if(leftPosition > 0){
            $(this)
              .find(".frame2")
              .css({ right: 0 });
        }
            
            // left to right 
          if(leftPosition > -1000 && leftPosition <=0){
            console.log(leftPosition);
  
            $(this)
              .find(".frame3")
              .css({ left: `${leftPosition -(leftPosition * 0.8)}%` });
          }
          if(leftPosition > 0){
            $(this)
              .find(".frame3")
              .css({ left: 0 });
            }
        
      });

    });
    }catch(err){
      console.log(err);
    }
      
  }

  export {animate}
  