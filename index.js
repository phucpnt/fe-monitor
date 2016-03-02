import express from 'express';
import router from './src/server/router';

const app = express();
const port = 3000;

app.use('/', router);


app.listen(port, '0.0.0.0', () => {

  console.log('Server running on port ', port);

});
