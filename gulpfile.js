var gulp = require("gulp"),
watch = require('gulp-watch');


gulp.task('default', function() {
	var i = "";
	console.log("Horray, you created a Gulp task.");
	return i;
});

gulp.task('html', function() {
	console.log("Imagine some …");
});

gulp.task('watch', function() {
	watch('./index.html')
	.on('change', gulp.series('build'));
});