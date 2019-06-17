// import $ from "jquery";

/* Init OwlCarousel */
$(document).ready(() => {
	$('#slider-main').owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 8000,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 1000,
		animateOut: 'fadeOut',

		navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
		navContainerClass: 'slider-main__nav',
		navClass: ['slider-main__arrow-left', 'slider-main__arrow-right'],
	});

	$('#slider-projects').owlCarousel({
		items: 1,
		autoplay: false,
	});
});
