// Custom scripts

$('.js-scroll-trigger').click(function () {
  $('.navbar-collapse').collapse('hide');
});

$('body').scrollspy({
  target: '#navPrincipal',
  offset: 56
});

//Fade in and fade out section when not displayed 
$(window).scroll(function() {
  console.log($(this).scrollTop());  
  if ($(this).scrollTop() > 300) {
    $('.hideme').animate({
      'opacity': '1'
     }, 2);
  } else {
    $('.hideme').animate({
      'opacity': '0'
     }, 2);
  }
});  