// задача browserSync
module.exports = function () {
	$.gulp.task('server:dev', function () {
		$.browserSync.init({
			server: {
				baseDir: "./build"
			},
			notify: false,
			// open: false,
			// online: false, // Work Offline Without Internet Connection
			// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
		});
	});
}