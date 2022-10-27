import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';

import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));

app.use('/', homeRoutes);
app.use('/users/', userRoutes);
app.use('/tokens/', tokenRoutes);
app.use('/alunos/', alunoRoutes);
app.use('/fotos/', fotoRoutes);

export default app;
