
'use strict'

const gulp = require('gulp')
const server = require('gulp-server-livereload')

const config = {
  host: 'localhost',
  port: 4200
}

gulp.task('live-reload', () => {
  gulp.src('').pipe(server({
    host: config.host,
    port: config.port,
    livereload: true,
    defaultFile: 'index.html',
    directoryListing: false,
    open: true
  }))
})

gulp.task('default', ['live-reload'])