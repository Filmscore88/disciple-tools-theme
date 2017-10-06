/* this is for dedicated scripting for metrics */

function show_fake_chart( text ) { // TODO: Remove this placeholder function
  "use strict";
  jQuery('#chart').html(`<img src="http://via.placeholder.com/1000x600?text=` + text + `" width="1000px" height="600px"/>`)
}
show_fake_chart( 'Critical+Path' )


function show_critical_path() {
  "use strict";
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawMultSeries);
}


function drawMultSeries() {
  var data = google.visualization.arrayToDataTable([
    ['Step', 'Visitors'],
    ['Prayer Network', 400000],
    ['Social Engagement', 300000,],
    ['Website Visitors', 100000],
  ]);

  var options = {
    title: 'Critical Path',
    chartArea: {width: '60%'}
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart'));
  chart.draw(data, options);
}
