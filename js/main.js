(function ($) {
    "use strict";

    // mean-menu (mobile)
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767",
        meanMenuOpen: "<span></span><span></span><span></span>",

    });


    //slider-arae
    $('.nav-style').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //project
    $('.all-project').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    //popup-video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    //	blog
    $('.all-blog').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    //    scroll
    $('body').materialScrollTop();



})(jQuery);
