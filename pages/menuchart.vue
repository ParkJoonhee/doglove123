<template>
    <div>
        <section class="hero is-success">
            <div class="hero-body">
                <p class="title">
                    간단한 생활요리<i class="fas fa-drumstick-bite"></i>
                </p>
                <p class="subtitle">
                    <i class="fas fa-house-user"></i>집에서 간단히 해 먹을 수 있는 생활 요리 레시피<i class="fas fa-scroll"></i>
                </p>
            </div>
        </section>
        <hr/>
        <section class="columns">
			<div class="column">
				<div id="lineChart" style="width:100%, height 300px"></div>
			</div>
			<div class="column"></div>
		</section>
	</div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
    let showChart = false;
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
	export default {
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('bar', 'lineChart')) return;
				showChart = true;
			}
		},
        destroyed() {
            showChart = false;
        }
	};
</script>