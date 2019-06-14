module.exports = function () {
	$.gulp.task('img:dev', function () {
		return $.gulp.src('src/static/img/**/*')
			.pipe($.gulp.dest('build/img'));
	});

	$.gulp.task('img:build', function () {
		return $.gulp.src('src/static/img/**/*.{jpg,png,svg}')
		.pipe($.imagemin([
			$.imagemin.gifsicle({interlaced: true}),
			// $.imagemin.jpegtran({progressive: true}),
			$.imgJpegRec({
				loops: 5,
				min: 70,
				max: 75,
				quality: 'medium'
		}),
			$.imagemin.svgo(),
			$.imagemin.optipng({optimizationLevel: 3}),
			// $.pngquant({quality: '65-70', speed: 5})
		], {
			verbose: true
		}))
		.pipe($.gulp.dest('build/img'));
	});
}