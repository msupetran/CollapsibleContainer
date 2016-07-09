// Fields
var gulp = require('gulp');
var gulpInject = require('gulp-inject');
var browserSync = require('browser-sync').create();
var paths = {
    index: './src/index,html',
    scripts: './src/**/*.js',
    styles: './src/**.*.css'
};

// Tasks
gulp.task('inject', inject);
gulp.task('serve', ['inject'], launch);
gulp.task('watch', ['inject'], reload);

// Methods
function inject() {
    var target = gulp.src(paths.index);
    var sources = gulp.src([
        paths.scripts,
        paths.styles
    ],
        { read: false }
    );
    var options = {
        ignorePath: 'src',
        addRootSlash: false
    };

    return target
        .pipe(gulpInject(sources, options))
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