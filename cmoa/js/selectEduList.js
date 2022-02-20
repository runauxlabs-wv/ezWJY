$(function () {
  $('.exhiScroll .exhilist').click(function () {
    var dataHash = $(this).attr('data-hash');
    $('.exhiView .exhi').filter('.' + dataHash).addClass('on').siblings().removeClass('on');
    clamp1.reload();
    clamp2.reload();
  })
  $('.swiper.exhiScroll .swiper-wrapper').slick({
    infinite: false,
    draggable: true,
    vertical: true,
    slidesToShow: 1,
    nextArrow: $('.swiper-button-next'),
    prevArrow: $('.swiper-button-prev'),
  });

  //ellipsis
  var clamp1 = new MultiClamp(document.querySelector('p.ellipsis'), {
    ellipsis: '...',
    clamp: 1
  });
  var clamp2 = new MultiClamp(document.querySelector('p.ellipsis2'), {
    ellipsis: '...',
    clamp: 1
  });

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    },
    defaultDate: '2021-11-12',
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: true,
    fixedWeekCount: false,
    events: [
      {
        title: 'Business Lunch',
        start: '2021-11-03T13:00:00',
        constraint: 'businessHours'
      },
      {
        title: 'Meeting',
        start: '2021-11-13T11:00:00',
        constraint: 'availableForMeeting', // defined below
        color: '#257e4a'
      },
      {
        title: 'Conference',
        start: '2021-11-18',
        end: '2021-11-20'
      },
      {
        title: 'Party',
        start: '2021-11-29T20:00:00'
      },

      // areas where "Meeting" must be dropped
      {
        id: 'availableForMeeting',
        start: '2021-11-11T10:00:00',
        end: '2021-11-11T16:00:00',
        rendering: 'background'
      },
      {
        id: 'availableForMeeting',
        start: '2021-11-13T10:00:00',
        end: '2021-11-13T16:00:00',
        rendering: 'background'
      },
    ]
  });

});


// document.addEventListener('DOMContentLoaded', function () {
//   var calendarEl = document.getElementById('calendar');

//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
//     },
//     fixedWeekCount: false,
//     initialDate: '2021-12-10',
//     initialView: 'dayGridMonth',
//     navLinks: true, // can click day/week names to navigate views
//     nowIndicator: true,

//     // weekNumbers: true,
//     weekNumberCalculation: 'ISO',

//     editable: true,
//     selectable: true,
//     dayMaxEvents: true, // allow "more" link when too many events

//     events: [{
//         id: '1',
//         title: '청주시립미술관',
//         start: '2021-09-17',
//         end: '2022-02-06',
//         color: '#A04A6D',
//       },
//       {
//         title: '청주시립대청호미술관',
//         start: '2021-10-22',
//         end: '2022-01-16',
//         color: '#465782',
//       },
//       {
//         groupId: 999,
//         title: '청주미술창작스튜디오',
//         start: '2021-12-02',
//         end: '2021-12-12',
//         color: '#E4A91D',
//       },
//       {
//         groupId: 999,
//         title: '오창전시관',
//         start: '2021-12-01',
//         end: '2022-02-27',
//         color: '#8D9542',
//       },
//     ],
//   });
//   calendar.render();
// });

//mobile
var iw = window.innerWidth;
if (iw < 769) {
  $('.exhiScroll .exhilist').ready(function () {
    $('.exhiView, .exhi').removeClass('on');
    $('.exhiScroll .exhilist').click(function () {
      var dataHash = $(this).attr('data-hash');
      $('.exhiView').addClass('on');
      $('.exhiView .exhi').filter('.' + dataHash).addClass('on');
      $('.exhiView .exhi').filter('.' + dataHash).click(function () {
        $('.exhiView .exhi').filter('.' + dataHash).removeClass('on');
        $('.exhiView').removeClass('on');
      });
    });
  });


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