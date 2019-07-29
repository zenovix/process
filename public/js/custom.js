google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);
google.charts.setOnLoadCallback(drawChart7);
google.charts.setOnLoadCallback(drawChart8);
google.charts.setOnLoadCallback(drawChart9);
google.charts.setOnLoadCallback(drawChart10);
google.charts.setOnLoadCallback(drawChart11);
google.charts.setOnLoadCallback(drawChart12);

function drawChart1() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 1],
    ['Stop', 0]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

  chart.draw(data, options);
}

function drawChart2() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 1]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

  chart.draw(data, options);
}

function drawChart3() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 1]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

  chart.draw(data, options);
}

function drawChart4() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 1]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

  chart.draw(data, options);
}

function drawChart5() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 1]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

  chart.draw(data, options);
}

function drawChart6() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 1]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart6'));

  chart.draw(data, options);
}

function drawChart7() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 1]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

  chart.draw(data, options);
}

function drawChart8() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 1],
    ['Stop', 0]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart8'));

  chart.draw(data, options);
}

function drawChart9() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 1],
    ['Stop', 0]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart9'));

  chart.draw(data, options);
}

function drawChart10() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 1],
    ['Stop', 0]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart10'));

  chart.draw(data, options);
}

function drawChart11() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 0],
    ['Buffer',7]
  ]);

  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'black',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart11'));

  chart.draw(data, options);
}

function drawChart12() {

  var data = google.visualization.arrayToDataTable([
    ['CNC Machine', 'Hours per Day'],
    ['Run', 0],
    ['Stop', 0],
    ['Run2', 2],
    ['Run3', 8],

  ]);
  var options = {
    title: 'CNC 119',
    backgroundColor: { fill: 'transparent' },
    titlePosition: 'none',
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: 'none',
    pieHole: 0.5,
    colors: ['#dc3912', '#dc9e12', '#4caf50', '#3366cc', '#f6c7b6'],
    pieSliceTextStyle: {
      color: 'white',
    },
    fontSize: 12,
    tooltip: {
      trigger: 'none'
    }
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart12'));

  chart.draw(data, options);
}


// to show date and time 


// live time update
function startTime() {
  var m_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var today = new Date();
  var date = today.getDate();
  var month = m_name[today.getMonth()];
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var year = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').value =
    date + "-" + month + "-" + year + " " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
startTime();