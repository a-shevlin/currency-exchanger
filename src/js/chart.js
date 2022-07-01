import 'https://www.gstatic.com/charts/loader.js'

google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let data = google.visualization.arrayToDataTable([
    [],
    [],
  ]);
}