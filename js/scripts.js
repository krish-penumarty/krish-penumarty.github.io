$( document ).ready(function() {
    // Mouse over function to change color for logo
    $( ".logo" ).mouseover(function() {
        toggleLogo("red");
    });

    $( ".logo" ).mouseout(function() {
        toggleLogo("white");
    });

    //Ability to toggle Meu on mobile screens
    $( ".nav-menu" ).click(function() {
        toggleMenu();
    });

    //Animate arrow downward when user hovers over it.
    $(".animate-arrow").hover(function(){
        $(this).stop().animate({marginTop: "+10px"}, 250);
    }, function() {
        $(this).stop().animate({marginTop: "-10px"}, 250);
    });

    //OnClick function of arrow to direct user to introduction section
    $(function(){
        $(".animate-arrow").click(function(){
            window.location.href="#introduction";
            e.preventDefault();
            e.stopPropagation();
        });
    });

    //On click on a menu list item toggles the menu back up
    $(function(){
        $(".menu ul li").click(function(){
            toggleMenu();
        });
    });

});

//Function: Toggles the visibility of the menu
function toggleMenu(){

    var nav = $('#navbar-main');

    if(!nav.hasClass("open")){
        nav.addClass("open");
    } else {
        nav.removeClass("open");
    }
}

//Function: Toggles the color of the logo when mouseover
function toggleLogo(color){

    var logo = document.getElementById("logo");

    if(color == 'red'){
        logo.src = "/images/krish-logo-2196F3.svg";
    } else {
        logo.src = "/images/krish-logo.svg";
    }
}