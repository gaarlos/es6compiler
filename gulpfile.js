const gulp = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-minify");
const concatJs = require("gulp-concat");

gulp.task("babel", () => {
  gulp
    .src("./src/*.js")
    .pipe(
      babel({
        presets: ["es2015"]
      })
    )
    .pipe(concatJs("index.js"))
    .pipe(gulp.dest("./lib"));
});

gulp.task("minify", function() {
  gulp
    .src("./lib/*.js")
    .pipe(concatJs("index.js"))
    .pipe(minify())
    .pipe(gulp.dest("lib"));
});
