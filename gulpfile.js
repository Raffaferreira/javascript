// import { gulp, dest, src, watch } from 'gulp';
// import sourcemaps from 'gulp-sourcemaps';
// import autoprefixer from 'gulp-autoprefixer';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');

//Source Path
var js_source = "./public/js/*.js"
//Dist Path
var js_dist_name = "./public/build/js/"
var js_dist_file_name = "main.js"

var css_source = "./public/styles/*.css"
//Dist Path
var css_dist_name = "./public/build/css/"
var css_dist_file_name = "main.css"

gulp.task('scripts-minified', function() {
    return gulp.src(js_source)
    .pipe(babel())
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_file_name))
    .pipe(rename({  extname:".min.js" }))
    .pipe(gulp.dest(js_dist_name));
});

gulp.task('scripts-unminified', function() {
    return gulp.src(js_source)
    .pipe(babel())
    .pipe(plumber())
    .pipe(concat(js_dist_file_name))
    .pipe(gulp.dest(js_dist_name));
});

gulp.task('css-minified', function() {
    return gulp.src(css_source)
    .pipe(cssnano())
    .pipe(concat(css_dist_file_name))
    .pipe(rename({  extname:".min.css" }))
    .pipe(gulp.dest(css_dist_name));
});

gulp.task('css-unminified', function() {
    return gulp.src(css_source)
    .pipe(cssnano())
    .pipe(concat(css_dist_file_name))
    .pipe(rename({ extname:".css" }))
    .pipe(gulp.dest(css_dist_name));
});


gulp.task('watch', function(){
    gulp.watch([js_source], { events: 'all'}, gulp.series(['scripts']));
    gulp.watch([css_source], { events: 'all'}, gulp.series(['css-styling']));
});