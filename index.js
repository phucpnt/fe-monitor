import express from 'express';

import makeRouter from './src/server/router';

import config from './server.config.json';

const app = express();
const port = 3000;

app.use('/', makeRouter(config));


app.listen(port, '0.0.0.0', () => {

  console.log('Server running on port ', port);

});
