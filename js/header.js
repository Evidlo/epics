$.get('header.html', function(data) {
	$("#header").html(data);
}, 'text');
$.get('footer.html', function(data) {
	$("#footer").html(data);
}, 'text');