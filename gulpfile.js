var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  gulp.src('index.html')    
    .pipe(livereload());
    
});

gulp.task('style', function () {
    gulp.src('src/*.scss')
        .pipe(sass())
         .pipe(concat('main.css')) 
        .pipe(gulp.dest('build/'))
        .pipe(notify({ message: 'Styles task complete' }))
        .pipe(livereload());
});

gulp.task('css', function () {
    gulp.src('src/main.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('main.css')) 
        .pipe(gulp.dest('build/'))
        .pipe(livereload());
});

gulp.task('js', function() {
gulp.src('build/main.js')
.pipe(livereload());

});

gulp.task('img', function() {
gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/images'))
.pipe(notify({ message: 'Styles task complete' }))
.pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('index.html', ['html']);
  gulp.watch('src/*.scss', ['style']);
  gulp.watch('src/*.scss', ['css']);
  gulp.watch('build/*.js', ['js']);
  gulp.watch('src/images/*', ['img']);
   
});

gulp.task('default', ['html', 'style', 'css', 'js', 'img', 'watch']);