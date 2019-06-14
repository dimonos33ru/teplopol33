// import $ from "jquery";

/* Init OwlCarousel */
$(document).ready(() => {
	$('#slider-main').owlCarousel({
		items: 1,
		autoplay: true,
		dots: false,
		loop: true,
		smartSpeed: 1000,
	});
});
