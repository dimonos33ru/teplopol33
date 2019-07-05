// import $ from "jquery";

$(document).ready(() => {
	/* Init OwlCarousel */
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

	/* Setting OwlCarousel */
	$('#slider-projects').owlCarousel({
		items: 1,
		autoplay: false,
	});

	/* Setting FancyBox */
	$('[data-fancybox]').fancybox({
		toolbar: false,
		smallBtn: false,
	});

	// Плавная прокрутка
	$('a[href^="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top,
		}, 1000);
		return false;
	});
});
