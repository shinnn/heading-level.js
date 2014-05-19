'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var mergeStream = require('merge-stream');

var stylish = require('jshint-stylish');
var toCamelCase = require('to-camel-case');

var pkg = require('./package.json');
var bower = require('./bower.json');

var funName = toCamelCase(pkg.name);

var banner = [
  '/*!',
  ' * <%= pkg.name %>.js | MIT (c) Shinnosuke Watanabe',
  ' * <%= pkg.homepage %>',
  '*/\n'
].join('\n');

var nodeExports = '\nmodule.exports = <%= funName %>;\n';

gulp.task('lint', function() {
  gulp.src(['{,src/}*.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
  gulp.src('*.json')
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('clean', function() {
  gulp.src(['{tmp,dist}/*'], {read: false})
    .pipe($.rimraf());
});

gulp.task('transpile', ['clean'], function() {
  return mergeStream(
    gulp.src(['src/*.js'])
      .pipe($.es6Transpiler())
      .pipe($.wrapUmd({
        exports: funName,
        namespace: funName
      }))
      .pipe($.header(banner, {pkg: pkg}))
      .pipe($.rename(bower.main))
      .pipe(gulp.dest('')),
    gulp.src(['src/*.js'])
      .pipe($.es6Transpiler())
      .pipe($.footer(nodeExports, {funName: funName}))
      .pipe($.header(banner, {pkg: pkg}))
      .pipe($.rename(pkg.main))
      .pipe(gulp.dest('')),
    gulp.src(['test.js'])
      .pipe($.es6Transpiler({
        globals: {
          describe: false,
          it: false
        }
      }))
      .pipe(gulp.dest('tmp'))
  );
});

gulp.task('test', ['transpile'], function() {
  gulp.src(['tmp/test.js'])
    .pipe($.mocha({reporter: 'spec'}));
});

gulp.task('watch', function() {
  gulp.watch(['src/*.js'], ['test']);
  gulp.watch(['{,src/}*.js', '*.json'], ['lint']);
});

gulp.task('build', ['lint', 'test']);

gulp.task('default', ['build', 'watch']);
