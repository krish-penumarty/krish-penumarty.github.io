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

    $(".animate-arrow").hover(function(){
        $(this).stop().animate({marginTop: '+10px'}, 250);
    }, function() {
        $(this).stop().animate({marginTop: '-10px'}, 250);
    });

    $(function(){
        $(".animate-arrow").click(function(){
           window.location.href="#introduction";

           /* need to stop the form sending of the form

            UPDATE as comment: This may not be exactly correct syntax
            for stopping a form , look up preventing form submission */

           e.preventDefault();
           e.stopPropagation();
        });
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
        logo.src = "/images/krish-logo-2196F3.svg";
    } else {
        logo.src = "/images/krish-logo.svg";
    }
}