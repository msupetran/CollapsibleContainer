
// Fields
var gulp = require('gulp');
var config = require('./gulpfile.config');
var bs = require('browser-sync').create();
var wd = require('wiredep');
var $ = require('gulp-load-plugins')({lazy: true});

// Tasks
gulp.task('inject', inject);
gulp.task('serve', ['inject'], serve);
gulp.task('watch', ['inject'], reload);

// Methods
function inject() {
    var target = gulp.src(config.paths.index);
    return target
        .pipe(getFilesToInject())
        .pipe(getBowerFilesToInject())
        .pipe(gulp.dest(config.destination));
}
function getFilesToInject() {
    var sources = gulp
        .src([
            config.paths.scripts,
            config.paths.styles
        ])
        .pipe($.if(config.jsOrder, $.order(config.jsOrder)));
    var options = {
        relative: true
    };
    return $.inject(sources, options);
}
function getBowerFilesToInject() {
    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    return wd.stream(options);
}
function serve() {
    bs.init({
        server: {
            baseDir: './src',
            routes: {
                "/bower_components": "./bower_components"
            }
        }
    });

    gulp.watch(config. destination + '/**', ['watch']);
}
function reload() {
    bs.reload();
}