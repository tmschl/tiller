'use strict';

// declare tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

// define paths
var paths = {
  sass: {
    in: 'app/sass/main.scss',
    out: 'app/css/main.scss',
    watch: 'app/sass/**/*.scss',
    options: {},
  },
};

// create server for angular
gulp.task('connect', function(){
  connect.server({
    root: 'app',
    livereload: true
  });
});

// compile sass
gulp.task('sass', function(){
  return gulp.src(paths.sass.in)
    .pipe(sass(paths.sass.options))
    .pipe(gulp.dest(paths.sass.out))
    .pipe(connect.reload());
});

// watch for changes
gulp.task('watch', function(){
  gulp.watch(paths.sass.watch, ['sass']);
});

// default taslk
gulp.task('default', ['connect', 'watch']);
