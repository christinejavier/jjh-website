var gulp = require("gulp"),
	del = require("del");

// delete entire build folder and start from scratch, images are cached
gulp.task("rm", function(){
	return del.sync([
		"build"
	]);
});