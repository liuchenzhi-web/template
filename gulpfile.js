var gulp = require("gulp");
var stylus = require("gulp-stylus");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var imagemin = require('gulp-imagemin');
var clean = require("gulp-clean-css")
var autoprefixer = require("gulp-autoprefixer")
var server = require('gulp-ss-server');

gulp.task("default", () => {
    gulp.run("css")
    gulp.run("js")
    gulp.run("mini-images")
    gulp.watch("src/styles/stylus/**/*.styl", ["css"])
    gulp.watch("src/scripts/**/*.js", ["js"])
    server.run({
        port: 3000
    })
})

gulp.task("css", () => {
    gulp.src("src/styles/stylus/**/*.styl")
        .pipe(plumber())
        .pipe(stylus())
        // .pipe(clean())
        .pipe(autoprefixer({
            "browsers": ['last 2 versions',
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 20',
                'chrome >= 34',
                'safari >= 6',
                'opera >= 12.1',
                'ios >= 6',
                'android >= 4.4',
                'bb >= 10'
            ]
        }))
        .pipe(gulp.dest("dist/styles"))
})

gulp.task("js", () => {
    gulp.src("src/scripts/**/*.js")
        .pipe(uglify())
        .pipe(plumber())
        .pipe(gulp.dest("dist/scripts"))
})

gulp.task('mini-images', () => {
    gulp.src("src/styles/images/*.{png,jpg,gif}")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/styles/images'));
});

gulp.task("html", () => {
    gulp.src("src/pages/**/*.html")
        .pipe("dist/pages")
})