AOS.init();

//reload when resizing
$(document).ready(function () {
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    //mobile nav
    if ($(window).width() < 640) {
        $('.mMenuBt').on('click', function () {
            $('.header-wrap, .gnb, .nav').toggleClass('on');
            $('.nav > li > a').click(function () {
                $(this).next().slideToggle(300);
                $('.nav > li > a').not(this).next().slideUp(300);
                return false;
            });
            $(this).text(function (e, text) {
                return text === 'close' ? 'menu' : 'close'
              });
        });
    }
//main swiper
var swiper = new Swiper(".mainSlide", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
});

//input only number
$('#numberOnly').keypress(function (e) {
    var charCode = (e.which) ? e.which : e.keyCode
    if (String.fromCharCode(charCode).match(/[^0-9]/g)) return false;
});
//clear the value after click button
$('.supportBt').on('click', function () {
    $('#numberOnly').val("");
});
//clear the value after refresh the page
$(document).ready(function () {
    $('#numberOnly').val("");
});
});

//selectbox
function CustomSelectBox(selector) {
    this.$selectBox = null,
        this.$select = null,
        this.$list = null,
        this.$listLi = null;
    CustomSelectBox.prototype.init = function (selector) {
        this.$selectBox = $(selector);
        this.$select = this.$selectBox.find('.box .select');
        this.$list = this.$selectBox.find('.box .list');
        this.$listLi = this.$list;
    }
    CustomSelectBox.prototype.initEvent = function (e) {
        var that = this;
        this.$select.on('click', function (e) {
            that.listOn();
        });
        this.$listLi.on('click', 'li', function (e) {
            that.listSelect($(this));
        });
        $(document).on('click', function (e) {
            that.listOff($(e.target));
        });
    }
    CustomSelectBox.prototype.listOn = function () {
        this.$selectBox.toggleClass('on');
        if (this.$selectBox.hasClass('on')) {
            this.$list.css('display', 'block');
        } else {
            this.$list.css('display', 'none');
        };
    }
    CustomSelectBox.prototype.listSelect = function ($target) {
        $target.addClass('selected').siblings('li').removeClass('selected');
        this.$selectBox.removeClass('on');
        if(!$target.parent().hasClass('familysite')) {
            this.$select.text($target.text());
            this.$list.css('display', 'none');
        };
    }
    CustomSelectBox.prototype.listOff = function ($target) {
        if (!$target.is(this.$select) && this.$selectBox.hasClass('on')) {
            this.$selectBox.removeClass('on');
            this.$list.css('display', 'none');
        };
    }
    this.init(selector);
    this.initEvent();
}
$(function () {
    var select_spon = new CustomSelectBox('.select_box.spon');
    var select_price = new CustomSelectBox('.select_box.price');
    var select_field = new CustomSelectBox('.select_box.field');
    var financial = new CustomSelectBox('.select_box.financial');
    var year = new CustomSelectBox('.select_box.year');
    var global = new CustomSelectBox('.select_box.global');
    var family = new CustomSelectBox('.select_box.family');
    var globalList = {
        'Australia': 'http://www.savethechildren.org.au',
        'Canada': 'http://www.savethechildren.ca',
        'Denmark': 'http://www.redbarnet.dk',
        'Dominican Republic': 'http://savethechildren.org.do/stc-wp/',
        'Fiji': 'http://www.savethechildren.org.fj/',
        'Finland': 'http://www.pelastakaalapset.fi',
        'Germany': 'http://www.savethechildren.de',
        'Honduras': 'http://www.savethechildrenhonduras.org',
        'Hong Kong': 'http://savethechildren.org.hk/default.aspx ',
        'Iceland': 'http://www.barnaheill.is',
        'India': 'http://www.savethechildren.in',
        'Italy': 'http://www.savethechildren.it',
        'Japan': 'http://www.savechildren.or.jp',
        'Jordan': 'http://jordan.savethechildren.net',
        'Korea': 'http://www.sc.or.kr',
        'Lithuania': 'http://www.gelbvaik.lt',
        'Mexico': 'http://www.savethechildren.mx',
        'Netherlands': 'http://www.savethechildren.nl',
        'New Zealand': 'http://www.savethechildren.org.nz',
        'Norway': 'http://www.reddbarna.no',
        'Romania': 'http://www.salvaticopiii.ro',
        'South Africa': 'http://www.savethechildren.org.za',
        'Spain': 'http://www.savethechildren.es',
        'Swaziland': 'http://www.savethechildren.org.sz',
        'Sweden': 'http://www.rb.se',
        'Switzerland': 'http://www.savethechildren.ch',
        'United Kingdom': 'http://www.savethechildren.org.uk',
        'United States': 'http://www.savethechildren.org'
    };

    var i = 2;
    var list = $('.select_box.global .list');
    for (key in globalList) {
        list.append('<li data-tab="' + i + '"><a href="' + globalList[key] + '" target= "_blank">' + key + '</a></li>');
        i++;
    };
});
$(function () {
    $('.right .tabSelect li').on('click', function () {
        var index = $('.right .tabSelect li').index(this);
        counterAnimationHandler(index);
    })
})



//tab and selectbox switch
$(function () {
    var $tabButtonItem = $('#tab-button li'),
        $tabSelect = $('#tab-select', '#tab-in-select'),
        $tabContents = $('.tab-contents'),
        activeClass = 'is-active';
    $tabButtonItem.first().addClass(activeClass);
    $tabContents.not(':first').hide();
    $tabButtonItem.find('a').on('click', function (e) {
        var target = $(this).attr('href');
        $tabButtonItem.removeClass(activeClass);
        $(this).parent().addClass(activeClass);
        $tabSelect.val(target);
        $tabContents.hide();
        $(target).show();
        e.preventDefault();
    });
    $tabSelect.on('change', function () {
        var target = $(this).val(),
            targetSelectNum = $(this).prop('selectedIndex');
        $tabButtonItem.removeClass(activeClass);
        $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
        $tabContents.hide();
        $(target).show();
    });
});


//number count
function counterAnimationHandler(index) {
    //counter and percentage data
    var counters = [{
        counter: 83231019,
        percentage: 23
    }, {
        counter: 67797529,
        percentage: 3
    }, {
        counter: 65741425,
        percentage: 18
    }, {
        counter: 80284404,
        percentage: 42
    }, {
        counter: 56214821,
        percentage: '-'
    }]

    //change counter and percentage value
    $('.counter').attr('data-target', Object.values(counters)[index].counter);
    $('.percentage').text(Object.values(counters)[index].percentage + '%');

    //if (current year < previous year) then arrow down
    if (index > 0 && index < counters.length - 1) {
        var curYear = Object.values(counters)[index].counter;
        var preYear = Object.values(counters)[index + 1].counter;
        console.log(`curYear: ${curYear}`);
        console.log(`preYear: ${preYear}`);
        if (curYear < preYear) {
            $('.percentage').addClass('down');
        } else $('.percentage').removeClass('down');
    } else $('.percentage').removeClass('down');

    //count up animation
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-target');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 999,
            easing: 'linear',
            step: function () {
                $this.text(addCommas(Math.floor(this.countNum)));
            },
            complete: function () {
                $this.text(addCommas(this.countNum));
            }
        });

        //add comma function
        function addCommas(nStr) {
            return nStr.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    });
}
counterAnimationHandler(0);

//line, bar chart
function createChart() {
    //chart define
    const linectx = document.getElementById('lineChart').getContext('2d');
    const lineSelectctx = document.getElementById('lineChartSelect').getContext('2d');
    const barctx = document.getElementById("barChart").getContext("2d");

    //create color gradient
    function createGradient() {
        var bgGradient = linectx.createLinearGradient(0, 0, 0, 400);
        bgGradient.addColorStop(0, 'rgba(255, 39, 9, 0.31)');
        bgGradient.addColorStop(0.5, 'rgba(255, 39, 9, 0.19)');
        bgGradient.addColorStop(0.67, 'rgba(255, 39, 9, 0.1)');
        bgGradient.addColorStop(1, 'rgba(255, 39, 9, 0)');
        var lineGradient = linectx.createLinearGradient(0, 0, 0, 400);
        lineGradient.addColorStop(0, 'rgba(255, 39, 9, 1)');
        lineGradient.addColorStop(1, 'rgba(220, 37, 55, 1)');
        var barGradient = barctx.createLinearGradient(0, 0, 0, 170);
        barGradient.addColorStop(0, 'rgba(255, 39, 9, 0.8)');
        barGradient.addColorStop(1, 'rgba(220, 37, 55, 0.8)');

        var lineChart = new Chart(linectx, {
            type: 'line',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020'],
                datasets: [{
                    tension: 0.3,
                    fill: true,
                    backgroundColor: bgGradient,
                    borderColor: lineGradient,
                    borderWidth: 3,
                    data: [2752081, 80284404, 65741425, 67797529, 83231019],
                }],
                title: '직접 지원한 아동과 가족, 지역주민 (단위: 명)'
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: false,
                scales: {
                    x: {
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        var lineSelectChart = new Chart(lineSelectctx, {
            type: 'line',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020'],
                datasets: [{
                    tension: 0.3,
                    fill: true,
                    backgroundColor: bgGradient,
                    borderColor: lineGradient,
                    borderWidth: 3,
                    data: [14, 1150, 970, 913, 1465],
                }],
                title: '분야별 지원한 아동과 가족, 지역주민 (단위: 만 명)'
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: false,
                scales: {
                    x: {
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        //add title text
        $('div[id*=tab] h4').text(lineChart.data.title);

        //line data
        var lineData = {
            chart1: [2752081, 80284404, 65741425, 67797529, 83231019, '직접 지원한 아동과 가족, 지역주민 (단위: 명)'],
            chart2: {
                select0: [14, 1150, 970, 913, 1465],
                select1: [1, 5690, 4708, 5049, 5666],
                select2: [4, 470, 423, 539, 705],
                select3: [0, 91, 158, 92, 65],
                select4: [0, 831, 466, 586, 939],
                title: '분야별 지원한 아동과 가족, 지역주민 (단위: 만 명)'
            },
            chart3: [2557199, 3727628, 3714882, 4960142, 2437963, '국제사업으로 지원한 아동과 가족, 지역주민 (단위: 명)'],
            chart4: [187293, 151017, 109453, 119487, 144734, '국내사업으로 지원한 아동과 가족, 지역주민 (단위: 명)'],
            chart5: [7589, 11728, 21305, 11358, 44560, '권리옹호에 참여한 아동과 가족, 지역주민 (단위: 명)'],
            chart6: [
                [69763323, 74209326, 74244499, 81514596, 94748958],
                [71238721, 70190612, 74381361, 63118990, 83321943],
                '재무보고 (단위: 원)'
            ]
        }

        //select list
        var selectList = {
            tab1: ['교육', '보건, 영양', '아동보호', '권리옹호', '빈곤퇴치'],
            tab5: ['수입', '지출']
        }

        $('#tab-button li').on('click', function () {
            var tabIndex = $('#tab-button li').index(this);
            addSelectList(tabIndex);
            //when tabIndex is not 1, 5 then call update function 
            if (!(tabIndex == 1 || tabIndex == 5)) {
                updateLineData(tabIndex);
            } else updateLineSelectData(0);
        })

        //add select list
        function addSelectList(tabIndex) {
            //tabindex value change
            if (tabIndex == 1) tabIndex = 0;
            else tabIndex = 1;
            var d = Object.values(selectList)[tabIndex];
            var $select = $('#tab02 .select_box .box .select');
            var $list = $('#tab02 .select_box .box .list');
            var $li = $('#tab02 .select_box .box .list li');

            //check if tag is empty
            var isSelectEmpty = $select.is(':empty');
            var isLiEmpty = $li.is(':empty');

            //tag is empty
            if (isSelectEmpty && isLiEmpty) {
                $select.text(d[0]);
                $li.text(d[0]);
                //select list append <li>
                for (var i = 1; i < d.length; i++) {
                    $list.append('<li data-tab="' + (i + 1) + '">' + d[i] + '</li>');
                }
            }

            //tag is not empty
            else {
                //change to correct value
                if (!($select.text() === d[0])) {
                    $select.text(d[0]);
                    $li.text(d[0]);
                    //select list remove exclude first li
                    $('#tab02 .select_box .box .list li:not(:first)').remove();
                    //select list append
                    for (var i = 1; i < d.length; i++) {
                        $list.append('<li data-tab="' + (i + 1) + '">' + d[i] + '</li>');
                    }
                }
            }
        }

        //get selected list index and call update function
        $('#tab02 .select_box .box .list').on('click', 'li', function () {
            var selectIndex = $('.left .tabSelect li').index(this);
            updateLineSelectData(selectIndex);
        });

        //update select line chart data
        function updateLineSelectData(selectIndex) {
            var tabIndex = $('#tab-button li.is-active').index();
            //d = selected tab of data 
            var d = Object.values(lineData)[tabIndex];
            for (var i = 0; i < 5; i++) {
                //old data update
                lineSelectChart.data.datasets[0].data[i] = Object.values(d)[selectIndex][i];
            }
            //title update (object of last index value)
            $('div[id=tab02] h4').text(Object.values(d)[Object.values(d).length - 1]);

            //chart reload
            lineSelectChart.update();
        }

        //update tab line chart data
        function updateLineData(tabIndex) {
            for (var i = 0; i < 5; i++) {
                //old data update
                lineChart.data.datasets[0].data[i] = Object.values(lineData)[tabIndex][i];
            }
            //title update
            $('div[id=tab01] h4').text(Object.values(lineData)[tabIndex][5]);

            //chart reload
            lineChart.update();
        }

        //create default barChart
        var barChart = new Chart(barctx, {
            type: 'bar',
            data: {
                labels: ['교육', '보건/영양', '아동보호', '권리옹호', '빈곤퇴치'],
                datasets: [{
                    fill: true,
                    backgroundColor: barGradient,
                    borderRadius: 4,
                    data: [1465, 5666, 705, 65, 939],
                }]
            },
            options: {
                indexAxis: 'y',
                elements: {
                    bar: {
                        borderWidth: 2,
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    }
                }
            }
        });

        //bar data
        var barData = {
            chart2020: [1465, 5666, 705, 65, 939],
            chart2019: [913, 5049, 539, 92, 586],
            chart2018: [970, 4708, 423, 158, 466],
            chart2017: [1150, 5690, 470, 91, 831],
            chart2016: [14, 1, 4, 0, 0]
        }

        //get active list index and call data update function 
        $('.right .tabSelect li').on('click', function () {
            var actIndex = $(this).index();
            // console.log(actIndex);
            updateData(actIndex);
        });

        //correct data for year
        function updateData(actIndex) {
            barChart.data.datasets[0].data = Object.values(barData)[actIndex];
            barChart.update();
        }
    }
    createGradient();
}
createChart();

//map chart
am5.ready(function () {
    //create root and chart
    var root = am5.Root.new("map");

    // create map
    var map = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "none",
            wheelY: "none",
            projection: am5map.geoNaturalEarth1()
        })
    );

    //create polygon series
    var polygonSeries = map.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_continentsLow,
            exclude: ["antarctica"],
            fill: am5.color(0xbbbbbb)
        })
    );

    //create point series
    var pointSeries = map.series.push(
        am5map.MapPointSeries.new(root, {})
    );

    //map data array
    var mapArr = [{
        NA: {
            title: 'North America',
            latitude: 25.1667,
            longitude: -93.1667,
        },
        LA: {
            title: 'Latin America',
            latitude: -35.326572,
            longitude: -60.157227,
        },
        EU: {
            title: 'European Union',
            latitude: 30.896104,
            longitude: 29.160156,
        },
        As: {
            title: 'Asia',
            latitude: 0.212106,
            longitude: 83.183594,
        },
        Af: {
            title: 'Africa',
            latitude: -61.081385,
            longitude: 21.621094,
        }
    }, {
        NA: 1.5,
        LA: 2.5,
        EU: 2.5,
        As: 15,
        Af: 25
    }, {
        NA: 0.5,
        LA: 1.5,
        EU: 3.5,
        As: 20,
        Af: 25
    }, {
        NA: 0.5,
        LA: 2,
        EU: 4.5,
        As: 17,
        Af: 25
    }, {
        NA: 0.5,
        LA: 2.5,
        EU: 3.5,
        As: 20,
        Af: 25
    }, {
        NA: 5.5,
        LA: 2.5,
        EU: 5,
        As: 15,
        Af: 22
    }];

    //default data set
    var i = 0;
    for (var key in mapArr[0]) {
        var d = [1.5, 2.5, 2.5, 15, 25];
        pointSeries.data.push({
            geometry: {
                type: "Point",
                coordinates: [mapArr[0][key].longitude, mapArr[0][key].latitude]
            },
            value: d[i]
        });
        i++;
    }

    //create default point
    pointSeries.bullets.push(function (root, series, dataItem) {
        var value = dataItem.dataContext.value;
        var container = am5.Container.new(root, {});
        var color = 'rgba(218, 40, 31, 0.72)';
        var radius = 10 + value / 20 * 20;
        var circle = container.children.push(am5.Circle.new(root, {
            radius: radius,
            fill: color,
            dy: -radius * 2
        }))
        return am5.Bullet.new(root, {
            sprite: container
        });
    });

    //get active list index and call data update function 
    $('.right .tabSelect li').on('click', function () {
        var actIndex = $(this).index() + 1;
        updateData(actIndex);
    });

    //correct data for year
    function updateData(actIndex) {
        var mapData = pointSeries.data._values;
        var i = 0;
        for (var key in mapData) {
            mapData[key].value = Object.values(mapArr[actIndex])[i];
            i++;
        }
        pointSeries.bullets.push(function (root, series, dataItem) {});
    }
});


//dark-light mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);