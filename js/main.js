jQuery(function($) {
    if($(window).width()>769){
        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

        });

        $('.navbar .dropdown > a').click(function(){
            location.href = this.href;
        });

    }
});

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
    
    $('.scrollbar-outer').scrollbar();

    $("#headroom .navbar ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        // animate
        $.when(
        	$('html, body').animate({
	            scrollTop: $(hash).offset().top
	        }, 300, function() {
	            window.location.hash = hash;
	        })
        ).then(
        	$("#headroom").removeClass('slideDown').addClass('slideUp')
        )
    });

    $("#headroom").headroom({
        "offset": 205,
        "tolerance": 5,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });

    //$(".page-canho .main-content").css("padding-top", $('#headroom').outerHeight())

    //FULL DIV SLIDER
    var $item = $('.page-canho .carousel .item');
    var $wHeight = $('.page-canho .full-height').height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.page-canho .carousel img').each(function() {
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

    $(".tinhlaisuat #addmore").click(function(e){
        e.preventDefault();
        $(".tinhlaisuat .khuyenmai").toggleClass("hidden");
        return false;
    })
    $(".tinhlaisuat input[type=submit]").click(function(e){
        e.preventDefault();
        $(".tinhlaisuat .result").toggleClass("hidden");
        return false;
    })
})
$('.ui.dropdown')
    .dropdown();
$('a#advance-search').click(function() {
    $('.advance-search').toggleClass('hidden');
    return false;
})