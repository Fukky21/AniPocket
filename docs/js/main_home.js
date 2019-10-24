$(function () {
  $('.animation').css('visibility','hidden');
  $(window).scroll(function() {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('.animation').each(function() {
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight + 150){
        $(this).removeClass("animation").addClass("fadeInDown");
      }
    });
  });
});
