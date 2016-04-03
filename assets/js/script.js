$(function(){

	// Instantiate MixItUp:

	$('#projects').mixItUp();

	$('.nav a').on('click', function(e) {
		e.preventDefault();
		$('.nav a').removeClass('active');
		$(this).addClass('active');
	});

});
