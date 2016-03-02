import express from 'express';
import log from './log';

import {
  PARAM_LEVEL,
  PARAM_MESSAGE,
  PARAM_SCRIPT_TIME,
  PARAM_TYPE
} from '../shared/constant';

let router = express.Router();

router.all('/i*.gif', (req, res) => {
  const data = new Buffer('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'); // transparent gif 1x1
  const params = req.query;

  log({
    level: params[PARAM_LEVEL],
    message: params[PARAM_MESSAGE],
    scriptType: params[PARAM_SCRIPT_TIME],
  });
  console.log(params);

  res.type('gif');
  res.send(data);
});

export default router;
