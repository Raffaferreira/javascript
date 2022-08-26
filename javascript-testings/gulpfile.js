import { gulp, dest, src, watch } from 'gulp';
// import sass from 'gulp-sass';
// import cssnano from 'gulp-cssnano';
// import sourcemaps from 'gulp-sourcemaps';
// import autoprefixer from 'gulp-autoprefixer';
// import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

//Source Path
var js_src = "./public/javascript/*.js"
//Dist Path
var js_dist = "./public/build/"
var js_dist_name = "main.js"


gulp.task('scripts', function() {
    return src(js_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_name))
    .pipe(dest(js_dist));
});


gulp.task('watch', function(){
    return watch([js_src], ['scripts']);
});