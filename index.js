$(document).ready(function () {
  progressAnimate();

  //scroll to section when nav click
  function scrollTosection() {
    $('nav ul li').each(function () {
      var thisOffset = $('.' + $(this).data('id')).offset().top - 100;
      $(this).click(function () {
        $('html, body').animate({
          scrollTop: thisOffset
        }, 1000);
        if ($(this).data('id') == 'info') {
          progressAnimate();
        }
      })
    })
  }
  scrollTosection();

  //typing message 
  var i = 0;
  var j = 0;
  var txt = '파도처럼 흔들려도 멈춰있지 않고 끊임없이 앞으로 나아가는 사람';
  var txt2 = '원진영입니다';
  var speed = 50;
  var $first = document.querySelector('.chat .mine .first');
  var $last = document.querySelector('.chat .mine .last');

  function typeWriter1() {
    if (i < txt.length) {
      $first.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }
  function typeWriter2() {
    if (j < txt2.length) {
      $last.innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  }

  function interval() {
    setInterval(typeWriter1, 100);
    setInterval(typeWriter2, 1000);
  }
  var intervalID = setInterval(interval(), 100);
  // function interval() {
  //   setInterval(function () {
  //     typeWriter1()
  //   }, 100);
  //   setInterval(function () {
  //     typeWriter2()
  //   }, 1000);
  // }
  // setInterval(function() {
  //   interval()
  // }, 1200);

  //dark-light mode
  const rootDataset = document.documentElement.dataset;
  $('.darkmode').on('click', function () {
    $(".darkmode").toggleClass('light');
    const inDarkMode = (rootDataset.theme === 'dark');
    rootDataset.theme = inDarkMode ? '' : 'dark';
    $("#imageChange").toggleClass('dark');
  });
});

//progress bar and text animate
function progressAnimate() {
  //progress bar animate
  $(".progress-bar").each(function () {
    var percentage = parseInt($(this).siblings('.progress-text').attr('data-target'));
    $('.progress-fill').css({
      'width': 150
    });
    if (percentage > 0) {
      $(this).find('.progress-fill').animate({
        'width': percentage + '%'
      }, 1000);
    } else {
      $('.progress-fill').css({
        'color': 'black',
        'background': '#006adb'
      }, 3000);
    }
  });
  //count up
  $('.progress-text').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-target');
    $({
      countNum: $this.text()
    }).animate({
      countNum: countTo
    }, {
      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum) + '%');
      },
      complete: function () {
        $this.text(Math.floor(this.countNum) + '%');
      }
    });
  });

  //send email
  document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // submit이벤트 막기
    var fromName = document.querySelector('input.name').value; // 전송자 이름 추출
    var sendSuccess = '메일 전송에 성공했습니다.';
    var sendFail = '메일 전송에 실패했습니다.';

    emailjs.init("user_OOabrlvn0eA9WUFUxhkZB"); // API keys
    emailjs.sendForm('service_6wd074u', 'template_pyyeeab', this)
      .then(function () {
        alert(sendSuccess);
      }, function (error) {
        alert(sendFail);
        console.log('전송실패', error);
      });
  });
}

//trigger animation when the user scrolls to info section
window.addEventListener('scroll', () => {
  var currentPos = window.scrollY || document.documentElement.scrollTop; //ie인식포함
  var infoTop = document.querySelector('.sec.info').offsetTop;
  var projectTop = document.querySelector('.sec.project').offsetTop;
  if (currentPos > infoTop - 400 && currentPos < infoTop - 360) {
    document.addEventListener('scroll', progressAnimate, {
      once: true
    });
    //nav 이동 시 버벅임
    // } else if ((currentPos < projectTop - 140) && (currentPos > projectTop - 180)) {
    //   document.addEventListener('scroll', progressAnimate, {
    //     once: true
    //   });
  } else {
    return false
  }
});