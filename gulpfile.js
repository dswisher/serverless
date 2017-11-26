
var gulp = require('gulp');
var del = require('del');
var webserver = require('gulp-webserver');


gulp.task('html', function() {
    return gulp
        .src('./html/*.html')
        // TODO - htmlhint? htmlmin?
        .pipe(gulp.dest('./dist'));
});


gulp.task('vendorjs', function() {
    return gulp
        // TODO - pick up more JS files
        .src('./node_modules/vue/dist/vue.js')
        // TODO - better place to put vendor JS files?
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('clean', function() {
  return del(['dist']);
});


// TODO - add watch target, and have serve depend on it

gulp.task('serve', ['html'], function() {
  gulp.src('dist')
    .pipe(webserver({
      directoryListing: false,
      open: false,
      livereload: true
    }));
});

