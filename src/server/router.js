import express from 'express';
import makeLogger from './log';

import {
  PARAM_LEVEL,
  PARAM_MESSAGE,
  PARAM_SCRIPT_TIME,
  PARAM_TYPE
} from '../common/constant';

let router = express.Router();

router.all('/i*.gif', (req, res) => {
  const data = new Buffer('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'); // transparent gif 1x1
  const query = req.query;
  const params = req.params;
  console.log(params);

  const log = makeLogger();
  log({
    level: query[PARAM_LEVEL],
    message: query[PARAM_MESSAGE],
    scriptType: query[PARAM_SCRIPT_TIME],
  });

  res.type('gif');
  res.send(data);
});

export default router;
