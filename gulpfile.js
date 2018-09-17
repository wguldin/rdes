/* global require */

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('public/css/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['> 5%', 'ie 8'],
            cascade: false
        }))
        .pipe(gulp.dest('public/dist/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/css/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
