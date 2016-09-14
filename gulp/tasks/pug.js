var gulp = require("gulp"),
	// jade = require("gulp-jade"),
	plumber = require("gulp-plumber"),
	data = require("gulp-data"),
	swig = require("gulp-swig"),
	path = require("path"),
	fs = require("fs"),
	browserSync = require("browser-sync"),
	replace = require("gulp-replace"),
	pug = require("gulp-pug");

//file paths
var JADE_PATH = "./src/jade/**/*.jade";
var PUG_PATH = "./src/pug/**/*.pug";

gulp.task("pug", function() {
	return gulp.src(PUG_PATH)
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(pug({
			// for dev
			pretty: true}
		))
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//for production
gulp.task("pug:prod", function() {
	return gulp.src(PUG_PATH)
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(pug())
		//replace ="/ with ="http://...
		//.pipe(replace(/="\//g, '="http://michellehuang.net/'))
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({
			stream: true
		}));
});

/* OLD JADE TASK
gulp.task("jade", function() {
	console.log("starting jade task");
	return gulp.src(JADE_PATH)
		// this doesn't work https://www.npmjs.com/package/gulp-data
		// .pipe(data(function(file){
		// 	return require("src/jade/api/" + path.basename(file.path, "listings.jade") + ".json");
		// }))

		//doesn't work
		// .pipe(data(function(){
		// 	return require("./src/jade/api/listings.jade.json")
		// }))
		
		//doesn't work. fs no longer a plugin?? https://codepen.io/hoichi/post/json-to-jade-in-gulp 
		// .pipe(data(function(file) {
		// 	return JSON.parse(
		//     	fs.readFileSync('./src/jade/api/listings.jade.json')
		// 	);
		// }))
		.pipe(plumber(function(err){
			console.log("styles task error");
			console.log(err);
			this.emit("end");
		}))

		.pipe(jade({
			// for dev
			pretty: true}
		))
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
*/