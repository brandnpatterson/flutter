import gulp       from 'gulp';
import del        from 'del';
import mamp       from 'gulp-mamp';
import sync       from 'browser-sync';
import prefix     from 'gulp-autoprefixer';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import webpack    from 'webpack-stream';

var options = {};
var reload = sync.reload;

// default
gulp.task('default', ['mamp','browser-sync', 'build', 'watch']);

gulp.task('build', ['scripts', 'styles']);

// clean
gulp.task('clean', del.bind(null, ['public/css/style.css', 'public/js/*.js'], {read: false}));

// server
gulp.task('browser-sync', () => {
  sync.init(['public/index.html', 'src/**/*'], {
    proxy: 'localhost:8888/form-submission',
    notify: false
  });
});

gulp.task('mamp', ['start']);

gulp.task('start', (cb) => {
    mamp(options, 'start', cb);
});

gulp.task('stop', (cb) => {
    mamp(options, 'stop', cb);
});

// build
gulp.task('scripts', () => {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js'));
});

gulp.task('styles', () => {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
});

// watch
gulp.task('watch', () => {
  gulp.watch('index.html', reload);
  gulp.watch('src/js/**/*.js', ['scripts', reload]);
  gulp.watch('src/scss/**/*.scss', ['styles', reload]);
});
