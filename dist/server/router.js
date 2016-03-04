'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _constant = require('../common/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  var router = _express2.default.Router();

  (0, _mkdirp2.default)(config.log_dir, function (err) {
    if (err) throw err;
  });

  router.all('/_*.gif', function (req, res) {
    // transparent gif 1x1
    var data = new Buffer('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
    var query = req.query;
    var label = req.params[0];

    console.log(_path2.default.resolve(config.log_dir, './' + label + '.log'));

    var log = (0, _log2.default)({
      filePath: _path2.default.resolve(config.log_dir, './' + label + '.log'),
      fileSize: config.log_size_in_mb * 1024 * 1024
    });

    log({
      level: query[_constant.PARAM_LEVEL],
      message: query[_constant.PARAM_MESSAGE],
      scriptType: query[_constant.PARAM_SCRIPT_TIME]
    });

    res.type('gif');
    res.send(data);
  });

  return router;
};

module.exports = exports['default'];