$(document).foundation();

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		sectionsColor: ['#4A6FB1', '#939FAA', '#323539'],
		scrollOverflow: true
	});
});