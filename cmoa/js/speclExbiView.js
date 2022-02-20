$(function () {
  var windowWidth = $(window).width();

  $(window).resize(function () {
    if (windowWidth != $(window).width()) {
      setTimeout(function () {
        location.reload();
        return;
      }, 1);
    }
  });
  var swiper = new Swiper('.exhiSlide', {
    slidesPerView: 'auto',
    spaceBetween: 100,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    hashNavigation: true,
    freeMode: false,
    simulateTouch: false,
  });
  var swiper2 = new Swiper('.exhiinfoSlide', {
    spaceBetween: 100,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    speed: 10,
    simulateTouch: false,
  });
  //------------------------------전시 설명
  var thisUrl = $(location).attr('href'); //get url
  console.log(thisUrl);
  var thisHash = thisUrl.split("#").pop(); // get hash
  console.log(thisHash);
  var thisIndex = parseInt(thisHash.substring(4));
  console.log(thisIndex);
  swiper2.slideTo(thisIndex);

  // 타 페이지에서 해시를 찾아 이동
  if (location.hash == "#tab1") {
    $('#tab1, #tab1').addClass('on').siblings().removeClass('on');
    $('.tab .nav-tabs [data-id=tab1]').addClass('on').siblings().removeClass('on');
  } else if (location.hash == "#tab2") {
    $('#tab2, #tab2').addClass('on').siblings().removeClass('on');
    $('.tab .nav-tabs [data-id=tab2]').addClass('on').siblings().removeClass('on');
  } else if (location.hash == "#tab3") {
    $('#tab3, #tab3').addClass('on').siblings().removeClass('on');
    $('.tab .nav-tabs [data-id=tab3]').addClass('on').siblings().removeClass('on');
  }

  // 탭메뉴 가로형-인덱스번호
  // $(".tab .nav-tabs li").click(function () {
  //   var tabindex = $(this).index();
  //   $(location.hash).addClass('on').siblings().removeClass('on');
  //   $(".tab .conBox").eq(tabindex - 1).addClass('on').siblings().removeClass('on');
  // });

});

//mobile
let iw = window.innerWidth;
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