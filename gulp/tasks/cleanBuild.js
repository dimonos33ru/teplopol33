module.exports = function () {
	$.gulp.task('cleanBuild', function () {
		return $.cleanBuild(['build/*']);
	});
}