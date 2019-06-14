'use strict';

// подключение модулей
global.$ = {
		gulp: 				require('gulp'),
		pug: 					require('gulp-pug'),
		sass: 				require('gulp-sass'),
		autoprefixer: require('gulp-autoprefixer'),
		cleanCSS: 		require('gulp-clean-css'),
		sourcemaps: 	require('gulp-sourcemaps'),
		notify: 			require('gulp-notify'),
		cleanBuild : 	require('del'),
		browserSync: 	require('browser-sync').create(),
		rename:       require('gulp-rename'),
		concat: 			require('gulp-concat'),
		imagemin: 		require('gulp-imagemin'),
		cache: 			 	require('gulp-cache'),
		imgJpegRec: 	require('imagemin-jpeg-recompress'),
		pngquant: 		require('imagemin-pngquant'),
		svgSprite: 		require('gulp-svg-sprite'),
		svgmin: 			require('gulp-svgmin'),
    cheerio: 			require('gulp-cheerio'),
    replace: 			require('gulp-replace'),
    webpack: 			require('webpack-stream'),

		// путь к таскам
		path: {
			tasks: 			require('./gulp/config/tasks.js')
		}
};

// запуск тасков в цикле
$.path.tasks.forEach(function (taskPath) {
		require(taskPath)();
});


// задача во время разработки
$.gulp.task('default', $.gulp.series(
	'cleanBuild',
	$.gulp.parallel('pug:dev','scss:dev','js:dev','font','libs','img:dev','svg'),
	$.gulp.parallel('watch', 'server:dev')
));

// задача для финальной версии
$.gulp.task('build', $.gulp.series(
	'cleanBuild',
	$.gulp.parallel('pug:build', 'scss:build','js:build','font','libs','img:build','svg')
));