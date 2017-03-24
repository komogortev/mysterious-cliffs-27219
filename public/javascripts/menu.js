$(function(){

    var $menuBtn = $('.menu-trigger');
    var $navBar = $('.js-navbar');

    $menuBtn.on('click.menuToggle', function toggleNavbar(){
        if ($navBar.hasClass('is-active')) {
            $navBar.removeClass('is-active');
        } else {
            $navBar.addClass('is-active');
        }
    });


});