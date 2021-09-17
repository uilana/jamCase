$(document).on('ready', function() {
    $(".slider").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 10,
        slidesToScroll: 1,
    });

});