
$(document).ready(function(){
    $('.slider').on('init', function(event, slick){
        $('.slick-active .slide-text, .slick-active .slide-more-box').fadeIn();
    });
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slide-text, .slide-more-box').css('display', 'none');
    });
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-active .slide-text, .slick-active .slide-more-box').fadeIn();
    });

    $('.slider img').on('mousedown', function(event, slick){
        $('.slick-active .slide-text, .slick-active .slide-more-box').fadeOut();
    });

    $('.slider img').on('mouseup', function(event, slick){
        $('.slick-active .slide-text, .slick-active .slide-more-box').fadeIn();
    });



    $('.topslider').slick({
        centerMode: true,
        dots: true,

        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true


    });

    // Slider 2
    $('.ctr-slider').slick({
        slidesToShow: 1,
        speed: 700,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 15000,
        infinite: true,
        slidesToScroll: 1
    });
});