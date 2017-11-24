var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
//
gulp.task('default', function(){
  return gulp.src('webpack.config.js')
            .pipe(uglify())
            .pipe(gulp.dest('build'));
});

// gulp.task('default', function(){
//   console.log('hello');
// });
