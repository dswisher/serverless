
var gulp = require('gulp');
var del = require('del');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var filesToKeys = require('gulp-file-contents-to-keys');

var vendorFiles = [
    './node_modules/vue/dist/vue.js',
    './node_modules/vue-router/dist/vue-router.js',
    './node_modules/amazon-cognito-identity-js/dist/aws-cognito-sdk.js',
    './node_modules/amazon-cognito-identity-js/dist/amazon-cognito-identity.js',
    './node_modules/axios/dist/axios.js'
];

var paths = {
    'copy:html': ['./index.html'],
    'package:templates': ['./templates/*.html'],
    'compile:js': ['./scripts/*.js', './tmp/templates.js', './components/*.js', './router/router.js']
}


gulp.task('copy:html', function() {
    return gulp
        .src(paths['copy:html'])
        // TODO - htmlhint? htmlmin?
        .pipe(gulp.dest('./dist'));
});


gulp.task('copy:css', function() {
    return gulp
        .src('./node_modules/bulma/css/bulma.css')
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('package:templates', function() {
    return gulp
        .src(paths['package:templates'])
        .pipe(filesToKeys({
            fileName: 'templates.js'
        }))
        .pipe(gulp.dest('./tmp'));
});


gulp.task('compile:js', ['package:templates'], function() {
    return gulp
        .src(paths['compile:js'])
        .pipe(sourcemaps.init())
        .pipe(jshint({
            'esversion': 6
        }))
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('copy:js', ['compile:js'], function() {
    return gulp
        .src(vendorFiles)
        // TODO - better place to put vendor JS files?
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('copy:icon', function() {
    return gulp
        .src('./static/favicon.ico')
        .pipe(gulp.dest('./dist'));
});


gulp.task('clean', function() {
  return del(['dist', 'tmp']);
});


gulp.task('dist', ['copy:html', 'copy:css', 'copy:js', 'copy:icon'], function() {
});


gulp.task('watch', ['dist'], function() {
    for (key in paths) {
        console.log('Watching: ' + key + ' files...');
        gulp.watch(paths[key], [key])
            .on('change', function(event) {
                console.log(`Watch: ${event.path} was ${event.type}.`);
            });
    }
});


gulp.task('serve', ['watch'], function() {
  gulp.src('dist')
    .pipe(webserver({
      directoryListing: false,
      open: false,
      livereload: true,
      host: 'local.dswisher.xyz',
      https: true,
      fallback: 'index.html'
    }));
});

