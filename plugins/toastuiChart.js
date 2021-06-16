export default function() {
	const el = document.getElementById('chart');
	const data = {
		categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // y-axis
		series: [
			// x-axis
			{
				name: 'Budget',
				data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
			},
			{
				name: 'Income',
				data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
			},
			{
				name: 'My test',
				data: [1000, 2000, 5000, 5000, 2000, 9000, 8000],
			},
		],
	};
	const options = {
		chart: { width: 700, height: 400 },
	};

	toastui.Chart.barChart({ el, data, options });
}