$(document).ready(function() {
	$("#header").ready(function() {
		$.get('header.html', function(data) {
			$("#header").html(data);
		}, 'text');
	});
});