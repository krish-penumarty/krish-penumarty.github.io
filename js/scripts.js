$( document ).ready(function() {
    $( ".logo" ).mouseover(function() {
        toggleLogo('red');
    });

    $( ".logo" ).mouseout(function() {
      toggleLogo('white');
    });

    $( ".nav-menu" ).click(function() {
      toggleMenu();
    });
});

//Toggles the visibility of the menu
function toggleMenu(){

    var nav = $('#navbar-main');

    if(!nav.hasClass("open")){
        nav.addClass("open");
    } else {
        nav.removeClass("open");
    }
}

//Toggles the color of the logo when mouseover
function toggleLogo(color){

    var logo = document.getElementById("logo");

    if(color == 'red'){
        logo.src = "/images/logored.png";
    } else {
        logo.src = "/images/logo.png";
    }
}