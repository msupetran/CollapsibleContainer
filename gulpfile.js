// Fields
var gulp = require('gulp');
var gulpInject = require('gulp-inject');
var browserSync = require('browser-sync').create();

// Tasks
gulp.task('inject', inject);
gulp.task('serve', ['inject'], launch);
gulp.task('watch', ['inject'], reload);

// Methods
function inject() {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src([
        './src/**/*.js',
        './src/**/*.css'
    ],
        { read: false }
    );

    return target
        .pipe(gulpInject(sources))
        .pipe(gulp.dest('./src'));
}
function launch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch('./src/**', ['watch']);
}
function reload() {
    browserSync.reload();
}