var xValues = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

new Chart('myChart', {
	type: 'line',
	data: {
		labels: xValues,
		datasets: [
			{
				data: [24, 49, 17, 56, 10, 97, 32],
				borderColor: 'red',
				fill: false,
			},
			{
				data: [0, 76, 0, 43, 25, 80, 42],
				borderColor: 'orange',
				fill: false,
			},
		],
	},
	options: {
		legend: { display: false },
	},
});

var xValues2 = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];
var yValues2 = [78, 59, 32, 39, 20, 80, 52,0];
var yValues3 = [98, 57, 28, 46, 28, 63, 78,0];
var width = ['2px', '2px', '2px', '2px', '2px', '2px', '2px'];
var barColors2 = ['red', 'red', 'red', 'red', 'red', 'red', 'red'];
var barColors3 = [
	'orange',
	'orange',
	'orange',
	'orange',
	'orange',
	'orange',
	'orange',
];

new Chart('myChart2', {
	type: 'bar',
	data: {
		labels: xValues2,
		datasets: [
			{
				backgroundColor: barColors2,
				data: yValues2,
			},
			{
				backgroundColor: barColors3,
				data: yValues3,
			},
		],
	},

	options: {
		legend: { display: false },
		title: {
			display: true,
			text: '',
		},
	},
});