$(function () {

    //리사이징 할때마다 새로고침
    // var lastWidth = window.innerWidth;

    // function changeWinRefresh() {
    //     if (window.innerWidth != lastWidth) {
    //         // location.reload(); // 파이어폭스에서 리프레시 안됨
    //         window.location = window.location; // 리프레시 파이어폭스 브라우저 이슈 해결
    //         lastWidth = window.innerWidth;
    //         return false;
    //     }
    // }
    // window.addEventListener('resize', changeWinRefresh);

    // window.onresize = function(){ 
    //     console.log("resize event fired");
    //     window.location = window.location;
    //     // location.reload();
    // }

    var windowWidth = $(window).width();

    $(window).resize(function () {
        if (windowWidth != $(window).width()) {
            setTimeout(function () {
                location.reload();
                return;
            }, 1);
        }
    });

    //index to exbilist find tab
    if (location.hash == "#tab1") {
        $('#tab1, #tab1').addClass('on').siblings().removeClass('on');
        $('.tab .nav-tabs [data-id=tab1]').addClass('on').parents().siblings().find('a').removeClass('on');
        $("#tab1").animate({ scrollTop: 0 }, "slow");
    } else if (location.hash == "#tab2") {
        $('#tab2, #tab2').addClass('on').siblings().removeClass('on');
        $('.tab .nav-tabs [data-id=tab2]').addClass('on').parents().siblings().find('a').removeClass('on');
        $("#tab2").animate({ scrollTop: 0 }, "slow");
    } else if (location.hash == "#tab3") {
        $('#tab3, #tab3').addClass('on').siblings().removeClass('on');
        $('.tab .nav-tabs [data-id=tab3]').addClass('on').parents().siblings().find('a').removeClass('on');
        $("#tab3").animate({ scrollTop: 0 }, "slow");
    }

    //gnb nav and aside nav find tab 
    $(".gnbwrap .nav .depth2 li, .tab .nav-tabs li").click(function () {
        var thisHash = $(this).find('a').attr('href');
        var hashNum = thisHash.substring(1);
        $('.tab .conBox' + thisHash).addClass('on').siblings().removeClass('on');
        $(this).find('a').addClass('on').parents().siblings().find('a').removeClass('on');
        $('.tab .nav-tabs li [data-id=' + hashNum).addClass('on').parents().siblings().find('a').removeClass('on');
        $(document).scrollTop();

        //filter all default set
        $('.filter').siblings().removeClass('active');
        $('.filter:first-child').addClass('active').click();
    });

    //anx filter
    $('.box:visible:even').addClass('on');
    $('.filter').click(function () {
        var value = $(this).attr('data-filter');
        var classvalue = $('.' + value);
        $(this).addClass('active').siblings().removeClass('active');
        if (value == 'all') {
            $('.box').removeClass('on off').slideDown('500');
            $('.box:visible:odd').addClass('off');
            $('.box:visible:even').addClass('on');
        } else {
            $('.box').removeClass('on off').hide().filter(classvalue).slideDown('500');
            //접는 애니메이션이 짧아야(Queue 이슈) 다음 애니메이션 적용에 딜레이가 걸리지 않음
            $('.box:visible:odd').addClass('off');
            $('.box:visible:even').addClass('on');
            // 홀짝을 셀 때, 기존 객체(all)순서를 기반으로 적용되는부분 때문에 보이는 박스중에서 홀짝을 클래스로 구분한다.
        }
        if($('.box').is(":visible")) $('p.notice').removeClass('on');
        else $('p.notice').addClass('on');
    });
    
});

//mobile
var iw = window.innerWidth;
if (iw < 769) {
    //append mobile icon
    $('.gnbwrap .nav .depth1 > a').append('<i class="fas fa-chevron-right"></i>');
    //menu click
    $(".material-icons").click(function () {
        //sns, gnb, header on
        $("header .sns, .gnbwrap, header").toggleClass("on");
        //menu:close toggle
        $(this).text(function (e, text) {
            return text === 'close' ? 'menu' : 'close'
        });
        //gnb depth1 click
        $('.gnbwrap .nav .depth1 > a').click(function () {
            //arrow icon change
            $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
            //gnb depth2 slide toggle
            $(this).next().slideToggle();
            //not this element slide up
            $('.gnbwrap .nav .depth1 > a').not(this).next().slideUp(300);
            //gnb depth2 click
            $('.gnbwrap .nav .depth2 li').click(function () {
                //mobile nav close
                $("header .sns, .gnbwrap, header").toggleClass("on");
                //closeBt change to menuBt
                $(".material-icons").text(function (e, text) {
                    return text === 'close' ? 'menu' : 'menu'
                });
            })
            //gnb depth1 return false
            return false;
        });
    });
} else {
    $('i.fa-chevron-right').remove();
}