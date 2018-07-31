$(document).ready(function(){
	// Show Menu
	$(".btn-menu").click(function(){
		$(".menu").show().css("display", "flex");
	});

	// Hide Menu
	$(".btn-close").click(function(){
		$(".menu").hide();
	});

	// Show and Hide Navigation Fixed Bar
	var navOffset = $(".section-container").offset().top;

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();

		if (scrollPos >= navOffset) {
			$(".cabecalho").addClass("fixed");
			$(".container").css("padding-left", "0");
		} else {
			$(".cabecalho").removeClass("fixed");
			$(".container").css("padding-left", "5%");
		}
	});
});