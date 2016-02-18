'use strict';

const gulp = require('gulp');
const mainBowerFiles = require('gulp-main-bower-files');
const del = require('del');

gulp.task('clean:javascripts', () => {
  return del([
    './public/javascripts'
  ]);
});

gulp.task('main-bower-files', ['clean:javascripts'], () => {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles({
      overrides: {
        d3: {
          main: ['d3.js']
        },
        'font-awesome': {
          main: []
        },
        gridster: {
          main: [
            'dist/jquery.gridster.js',
            'dist/jquery.gridster.with-extras.js'
          ]
        },
        jquery: {
          main: ['dist/jquery.js']
        },
        'jquery-knob': {
          main: ['js/jquery.knob.js']
        },
        'leanModal.js': {
          main: ['jquery.leadModal.js']
        },
        rickshaw: {
          main: [
            'rickshaw.js'
          ]
        }
      }
    }))
    .pipe(gulp.dest('./public/javascripts'));
})

gulp.task('default', () => {
  // TBD
});
