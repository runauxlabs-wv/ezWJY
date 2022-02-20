$(function () {

    //리사이징 할때마다 새로고침
    var windowWidth = $(window).width();

    $(window).resize(function () {
        if (windowWidth != $(window).width()) {
            setTimeout(function () {
                location.reload();
                return;
            }, 1);
        }
    });

    //header, footer load
    // $("header").load("header.html"); 
    // $("footer").load("footer.html"); 

    //index to visit find tab
    if (location.hash == "#tab1") {
        $('#tab1, #tab1').addClass('on').siblings().removeClass('on');
        $('.tab .nav-tabs [data-id=tab1]').addClass('on').parents().siblings().find('a').removeClass('on');
    } else if (location.hash == "#tab2") {
        $('#tab2, #tab2').addClass('on').siblings().removeClass('on');
        $('.tab .nav-tabs [data-id=tab2]').addClass('on').parents().siblings().find('a').removeClass('on');
    } else if (location.hash == "#tab3") {
        $('#tab3, #tab3').addClass('on').siblings().removeClass('on');
        $('.tab .nav-tabs [data-id=tab3]').addClass('on').parents().siblings().find('a').removeClass('on');
    }

    //gnb nav and aside nav find tab 
    $(".gnbwrap .nav .depth2 li, .tab .nav-tabs li").click(function () {
        var thisHash = $(this).find('a').attr('href');
        var hashNum = thisHash.substring(1);
        $('.tab .conBox'+thisHash).addClass('on').siblings().removeClass('on');
        $(this).find('a').addClass('on').parents().siblings().find('a').removeClass('on');
        $('.tab .nav-tabs li [data-id='+hashNum).addClass('on').parents().siblings().find('a').removeClass('on');
    });

});
if ($('#tab1.on')) {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(36.63468321629873, 127.47829176480698), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(36.63468321629873, 127.47829176480698);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
}
$('main #tab1 #map').on('click', function() {
    window.open('http://kko.to/13ljvwadn');
})

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