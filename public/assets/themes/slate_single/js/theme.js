$(function(){
	var savedTop = 0;
	var savedLeft = 0;

	$('[data-toggle=offcanvas]').click(function() {
		var target = $(this).data('target');
		var menu = $(target).clone(true);
		if ($('#sidebar').children().length == 0) {
			$('#sidebar').append(menu).find(target).removeClass('collapse');
		}
		$('.row-offcanvas').toggleClass('active');
		if ($('.row-offcanvas').hasClass('active')) {
			savedTop = $(window).scrollTop();
			savedLeft = $(window).scrollLeft();
			window.scrollTo(0, 0);
		} else {
			window.scrollTo(savedLeft, savedTop);
		}
	});
});
