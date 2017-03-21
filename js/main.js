$(document).ready(function() {
    $('#btn-search').click(function() {
        $(this).toggleClass('active');
        $('#searchform').toggleClass('active');
        $('#searchform input[type=search]').focus();
        return false;
    })

    $('#contact-btn').click(function(event) {
        event.preventDefault();
        $('#slidingcontact').animate({
            right: "0"
        }, 500, function() {});
        return false;
    })
    $('#close-btn').click(function(event) {
        event.preventDefault();
        $('#slidingcontact').animate({
            right: "-310px"
        }, 500, function() {});
        return false;
    })
    $("#headroom").headroom({
        "offset": 205,
        "tolerance": 5,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });
    $('.scrollbar-outer').scrollbar();

    $("#headroom .navbar ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function() {
            window.location.hash = hash;
            $("#headroom").removeClass('slideDown').addClass('slideUp');
        });

    });

    //FULL DIV SLIDER
    var $item = $('.carousel .item');
    var $wHeight = $('.full-height').height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
            'background-color': $color
        });
        $(this).remove();
    });

    $(window).on('resize', function() {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    // $('.carousel').carousel({
    //     interval: 6000,
    //     pause: "false"
    // });
})
$('.ui.dropdown')
    .dropdown();
$('a#advance-search').click(function() {
    $('.advance-search').toggleClass('hidden');
    return false;
})
