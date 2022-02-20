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
  var txt = 'Lorem ipsum dummy text blabla. Lorem ipsum dummy text blabla. Lorem ipsum dummy text blabla.';
  var speed = 50;
  var $this = document.querySelector('.chat .mine .last');

  function typeWriter() {
    if (i < txt.length) {
      $this.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setInterval(function () {
    typeWriter()
}, 100);

  //dark-light mode
  const rootDataset = document.documentElement.dataset;
  $('.darkmode').on('click', function () {
    $(".darkmode").toggleClass('light');
    const inDarkMode = (rootDataset.theme === 'dark');
    rootDataset.theme = inDarkMode ? '' : 'dark';
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