module.exports = function () {
	$.gulp.task('pug:build', function () {
		return $.gulp.src('src/pug/*.pug')
			.pipe($.pug({
				pretty: true
			}))
			.on("error", $.notify.onError({ // обработчик ошибок
				message: "Error: <%= error.message %>",
				title: "Error PUG"
			}))
			.pipe($.gulp.dest('build'))
	});

	$.gulp.task('pug:dev', function () {
		return $.gulp.src('src/pug/*.pug')
			.pipe($.pug({
				pretty: true
			}))
			.on("error", $.notify.onError({ // обработчик ошибок
				message: "Error: <%= error.message %>",
				title: "Error PUG"
			}))
			.pipe($.gulp.dest('build'))
			.on('end', $.browserSync.reload);
	});
}