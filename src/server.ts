import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import 'source-map-support/register';

import { pageNotFound, errorHandler } from './middleware';

import { getLiveness, getReadiness } from './monitoring';
import  { main } from './routes';

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// monitoring
app.get('/live', getLiveness);
app.get('/ready', getReadiness);

app.get('/', main.mainRoute);

app.use(pageNotFound);
app.use(errorHandler);

export { app };
