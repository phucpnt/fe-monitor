import winston from 'winston';
import path from 'path';
import {
  LOG_INFO,
  LOG_DEBUG,
  LOG_ERROR,
  LOG_WARN
} from '../../shared/constant';

const logFileSize = 5 * 1024 * 1024;
const filePath = path.resolve(__dirname, '../../fe.log');

const logger = new winston.Logger({
  transports: [
    new(winston.transports.Console)(),
    new(winston.transports.File)({
      filename: filePath,
      maxsize: logFileSize,
      logtash: true
    }),
  ]
});

export default ({
  level = LOG_INFO,
  message,
  scriptTime
}) => {

  console.log(filePath);

  logger.log(level, message, {
    scriptTime
  });

};
