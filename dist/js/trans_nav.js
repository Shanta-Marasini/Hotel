$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 150) {
      $(".navbarr").addClass("solid");
    } else {
      $(".navbarr").removeClass("solid");
    }
  });
});
