var gulp = require("gulp"),
	plumber = require("gulp-plumber"),
	data = require("gulp-data"),
	swig = require("gulp-swig"),
	jsonmin = require("gulp-jsonminify"),
	browserSync = require("browser-sync"),
	replace = require("gulp-replace");

//file paths
var API_PATH = "src/pug/api/*.json";

gulp.task("api", function() {
	return gulp.src(API_PATH)
		.pipe(plumber(function(err){
			console.log("api task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(jsonmin())
		// .pipe(swig())
		.pipe(gulp.dest("build/api"))
		.pipe(browserSync.reload({
			stream: true
		}));
});