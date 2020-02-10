/* eslint-disable func-names */
// import $ from "jquery";

$(document).ready(() => {
	// Функция проверяет, есть ли элемент на странице
	function isInPage(node) {
		return (node === document.body) ? false : document.body.contains(node);
	}

	/* Проверяем есть элементы карусели на странице, если есть запускаем */
	(function isInPageOwnCarousel() {
		const main = document.getElementById('slider-main');
		const projects = document.getElementById('slider-projects');
		if (isInPage(main) && isInPage(projects)) {
			/* Инициализация OwlCarousel */
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

			/* Настройки OwlCarousel */
			$('#slider-projects').owlCarousel({
				items: 1,
				autoplay: false,
			});
		}
	}());

	/* Setting FancyBox */
	$('[data-fancybox]').fancybox({
		toolbar: false,
	});

	// Плавная прокрутка
	$('a[href^="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 30,
		}, 1600);
		return false;
	});

	/* --------- Lazy Load YandexMap --------- */
	(function lazyLoadYandex() {
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

		// Создает элемент с Яндекс картой
		function showYaMaps() {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3e320335013fd0d266686d9f78e94b52d990fdcb8b12710571539f8fdd72b581&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false';
			document.getElementById('YaMaps').appendChild(script);
		}
	}());
	/* --------- end lazy load --------- */

	/* Скрипт для inputFile, показывает и сокращает имя загружаемого файла */
	(function formFileUpload() {
		const inputFile = document.getElementById('customFileUpload');
		const labelFile = document.querySelector('.calculate__label-file');

		inputFile.addEventListener('change', function (e) {
			if (this.files) {
				const fileName = this.files[0].name;
				if (fileName.length > 22) {
					const doteIndex = fileName.lastIndexOf('.');
					const fileEnd = fileName.slice(doteIndex - 5);
					const fileOut = `${fileName.substring(0, 9)}...${fileEnd}`;
					labelFile.innerHTML = fileOut;
				} else {
					labelFile.innerHTML = this.files[0].name;
				}
			}
		});
	}());

	/* Hint Fade */
	(function hintFadeInFadeOut() {
		$('.hint-triger').hover(function () {
			setTimeout(() => {
				if ($(this).is(':hover')) {
					$(this).next().stop(true).fadeIn();
				}
			}, 500);
		}, function () {
			$(this).next().delay(300).fadeOut('slow');
		});
	}());

	/* Событие Form7 отправки формы */
	document.addEventListener('wpcf7mailsent', () => {
		$.fancybox.close();

		$.fancybox.open({
			src: '#modal-success',
			type: 'inline',
			opts: {
				smallBtn: false,
				toolbar: false,
			},
		});

		setTimeout(() => $.fancybox.close(true), 3000);
	}, false);
});
