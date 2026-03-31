const gulp = require('gulp');

gulp.task('default', function(done) {
  // Basic default task
  console.log('Gulp is running.');
  done();
});

// Dummy build task for Vercel
gulp.task('build', function(done) {
  console.log('Build task executed.');
  done();
});
