$(document).ready(function () {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    $('.swiper.ticketSlide .swiper-wrapper').slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        nextArrow: $('.swiper-button-next'),
        prevArrow: $('.swiper-button-prev'),
    });
    $('.swiper.eduSlide .swiper-wrapper').slick({
        infinite: false,
        // slidesToShow: 3,
        autoSlidesToShow: true,
        variableWidth: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                // autoplay: true,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
            }
        }]
    });
    $('.swiper.anxSlide .swiper-wrapper').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        arrows: false
    });
    $('.swiper.snsSlide .swiper-wrapper').slick({
        infinite: true,
        autoSlidesToShow: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
            }
        }]
    });
});

//ellipsis
var clamp1 = new MultiClamp(document.querySelector('p.ellipsis'), {
    ellipsis: '...',
    clamp: 2
});
var clamp2 = new MultiClamp(document.querySelector('p.ellipsis2'), {
    ellipsis: '...',
    clamp: 2
});
var clamp3 = new MultiClamp(document.querySelector('p.ellipsis3'), {
    ellipsis: '...',
    clamp: 2
});
var clamp4 = new MultiClamp(document.querySelector('p.ellipsis4'), {
    ellipsis: '...',
    clamp: 2
});
var clamp5 = new MultiClamp(document.querySelector('p.ellipsis5'), {
    ellipsis: '...',
    clamp: 2
});




//mobile
//section nav
$('.mSecNav li').click(function () {
    var tabindex = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    if (tabindex == 0) {
        $('.sec').removeClass('on');
        $('main').removeClass('on');
    } else {
        $('main').addClass('on');
        $('.sec').eq(tabindex - 1).addClass('on').siblings().removeClass('on');
    }
    clamp1.reload();
    clamp2.reload();
    clamp3.reload();
    clamp4.reload();
    clamp5.reload();
});
//exhi ticket
$('.sec.exhi .ticket').click(function () {
    var link = $(this).find('a').attr('href');
    window.open(link, '_self');
});
//menu:close icon toggle
$(".material-icons").click(function () {
    $("main .sns, .gnb").toggleClass("on");
    $(this).text(function (e, text) {
        return text === 'close' ? 'menu' : 'close'
    });
    $(this).toggleClass('on');
});
//gnb
if ($(window).width() < 640) {
    $('.gnb .nav .depth1 > a').append('<i class="fas fa-chevron-right"></i>')
    $('.gnb .nav .depth1 > a').click(function () {
        $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
        $(this).next().slideToggle(300);
        $('.gnb .nav .depth1 a').not(this).next().slideUp(300);
        return false;
    });
} else {
    $('.gnbwrap .nav .depth1 > a > i').hide();
}