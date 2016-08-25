var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	jpegRecompress = require("imagemin-jpeg-recompress"),
	pngQuant = require("imagemin-pngquant"),
	cache = require("gulp-cache");

//file paths
var IMAGES_PATH = "src/images/**/*.{png,jpeg,jpg,svg,gif}";

gulp.task("images", function(){
	return gulp.src(IMAGES_PATH)
		.pipe(cache(imagemin(
			[
				imagemin.gifsicle(),
				imagemin.jpegtran(),
				imagemin.optipng(),
				imagemin.svgo(),
				jpegRecompress(),
				pngQuant()
			]
		)))
		.pipe(gulp.dest("build/images"));
});

gulp.task("fav", function(){
	return gulp.src("src/*.png")
		.pipe(cache(imagemin(
			[
				imagemin.optipng(),
				pngQuant()
			]
		)))
		.pipe(gulp.dest("build"));
});