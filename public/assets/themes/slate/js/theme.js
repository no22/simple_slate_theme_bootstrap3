$(function(){
	var savedTop = 0;
	var savedLeft = 0;
	$('[data-toggle=offcanvas]').click(function() {
		var target = $(this).data('target');
		var offcanvas = $(this).data('offcanvas');
		if (target === '.navbar-collapse') {
			if ($('#sidenavbar').children().length == 0) {
				var menu = $(target).clone(true);
				$('#sidenavbar').append(menu).find(target).removeClass('collapse');
			}
		}
		if ($('.row-offcanvas').hasClass('active')) {
			$('.row-offcanvas').removeClass('active');
			$('.row-offcanvas').removeClass('leftside');
			$('.row-offcanvas').removeClass('rightside');
		} else {
			$('.row-offcanvas').addClass('active');
			$('.row-offcanvas').addClass(offcanvas);
		}
		if ($('.row-offcanvas').hasClass('active')) {
			savedTop = $(window).scrollTop();
			savedLeft = $(window).scrollLeft();
			window.scrollTo(0, 0);
		} else {
			window.scrollTo(savedLeft, savedTop);
		}
	});
});
