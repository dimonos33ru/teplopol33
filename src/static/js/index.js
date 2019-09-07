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
		mouseDrag: false,
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
		smallBtn: true,
	});

	// Плавная прокрутка
	$('a[href^="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top,
		}, 1600);
		return false;
	});

	/* --------- Lazy Load YandexMap --------- */
	let yaMapsShow = false;
	const divYaMaps = document.getElementById('YaMaps');

	if (isInPage(divYaMaps)) {		
		$('a[href="#contacts"]').click(() => {
			if (!yaMapsShow) {
				showYaMaps();
				yaMapsShow = true;
			}
		});

		$(window).scroll(() => {
			if (!yaMapsShow) {
				if ($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
					showYaMaps();
					yaMapsShow = true;
				}
			}
		});
	}

	// Функция проверяет, есть ли элемент на странице
	function isInPage(node) {
		return (node === document.body) ? false : document.body.contains(node);
	}
	// Создает элемент с Яндекс картой
	function showYaMaps() {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3e320335013fd0d266686d9f78e94b52d990fdcb8b12710571539f8fdd72b581&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false';
		document.getElementById('YaMaps').appendChild(script);
	}
	/* --------- end lazy load --------- */
});
