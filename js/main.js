$(document).ready(function(){

    $('.steps_slider').slick({
        autoplay: false,
        dots: true,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slider-paging-number',
        customPaging: function (slick) { return (slick.currentSlide + 1) + ' из ' + slick.slideCount; }
    }).on('afterChange', function (event, slick, currentSlide) {

        $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));

    });



    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    new WOW().init();


});


