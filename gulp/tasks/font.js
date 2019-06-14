module.exports = function () {
	$.gulp.task('font', function () {
		return $.gulp.src('src/static/fonts/**/*')
			.pipe($.gulp.dest('build/fonts'));
	});
}