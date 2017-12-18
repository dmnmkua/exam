const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const del = require('del');
const plumber = require('gulp-plumber');

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  })
});

gulp.task('css', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/index.html', browserSync.reload)
  gulp.watch('src/js/**/*.js', browserSync.reload);
})

gulp.task('default', ['watch']);

gulp.task('buildCss', ['css'], () => {
  return gulp.src('src/main.css')
    .pipe(plumber())
})

gulp.task('build', ['css'], () => {
  const bCss = gulp.src('main.min.css')
    .pipe(plumber())
    .pipe(gulp.dest('dist/css'))

  const bFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

  const bImg = gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'))

  const bJs = gulp.src('src/js/**/*')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'))

  const bHtml = gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
})
