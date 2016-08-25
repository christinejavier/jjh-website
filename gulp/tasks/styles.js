var gulp = require("gulp"),
	concat = require("gulp-concat"),
	minify = require("gulp-minify-inline"),
	clean = require("gulp-clean-css"),
	sass = require("gulp-sass"),
	autopre = require("gulp-autoprefixer"),
	plumber = require("gulp-plumber"),
	sourcemaps = require("gulp-sourcemaps"),
	merge = require("merge-stream"),
	browserSync = require("browser-sync");

//file paths
var CSS_PATH = "src/css/**/*.css",
	SASS_PATH = "src/css/**/*.sass",
	STYLES_PATH = "src/css/**/*.{css,sass}";

gulp.task("styles", function(){
	var cssStream = gulp.src(["src/css/boot*.css", "src/css/jquery*.css", CSS_PATH])
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))
		//need to concat css at end or will be out of order when final concat
		.pipe(concat("css-files.css"));

	var sassStream = gulp.src(SASS_PATH)
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(sass())
		//need to concat sass at end or will be out of order when final concat
		.pipe(concat("sass-files.sass"));

	return merge(cssStream, sassStream)
		.pipe(sourcemaps.init())
			.pipe(concat("styles.css"))
			.pipe(autopre("last 2 versions"))
			// .pipe(clean())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("build/lib/css"))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// gulp.task("sass", function(){
// 	console.log("starting sass task");
// 	return gulp.src(SASS_PATH)
// 		.pipe(plumber(function(err){
// 			console.log("styles task error");
// 			console.log(err);
// 			this.emit("end");
// 		}))
// 		.pipe(sourcemaps.init())
// 			.pipe(sass())
// 			.pipe(autopre())
// 			.pipe(minify())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest("build/lib/css"));
// });