// progress();
//scroll 
var infoTop = $('.sec.info').offset().top;
var infoBottom = $('.sec.info').height();
$(document).scroll(function () {
    var scrolltop = $(window).scrollTop();
    // if((scrolltop >= infoTop) && (scrolltop < infoBottom)) {
    //   progress();
    // }
    if ((scrolltop >= infoTop)) {
        setInterval(progress(), 1000);
    }
})
// https://devsnote.com/asks/2172


function runAction(direction) {
    console.log(direction + ' 실행 !!!!');
}

var currentDirection = ''; // 현재의 방향을 나타내는 변수
var lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수

$(window).scroll(function (event) {
    var currentPos = $(this).scrollTop();
    if (currentPos > lastScrollTop) {
        // 아래로 스크롤 중
        if (currentDirection != 'down') { // 마지막 방향 확인
            currentDirection = 'down';
            runAction('down');
        }

    } else {
        // 위로 스크롤 중
        if (currentDirection != 'up') { // 마지막 방향 확인
            currentDirection = 'up';
            runAction('up');
        }
    }
    lastScrollTop = currentPos; // 방향을 구하기 위해 마지막 스크롤 지점을 저장
});

// 스크롤이 페이지 바닥 근처에 올 경우 실행
if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {}



var currentDirection = '';
var lastScrollTop = 0;
$(window).scroll(function (e) {
    var $winScrollTop = $(window).scrollTop();
    var $winHeight = $(window).height();
    var $
    var currentPos = $(this).scrollTop();
    if (currentPos > lastScrollTop) {
        // setInterval(progressAnimate(), 1000);
        //down scroll
        if (currentDirection != 'down') { //last scroll check
            currentDirection = 'down';
            console.log(`you scrolling ${currentDirection}`);
        }
    } else {
        //up scroll
        if (currentDirection != 'up') { //last scroll check
            currentDirection = 'up';
            console.log(`you scrolling ${currentDirection}`);
        }
    }
    lastScrollTop = currentPos; //last scroll set
})



$(window).scroll(function () {
    function checkOffset() {
        var position = $('.sec.info').offset().top;
        console.log(position);
    }
    if ($(window).scrollTop() >= $('.sec.info').offset().top) {
        setInterval(checkOffset(), 1000);
        console.log('do?');
    } else {
        // do something else
    }
});



if (($w.scrollTop() > targetOffset) && ($w.scrollTop() < targetHeight)) {
    console.log('reach info section!');

    progressAnimate();
} else {
    // ...
}


var targetOffset = $(".sec.info").offset().top + 30;
var targetHeight = targetOffset + $('.sec.info').height() - 750;
if ((currentPos > targetOffset) && (currentPos < targetHeight)) {
    console.log('reach info section!');

    progressAnimate();
}



$(window).scroll(function () {
    // var targetOffset = $(".sec.info").offset().top + 30;
    // var targetHeight = targetOffset + $('.sec.info').height() - 750;
    var currentPos = $(this).scrollTop();
    if (currentPos > lastScrollTop) {
        // setInterval(progressAnimate(), 1000);
        //down scroll
        if (currentDirection != 'down') { //last scroll check
            currentDirection = 'down';
            console.log(`you scrolling ${currentDirection}`);
            // if ((currentPos > targetOffset) && (currentPos < targetHeight)) {
            //   console.log('reach info section!');

            //   progressAnimate();
            // }
        }
    } else {
        //up scroll
        if (currentDirection != 'up') { //last scroll check
            currentDirection = 'up';
            // console.log(`you scrolling ${currentDirection}`);
            // if ((currentPos > targetOffset) && (currentPos < targetHeight)) {
            //   console.log('reach info section!');

            //   progressAnimate();
            // }
        }
    }
    lastScrollTop = currentPos; //last scroll set

});