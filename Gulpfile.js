/**
 * Created by ManjeshV on 12/16/2015.
 */
var gulp = require('gulp');
var clean = require('gulp-rimraf');
var copy = require('gulp-copy')


gulp.task('clean', function () {
  return gulp.src(['!.gitignore','!.git/**/*','dist/*'])
    .pipe(clean());
});

gulp.task('build', ['clean'],function () {
  return gulp.src(['.idea/**/*','!node_modules/**/*','!dist/**/*','!swagger-ui/**/*','!swagger-editor/**/*','**/*'])
    .pipe(copy("dist"));

})

gulp.task('copy-swagger-dist', function () {
  return gulp.src(['swagger-ui/dist/**/*','swagger-editor/dist/**/*'])
    .pipe(copy('dist'));
})
