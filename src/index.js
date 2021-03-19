import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './ex-2/router';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(3333, () => {
  console.clear();
  console.log(`Server listening at port :3333`);
});