// page-bg-script

$(document).ready(function() {
    $("#page-bg-slider").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        autoplaySpeed: 1,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
    });
});

// page-bg-script

// student-slider-script
$(document).ready(function() {
    $("#student-slider").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: false,
        autoplayTimeout: 2500,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 2,
                margin:10
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                loop: false
            }
        }
    });
});

// student-slider-script


// testimonial-slider-script 
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: false,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
    });
});


// testimonial-slider-script 

// certificates-script 

$(document).ready(function() {
    $("#certificates-slider").owlCarousel({
        items: 4,
        loop: true,
        center: false,
        autoplay: true,
        margin: 20,
        dots: false,
        nav: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 2500,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
    });
});

// certificates-script