$(function(){

    $('.pancake__slider').slick({
        arrows: true,
        slidesToShow: 2,
        infinite: false,
        draggable: false,
        prevArrow:'<div class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
        responsive: [
            {
                breakpoint: 724,
                settings: {
                    arrows: false,
                    draggable: true
                }
            }
        ]
    });

    let clWidth = document.documentElement.clientWidth;

    $(window).on('resize', function() {
        clWidth = document.documentElement.clientWidth;

        if(clWidth > 993) {
           $('.header__listWrapper').show();
        }
    });

    $(window).on('click', function(e) {
        if (clWidth < 993) {
             if(!$(e.target.offsetParent).hasClass('header__list')) {
                $('.header__listWrapper').hide(300);
            }
        }
    });

    $('.header__bar').on('click', function() {
        $(this).next().toggle(300);
    });

    let $links = $('.header a');

    $links.on('click', function(e) {
        e.preventDefault();

        let target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 700);
    });
});