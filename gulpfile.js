var gulp = require("gulp"),
	del = require("del"),
	runSequence = require("run-sequence"),
	plumber = require("gulp-plumber"),
	requireDir = require("require-dir");

//file paths
var SCRIPTS_PATH = "src/js/**/*.js",
	CSS_PATH = "src/css/**/*.css",
	SASS_PATH = "src/css/**/*.sass",
	STYLES_PATH = "src/css/**/*.{css,sass}",
	JADE_PATH = "src/jade/**/*.jade";

// pulling in all tasks from the tasks folder
requireDir("gulp/tasks", {
	recurse: true
});

//no server
gulp.task("watch", function(){
	console.log("starting watch task")
	gulp.watch(SCRIPTS_PATH, ["js"]);
	// gulp.watch(STYLES_PATH, ["styles"]);
	gulp.watch([CSS_PATH, SASS_PATH], ["styles"]);
	gulp.watch(JADE_PATH, ["jade"]);
});

// watch and server
gulp.task("default", function(callback){
	//finish styles task before all others async
	runSequence("styles", ["jade", "js", "sync", "watch"], callback)
});

// updates all files, dev build
gulp.task("build", function(callback){
	//finish rm task before all others async
	runSequence("rm", ["jade", "js", "styles", "images", "fav"], callback)
});

//run for production version
gulp.task("build:prod", function(callback){
	//finish rm task before all others async
	runSequence("rm", ["jade:prod", "js", "styles", "images", "fav"], callback)
});

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// var webserver = require("gulp-webserver"),
	// jade = require("gulp-jade"),
	// uglify = require ("gulp-uglify"),
	// concat = require("gulp-concat"),
	// minify = require("gulp-minify-inline"),
	// clean = require("gulp-clean-css"),
	// sass = require("gulp-sass"),
	// autopre = require("gulp-autoprefixer"),
	// plumber = require("gulp-plumber"),
	// sourcemaps = require("gulp-sourcemaps"),
	// imagemin = require("gulp-imagemin"),
	// jpegRecompress = require("imagemin-jpeg-recompress"),
	// pngQuant = require("imagemin-pngquant"),
	// merge = require("merge-stream"),
	// gutil = require("gulp-util"),
	// cache = require("gulp-cache"),
	// browserSync = require("browser-sync"),
	// replace = require("gulp-replace");

	//var IMAGES_PATH = "src/images/**/*.{png,jpeg,jpg,svg,gif}";

//server with browser-sync
// gulp.task("sync", function(){
// 	browserSync.init({
// 		server: "build",
// 		port: 8080
// 	});
// });

// gulp.task("js", function() {
// 	console.log("starting js task");
// 	return gulp.src(["src/js/bootstrap.min.js", SCRIPTS_PATH])
// 		.pipe(plumber(function(err){
// 			console.log("scripts task error");
// 			console.log(err);
// 			this.emit("end");
// 		}))
// 		.pipe(sourcemaps.init())
// 			.pipe(uglify())
// 			.pipe(concat("scripts.js"))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest("build/lib/js"))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}));
// });

// gulp.task("images", function(){
// 	return gulp.src(IMAGES_PATH)
// 		.pipe(cache(imagemin(
// 			[
// 				imagemin.gifsicle(),
// 				imagemin.jpegtran(),
// 				imagemin.optipng(),
// 				imagemin.svgo(),
// 				jpegRecompress(),
// 				pngQuant()
// 			]
// 		)))
// 		.pipe(gulp.dest("build/images"));
// });

// gulp.task("fav", function(){
// 	return gulp.src("src/*.png")
// 		.pipe(cache(imagemin(
// 			[
// 				imagemin.optipng(),
// 				pngQuant()
// 			]
// 		)))
// 		.pipe(gulp.dest("build"));
// });

// gulp.task("styles", function(){
// 	var cssStream = gulp.src(["src/css/boot*.css", "src/css/jquery*.css", CSS_PATH])
// 		.pipe(plumber(function(err){
// 			console.log("styles task error");
// 			console.log(err);
// 			this.emit("end");
// 		}))
// 		//need to concat css at end or will be out of order when final concat
// 		.pipe(concat("css-files.css"));

// 	var sassStream = gulp.src(SASS_PATH)
// 		.pipe(plumber(function(err){
// 			console.log("styles task error");
// 			console.log(err);
// 			this.emit("end");
// 		}))
// 		.pipe(sass())
// 		//need to concat sass at end or will be out of order when final concat
// 		.pipe(concat("sass-files.sass"));

// 	return merge(cssStream, sassStream)
// 		.pipe(sourcemaps.init())
// 			.pipe(concat("styles.css"))
// 			.pipe(autopre("last 2 versions"))
// 			// .pipe(clean())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest("build/lib/css"))
// 		.pipe(browserSync.reload({
// 			stream: true
// 		}));
// });

// delete entire build folder and start from scratch, images are cached
// gulp.task("rm", function(){
// 	return del.sync([
// 		"build"
// 	]);
// });