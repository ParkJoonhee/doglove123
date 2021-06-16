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
				<div id="lineChart"></div>
			</div>
			<div class="column"></div>
		</section>
	</div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
    let showChart = false;
	export default {
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('lineChart')) return;
				showChart = true;
			}
		},
        destroyed() {
            showChart = false;
        }
	};
</script>