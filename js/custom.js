// Scroll Top To Bottom
$(document).on('click', '#scrollToTop', function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
//button control
$(document).scroll(function(e) {
    var scrollPos = $(this).scrollTop();
    if (scrollPos < 100) {
        $('#scrollToTop').addClass('scroll-hide');
    } else {
        $('#scrollToTop').removeClass('scroll-hide');
    }
});
// Scroll Top To Bottom

//navigation-section
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "",
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
                if ($(window).width() > 768) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= 768) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);
(function($) {
    $(document).ready(function() {
        $("#cssmenu").menumaker({
            title: "",
            format: "multitoggle"
        });
    });
})(jQuery);
//navigation-section


// Nav-Script

// $(window).scroll(function() {
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
// });

// Nav-Script


// Image-Move-Script
document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".layer").forEach(function(move) {
        var moving_value = move.getAttribute("data-speed");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
// Image-Move-Script


