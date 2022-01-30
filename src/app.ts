import 'express-async-errors';

import express from 'express';
import helmet from 'helmet';

import { routes } from './routes/index.routes';

export const app = express();

app.use(express.json());
app.use(helmet());

app.use(routes);
// app.use(errors);
