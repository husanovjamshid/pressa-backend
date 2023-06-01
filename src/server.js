import express from 'express';
import cors from 'cors';
import { resolve } from 'path';
import indexRoutes from './routes/index.routes.js';
import swaggerRoute from './utils/swagger.js'
const PORT = process.env.PORT || 9090;
import 'dotenv/config';
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(resolve('uploads')));
app.use(indexRoutes);
app.use(swaggerRoute)

app.listen(PORT, console.log('server is running port ' + PORT));
