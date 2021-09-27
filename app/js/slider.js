$(document).on('ready', function() {
    $(".slider").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                },

            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },

            }, {
                breakpoint: 490,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },

            }
        ]
    })
})