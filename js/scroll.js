$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.welcome');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").addClass('scroll');
          $(".navbar").addClass('scroll');
          $(".navbar-brand").addClass('scroll');
          $("body").addClass('scroll');
          $(".tyjow-bg").addClass('scroll');
       } else {
          $(".navbar-inverse").removeClass('scroll');
          $(".navbar").removeClass('scroll');
          $(".navbar-brand").removeClass('scroll');
          $("body").removeClass('scroll');
          $(".tyjow-bg").removeClass('scroll');
       }
   });
    }
});