// import $ from "jquery";

/* Init OwlCarousel */
$(document).ready(() => {
	$('#slider-main').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		smartSpeed: 1000,
	});
});

/* Выводит имя категории при наведении мыши */
(function categorySelect() {
	const category = document.querySelector('.categories__menu');
	const categoryTitle = document.querySelector('.categories__title');
	category.addEventListener('mouseover', (e) => {
		if (e.target.classList.contains('categories__img')) {
			categoryTitle.textContent = e.target.alt;
		}
	});

	category.addEventListener('mouseleave', () => {
		categoryTitle.textContent = 'Наши услуги';
	});
}());
