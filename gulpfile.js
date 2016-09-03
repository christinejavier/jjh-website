var gulp = require("gulp"),
	// del = require("del"),
	runSequence = require("run-sequence"),
	// plumber = require("gulp-plumber"),
	browserSync = require("browser-sync"),
	requireDir = require("require-dir");

//file paths
var SCRIPTS_PATH = "src/js/**/*.js",
	CSS_PATH = "src/css/**/*.css",
	SASS_PATH = "src/css/**/*.sass",
	STYLES_PATH = "src/css/**/*.{css,sass}",
	JADE_PATH = "src/jade/**/*.jade",
	API_PATH = "src/jade/api/*.json";

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
	gulp.watch(API_PATH, ["api"]);
});

// watch and server
gulp.task("default", function(callback){
	//finish styles task before all others async
	runSequence("styles", ["jade", "api", "js", "sync", "watch"], callback)
});

// updates all files, dev build
gulp.task("build", function(callback){
	//finish rm task before all others async
	runSequence("rm", "styles", ["jade", "api", "js", "images", "fav"], callback)
});

//run for production version
gulp.task("build:prod", function(callback){
	//finish rm task before all others async
	runSequence("rm", "styles", ["jade:prod", "api", "js", "images", "fav"], callback)
});
