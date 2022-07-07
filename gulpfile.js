const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');



gulp.task('scss', function(){ 
	return gulp.src('src/scss/**/*.scss') 
		.pipe(sass()) 
		.pipe(cssnano())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(gcmq())
		.pipe(gulp.dest('dist/css')) 
		.pipe(browserSync.stream())
});

gulp.task('watch', () => {
	browserSync.init({
    server: {
      baseDir: "./"
    }
  });
	gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
});