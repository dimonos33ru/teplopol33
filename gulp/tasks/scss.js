// задача препоцессор SCSS, обработка файла стилей
module.exports = function () {
	$.gulp.task('scss:build', function () {
		return $.gulp.src('src/static/scss/main.scss')
			.pipe($.sass().on('error', $.notify.onError({		// обработчик ошибок
				message: "Error: <%= error.message %>",
				title: "SCSS Error!!!"
			})))
			.pipe($.rename({ suffix: '.min', prefix : '' }))
			.pipe($.autoprefixer({ 									// растановка префиксов
				browsers: ['last 15 versions'],
				cascade: false
			}))
			.pipe($.cleanCSS({ 											// сжатие и оптимизация файла CSS
				compatibility: 'ie8',
				level: 1
			}))
			.pipe($.gulp.dest('build/css'))
	});

	$.gulp.task('scss:dev', function () {
		return $.gulp.src('src/static/scss/main.scss')
			.pipe($.sourcemaps.init()) 											// инициализация sourcemaps
			.pipe($.sass().on('error', $.notify.onError({		// обработчик ошибок
				message: "Error: <%= error.message %>",
				title: "SCSS Error!!!"
			})))
			.pipe($.rename({ suffix: '.min', prefix : '' }))
			.pipe($.sourcemaps.write()) 										// создание sourcemaps
			.pipe($.gulp.dest('build/css'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
}