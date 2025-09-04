import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import authRouter from './routes/auth.routes.js';

const app = express();
const baseUrl = 'localhost:3000/api/v1/';

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use(`${baseUrl}/auth`, authRouter);

export default app;
