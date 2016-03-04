import winston from 'winston';
import path from 'path';
import {
  LOG_LOG,
  LOG_INFO,
  LOG_DEBUG,
  LOG_ERROR,
  LOG_WARN
} from '../../common/constant';

const LOG_FILE_SIZE = 5 * 1024 * 1024;

function makeLogger({
  filePath,
  fileSize = LOG_FILE_SIZE
}) {
  return new winston.Logger({
    transports: [
      new(winston.transports.Console)(),
      new(winston.transports.File)({
        filename: filePath,
        maxsize: LOG_FILE_SIZE,
        logtash: true
      }),
    ]
  });
}

export default (config) => {
  const logger = makeLogger(config);
  return ({
    level = LOG_LOG,
    message,
    scriptTime
  }) => {

    logger.log(level, message, {
      scriptTime
    });

  };
};
