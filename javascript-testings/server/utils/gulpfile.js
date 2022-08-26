'use strict';
import { gulp, dest, src } from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

//Source Path
var js_src = "./src/js/*.js"
//Dist Path
var js_dist = "/js/"
var js_dist_name = "scripts.js"


gulp.task('scripts', function(){
    return gulp.src(js_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_name))
    .pipe(gulp.dest(js_dist));
});