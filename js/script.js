$(function () {

    $(window).load(function () {
        AOS.init({
            duration: 1500
        });

    });

    $('.mobileBtn').click(function () {

        $('#mobileWrap').animate({
            right: 0
        }, 300);
        $('.mobileBg').fadeIn();

    });

    $('.mobileClose').click(function () {

        $('#mobileWrap').animate({
            right: -3000
        }, 300);
        $('.mobileBg').fadeOut();

    });


})