$(document).ready(function(){

   $(window).on('scroll', function () {

      if ($(this).scrollTop() > 500) {
         $('#appear-nav').fadeIn(200);
      } else {
         $('#appear-nav').fadeOut(40);
      }

      if ($(window).scrollTop() > 500)  {
         $('#appear-home').css('color','#b0eb00');
      }

      if ($(window).scrollTop() > 1650) {
         $('#appear-tech').css('color','#b0eb00');
         $('#appear-home').css('color','#ffffff');
      } else {
         $('#appear-tech').css('color','#ffffff');
      }

   });

   $('#appear-tech').on('click', function() {
      $('#appear-nav').fadeIn(100);
      $(this).css('color','#b0eb00');
   });
   $('#appear-home').on('click', function() {
      $('#appear-nav').fadeOut(100);
   });

});
