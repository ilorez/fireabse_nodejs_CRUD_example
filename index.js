import express from 'express';
import cors from 'cors';

import config from './config.js';
import productRoute from './Routes/productRoute.js';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api', productRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);