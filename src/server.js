import express from 'express';
import cors from 'cors';
import { resolve } from 'path';
import indexRoutes from './routes/index.routes.js';
import 'dotenv/config';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(resolve('uploads')));
app.use(indexRoutes);

app.listen(PORT, console.log('server is running port ' + PORT));
