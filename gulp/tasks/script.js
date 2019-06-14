let webpackConfig = {
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/,
				exclude: /node_modules/, 
				loader: 'babel-loader' }
		]
	}
}

module.exports = function () {
	$.gulp.task('js:build', function () {
		webpackConfig.mode = 'production';
		webpackConfig.devtool = 'none';
		return $.gulp.src('./src/static/js/index.js')
			.pipe($.webpack(webpackConfig))
			.pipe($.gulp.dest('build/js'));
	});

	$.gulp.task('js:dev', function () {
		webpackConfig.mode = 'development';
		webpackConfig.devtool = 'eval-source-map';
		return $.gulp.src('./src/static/js/index.js')
			.pipe($.webpack(webpackConfig))
			.pipe($.gulp.dest('build/js'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
}