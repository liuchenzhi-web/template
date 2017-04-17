var gulp = require("gulp");
var stylus = require("gulp-stylus");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var imagemin = require('gulp-imagemin');
var clean = require("gulp-clean-css")
var autoprefixer = require("gulp-autoprefixer")

gulp.task("default", () => {
    gulp.run("css")
    gulp.run("js")
    gulp.run("mini-images")
})

gulp.task("css", () => {
    gulp.src("src/styles/stylus/*.styl")
        .pipe(plumber())
        .pipe(stylus())
        // .pipe(clean())
        .pipe(autoprefixer({
            "browsers": ["last 2 version", "> 5%", "> 5% in US", "ie 8", "ie 7", "last 2 Chrome versions", "firefox >20"]
        }))
        .pipe(gulp.dest("dist/styles"))
})

gulp.task("js", () => {
    gulp.src("src/scripts/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"))
})

gulp.task('mini-images', () => {
    gulp.src("src/styles/images/*.{png,jpg,gif}")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/styles/images'));
});

gulp.task("html", () => {
    gulp.src("src/pages/*.html")
        .pipe("dist/pages")
})


gulp.watch("src/styles/stylus/*.styl", ["css"])