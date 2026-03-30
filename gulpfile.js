const { src, dest, series } = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  console.log('Gulp is running in ronel!');
  cb();
}

exports.default = series(defaultTask);