module.exports = function () {
	$.gulp.task('libs', function () {
		return $.gulp.src('src/static/libs/owlcarousel/js/owl.carousel.min.js')
			.pipe($.gulp.dest('build/js'));
	});
}