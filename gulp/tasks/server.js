var gulp = require("gulp"),
	webserver = require("gulp-webserver"),
	browserSync = require("browser-sync");

//server with browser-sync
gulp.task("sync", function(){
	browserSync.init({
		server: "build",
		port: 8080
	});
});

//alternative server with livereload
gulp.task("server", function(){
	console.log("starting server task")
	gulp.src("build")
		.pipe(webserver({
			livereload: true,
			fallback: "index.html",
			port: 8080,
			open: true
		}));
});