$(document).ready(function() {
    $('#btn-search').click(function() {
        $(this).toggleClass('active');
        $('#searchform').toggleClass('active');
        $('#searchform input[type=search]').focus();
        return false;
    })

    $('.scrollbar-outer').scrollbar();

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

    $('.carousel').carousel({
        interval: 6000,
        pause: "false"
    });
})
$('.ui.dropdown')
    .dropdown();
$('a#advance-search').click(function() {
    $('.advance-search').toggleClass('hidden');
    return false;
})
