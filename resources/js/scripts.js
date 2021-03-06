$(document).ready(function() {

  /* Hover Main Logo */
  $("#main-logo").mouseover(function() {
    toggleMainLogo("red");
  });

  $("#main-logo").mouseout(function() {
    toggleMainLogo("white");
  });

  /* On click Main Logo */
  $("#main-logo").click(function(ele) {
    checkLocation(ele);
  });

  /* Hover Alt Logo */
  $("#alt-logo").mouseover(function() {
    toggleAltLogo("red");
  });

  $("#alt-logo").mouseout(function() {
    toggleAltLogo("black");
  });

  /* On click Alt Logo */
  $("#alt-logo").click(function(ele) {
    checkLocation(ele);
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

  /* Close mobile nav on click of link */
  $('.js--main-nav a').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    if ($(window).width() < 768){
      nav.slideToggle(200);
    }
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

}); //End of Document ready



/* Function: Toggles the color of the main logo when mouseover */
function toggleMainLogo(color){
    var main_logo = document.getElementById("main-logo");

    if(color == 'red'){
      main_logo.src = "resources/images/logo-red.svg";
    } else {
      main_logo.src = "resources/images/logo-white.svg";
    }
}

/* Function: Toggles the color of the alt logo when mouseover */
function toggleAltLogo(color){
    var alt_logo = document.getElementById("alt-logo");

    if(color == 'red'){
      alt_logo.src = "resources/images/logo-red.svg";
    } else {
      alt_logo.src = "resources/images/logo-black.svg";
    }
}

/* Function: Refresh back to home page or scroll back to top of page. */
function checkLocation(ele) {
  if(ele.currentTarget.baseURI != "http://krishpenumarty.com/") {
    window.location.href = 'http://krishpenumarty.com/'
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
