'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _serverConfig = require('../../server.config.json');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use('/', (0, _router2.default)(_serverConfig2.default));

app.listen(port, '0.0.0.0', function () {

  console.log('Server running on port ', port);
});