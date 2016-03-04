'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constant = require('../../common/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_FILE_SIZE = 5 * 1024 * 1024;

function makeLogger(_ref) {
  var filePath = _ref.filePath;
  var _ref$fileSize = _ref.fileSize;
  var fileSize = _ref$fileSize === undefined ? LOG_FILE_SIZE : _ref$fileSize;

  return new _winston2.default.Logger({
    transports: [new _winston2.default.transports.Console(), new _winston2.default.transports.File({
      filename: filePath,
      maxsize: LOG_FILE_SIZE,
      logtash: true
    })]
  });
}

exports.default = function (config) {
  var logger = makeLogger(config);
  return function (_ref2) {
    var _ref2$level = _ref2.level;
    var level = _ref2$level === undefined ? _constant.LOG_LOG : _ref2$level;
    var message = _ref2.message;
    var scriptTime = _ref2.scriptTime;


    logger.log(level, message, {
      scriptTime: scriptTime
    });
  };
};

module.exports = exports['default'];