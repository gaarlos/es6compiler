var gulp  = require('gulp');
var babel = require('gulp-babel');
concatJs = require('gulp-concat'),

gulp.task('default',()=>{
  gulp.watch('./src/*',['babel'])
})


gulp.task('babel', ()=>{
  gulp.src('./src/*.js')
    .pipe(babel({
      "presets": ["es2015"]
    }))
    .pipe(gulp.dest('./lib'))

})
gulp.task('js', function()
{
  gulp.src('./lib/*.js')
  	.pipe(concatJs('index.js'))
    .pipe(gulp.dest('lib'))
});
