var gulp = require("gulp"),
	uglify = require ("gulp-uglify"),
	concat = require("gulp-concat"),
	plumber = require("gulp-plumber"),
	sourcemaps = require("gulp-sourcemaps"),
	browserSync = require("browser-sync");

//file paths
var SCRIPTS_PATH = "src/js/**/*.js";

gulp.task("js", function() {
	console.log("starting js task");
	return gulp.src(["src/js/bootstrap.min.js", SCRIPTS_PATH])
		.pipe(plumber(function(err){
			console.log("scripts task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concat("scripts.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("build/lib/js"))
		.pipe(browserSync.reload({
			stream: true
		}));
});