//     ctx[i] = document.getElementById('chart'+i).getContext('2d');
//     ctx2 = document.getElementById('chart21').getContext('2d'),
//     ctx2_2 = document.getElementById('chart22').getContext('2d'),
//     ctx2_3 = document.getElementById('chart23').getContext('2d'),
//     ctx2_4 = document.getElementById('chart24').getContext('2d'),
//     ctx2_5 = document.getElementById('chart25').getContext('2d'),
//     ctx3 = document.getElementById('chart3').getContext('2d'),
//     ctx4 = document.getElementById('chart4').getContext('2d'),
//     ctx5 = document.getElementById('chart5').getContext('2d'),
//     ctx61 = document.getElementById('chart61').getContext('2d'),
//     ctx62 = document.getElementById('chart62').getContext('2d'),

//     barChart2020 = document.getElementById('barChart2020').getContext('2d'),
//     barChart2019 = document.getElementById('barChart2019').getContext('2d'),
//     barChart2018 = document.getElementById('barChart2018').getContext('2d'),
//     barChart2017 = document.getElementById('barChart2017').getContext('2d'),
//     barChart2016 = document.getElementById('barChart2016').getContext('2d');





//--------------------------------------------------------------1
// var line = {
//     'config': {
//         'data': {
//             'labels': ['2016', '2017', '2018', '2019', '2020'],
//         },
//         'options': {
//             'plugins': {
//                 'legend': {
//                     'display': false
//                 }
//             },
//             'responsive': false,
//             'scales': {
//                 'x': {
//                     'grid': {
//                         'display': false,
//                     }
//                 },
//                 'y': {
//                     'grid': {
//                         'display': false
//                     }
//                 },
//             }
//         }
//     },
//     'chart_1': {
//         'datasets': [{
//             'tension': 0.3,
//             'fill': true,
//             'backgroundColor': bgGradient,
//             'borderColor': lineGradient,
//             'borderWidth': 3,
//             'data': [2752081, 80284404, 65741425, 67797529, 83231019],
//         }]
//     },
// }
// var chart1 = new Chart(ctx1, {
//     type: 'line',
//     data: {
//         labels: line.config.data.labels,
//         datasets: line.chart_1.datasets,
//     },
//     options: line.config.options,
// });



//--------------------------------------------------------------2
// var line = {
//     'config': {
//         'data': {
//             'labels': ['2016', '2017', '2018', '2019', '2020'],
//             'datasets': [{
//                 'tension': 0.3,
//                 'fill': true,
//                 'backgroundColor': bgGradient,
//                 'borderColor': lineGradient,
//                 'borderWidth': 3
//             }]
//         },
//         'options': {
//             'plugins': {
//                 'legend': {
//                     'display': false
//                 }
//             },
//             'responsive': false,
//             'scales': {
//                 'x': {
//                     'grid': {
//                         'display': false,
//                     }
//                 },
//                 'y': {
//                     'grid': {
//                         'display': false
//                     }
//                 },
//             }
//         }
//     },
//     'chart_1': {
//         'datasets': [{
//             'data': [2752081, 80284404, 65741425, 67797529, 83231019],
//         }]
//     },
// }


//--------------------------------------------------------------3
// function linechartConfig(data, bgGradient, lineGradient) {
//     config = {
//         type: 'line',
//         data: {
//             labels: ['2016', '2017', '2018', '2019', '2020'],
//             datasets: [
//                 {
//                     data,
//                     tension: 0.3,
//                     fill: true,
//                     backgroundColor: bgGradient,
//                     borderColor: lineGradient,
//                     borderWidth: 3,
//                 }
//             ]
//         },
//         options: {
//             plugins: {
//                 legned: {display: false}
//             },
//             responsive: false,
//             scales: {
//                 x: {
//                     grid: {display: false},
//                 },
//                 y: {
//                     grid: {display: false},
//                 }
//             }
//         }
//     }
//     return config;
// }

// var ctx1 = document.getElementById("chart1").getContext("2d");
// var bgGradient = ctx1.createLinearGradient(0, 0, 0, 400);
// bgGradient.addColorStop(0, 'rgba(255, 39, 9, 0.31)');
// bgGradient.addColorStop(0.5, 'rgba(255, 39, 9, 0.19)');
// bgGradient.addColorStop(0.67, 'rgba(255, 39, 9, 0.1)');
// bgGradient.addColorStop(1, 'rgba(255, 39, 9, 0)');

// var lineGradient = ctx1.createLinearGradient(0, 0, 0, 400);
// lineGradient.addColorStop(0, 'rgba(255, 39, 9, 1)');
// lineGradient.addColorStop(1, 'rgba(220, 37, 55, 1)');

// var data = [2752081, 80284404, 65741425, 67797529, 83231019];
// var config = linechartConfig(data, bgGradient, lineGradient);
// var chart = new Chart(ctx1, config);

// var ctx2 = document.getElementById('chart21').getContext('2d');
// var data = [14, 1150, 970, 913, 1, 465];
// var config = linechartConfig(data, bgGradient, lineGradient);
// var chart = new Chart(ctx2, config);