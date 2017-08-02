import gulp       from 'gulp';
import del        from 'del';
import mamp       from 'gulp-mamp';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';
import webpack    from 'webpack-stream';

var options = {};
var reload = sync.reload;

gulp.task('browser-sync', () => {
  sync.init(['public/index.php', 'assets/**/*', 'views/**/*'], {
    proxy: 'localhost:8888/flutter/public',
    notify: false
  });
});

gulp.task('build', ['scripts', 'styles']);

gulp.task('clean', del.bind(null, ['public/css/style.css', 'public/js/*'], {read: false}));

gulp.task('default', ['mamp','browser-sync', 'build', 'watch']);

gulp.task('mamp', ['start']);

gulp.task('scripts', function() {
  return gulp.src(['assets/js/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js'));
});

gulp.task('start', (cb) => {
    mamp(options, 'start', cb);
});

gulp.task('stop', (cb) => {
    mamp(options, 'stop', cb);
});

gulp.task('styles', () => {
  return gulp.src('assets/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', () => {
  gulp.watch('assets/js/**/*', ['scripts', reload]);
  gulp.watch('assets/sass/**/*', ['styles', reload]);
});
