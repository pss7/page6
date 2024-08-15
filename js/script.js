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

    $('#header nav .menu li a').click(function () {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });

})