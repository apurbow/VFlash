$(document).ready(function () {
	$('.nav-item').click(function () {
		$('.nav-item').removeClass('nav-item-active');
		$(this).addClass('nav-item-active');
	});

});