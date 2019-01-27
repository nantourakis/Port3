var doc = jQuery(document);
//Loader
$(window).on("load", function(){
    $('.loader').fadeOut(1100);
});

// Text Scrolling
doc.ready(function () {

    "use strict";

    $(window).scrollTop(0);

    var typed = new Typed(".mytext", {
        strings: ["I am Nick Antourakis", "I am a Web Developer", "I enjoy learning new skills"],
        smartBackspace: true, // Default value
        loop: true,
        backDelay: 1250,
        typeSpeed: 12

    });

    // Navbar Underlined Scrolling Effect
    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });

    // to keep header bar in place while scrolling
    $(window).scroll(function () {

        var top = $(window).scrollTop();

        if (top >= 200) {
            $('header').addClass('overlay');

        }
        else {
            if ($('header').hasClass('overlay'));
            {
                $('header').removeClass('overlay');
            }
        }
    })

    $('.progress-content .skill-progress').each(function () {

        var waypoint = new Waypoint({
            element: this,
            handler: function (direction) {
                var value = $(this.element).attr('data-progress');

                $(this.element).css('width', '' + value + '%');
            },
            offset: '73%'
        })


        /** Quotes Slider **/
        $(".quotes-container").owlCarousel({

            items: 1,
            autoplay: true,
            rewind: true
        });
          
    });

            /***  Scrolling Animations***/

        $('.animation').each(function () {

            var waypoint = new Waypoint({
                element: this,
                handler: function (direction) {
                    var cssValue = $(this.element).attr('data-animation');

                    $(this.element).addClass("animated "+cssValue);
                    $(this.element).css('opacity', '1');
                },
                offset: '73%'
            })
        });

    var $grid = $('.portfolio-container').isotope({
        // options
        itemSelector: '.portfolio-item'
    });

    $('.filter li').on('click', function () {

        $('.filter li').removeClass('filter-active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).addClass('filter-active');
    });

});


