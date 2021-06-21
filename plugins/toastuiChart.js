export default function(elName) {
	if (typeof elName != 'string') return false;
	const el = document.getElementById(elName);
	if (el == null || el == undefined) return false;
	
	const options = {
		chart: { width: 'auto', height: 'auto' },
	};

	toastui.Chart.lineChart({ el, data, options });
	return true;
}