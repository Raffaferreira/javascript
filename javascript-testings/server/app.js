import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { ContactRouting, IndexRouting } from './routes/exports';

var app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => res.status(404).json({ message: 'No route found' }));
app.use('/contact', ContactRouting);
app.use('/index', IndexRouting);

export default app;


//UNIX
//NODE_ENV=development node index.js

//WINDOWS
//set NODE_ENV=development && node index.js