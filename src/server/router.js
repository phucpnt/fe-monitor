import express from 'express';
import makeLogger from './log';
import path from 'path';

import {
  PARAM_LEVEL,
  PARAM_MESSAGE,
  PARAM_SCRIPT_TIME,
  PARAM_TYPE
} from '../common/constant';

export default (config) => {
  let router = express.Router();

  router.all('/_*.gif', (req, res) => {
    const data = new Buffer('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'); // transparent gif 1x1
    const query = req.query;
    const label = req.params[0];

    const log = makeLogger({
      filePath: path.resolve(config.log_dir, `${label}.log`),
      fileSize: config.log_size_in_mb * 1024 * 1024
    });

    log({
      level: query[PARAM_LEVEL],
      message: query[PARAM_MESSAGE],
      scriptType: query[PARAM_SCRIPT_TIME],
    });

    res.type('gif');
    res.send(data);
  });

  router;
}
