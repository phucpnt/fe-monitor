require('babel-register')({
  'presets': ['es2015'],
  'plugins': ['add-module-exports', 'transform-decorators-legacy']
});

require('./index');
