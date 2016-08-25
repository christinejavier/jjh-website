var gulp = require("gulp"),
	jade = require("gulp-jade"),
	plumber = require("gulp-plumber"),
	browserSync = require("browser-sync"),
	replace = require("gulp-replace");

//file paths
var JADE_PATH = "src/jade/**/*.jade";

gulp.task("jade", function() {
	console.log("starting jade task");
	return gulp.src(JADE_PATH)
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(jade())
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//for production
gulp.task("jade:prod", function() {
	console.log("starting jade task");
	return gulp.src(JADE_PATH)
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(jade())
		//replace ="/ with ="http://...
		//.pipe(replace(/="\//g, '="http://michellehuang.net/'))
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({
			stream: true
		}));
});