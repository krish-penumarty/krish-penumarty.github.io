$(document).ready(function() {

  /* Hover Main Logo */
  $("#main-logo").mouseover(function() {
    toggleMainLogo("red");
  });

  $("#main-logo").mouseout(function() {
    toggleMainLogo("white");
  });

  /* Hover Alt Logo */
  $("#alt-logo").mouseover(function() {
    toggleAltLogo("red");
  });

  $("#alt-logo").mouseout(function() {
    toggleAltLogo("black");
  });

  /* Typed.js Plugin for Home page header */
  $(function(){
      $(".element-typed").typed({
          stringsElement: $('#typed-strings'),
          typeSpeed: 75,
          startDelay: 500,
          backSpeed: 30,
          backDelay: 500,
          loop: true
      });
  });

  /* Waypoints.js Plugin for Sticky Navigation */
  $('.js--section-about').waypoint(function(direction) {
    if(direction === "down") {
      $('nav').addClass("sticky");
    } else {
      $('nav').removeClass("sticky");
    }
  }, {
    offset: '60px'
  });

  /* Navigation Scroll src: https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)-50 //Added some space between scroll of header and section start
          }, 1000);
          $('.js--main-nav').slideToggle(200);
          return false;
        }
      }
    });
  });

  /* Animations on scroll */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated zoomIn');
  }, {
    offset: '60%'
  });

  /* Mobile Navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    nav.slideToggle(200);
  });

  /* Reset Desktop Navigation */
  $(window).resize(function(){
    var nav = $('.js--main-nav');

    if ($(window).width() > 767){
      nav.css("display", "block");
    } else {
      nav.css("display", "none");
    }
  });

}); //End of Document ready



/* Function: Toggles the color of the main logo when mouseover */
function toggleMainLogo(color){
    var main_logo = document.getElementById("main-logo");

    if(color == 'red'){
      // logo.src = "/images/krish-logo-2196F3.svg";
    } else {
      // logo.src = "/images/krish-logo.svg";
    }
}

/* Function: Toggles the color of the alt logo when mouseover */
function toggleAltLogo(color){
    var alt_logo = document.getElementById("alt-logo");

    if(color == 'red'){
      // logo.src = "/images/krish-logo-2196F3.svg";
    } else {
      // logo.src = "/images/krish-logo.svg";
    }
}

/* Google Maps API for Contact Form */
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.4243225, lng: -111.9999307},
    zoom: 12,
    disableDefaultUI: true
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    position: {lat: 33.4514652, lng: -112.0913905}
  });
}
