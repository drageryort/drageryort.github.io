var gulp = require ('gulp'),
	concatCss = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	uncss = require('gulp-uncss'),
	concat = require('gulp-concat'),
	uglyfly = require('gulp-uglyfly'),
 	imagemin = require('gulp-imagemin');







gulp.task ('css', function (){
	return gulp.src('app/css/*.css')
    .pipe(concatCss('all-stylesheet-min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
})


gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('all-scripts-min.js'))
    .pipe(uglyfly())
    .pipe(gulp.dest('dist/js/'));
});


gulp.task('image', () =>
    gulp.src('app/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
);
