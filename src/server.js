import express from 'express';
import cors from 'cors';
import {resolve} from 'path'

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(resolve('uploads')))
