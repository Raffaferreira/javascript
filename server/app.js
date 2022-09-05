import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import contactRouting from './routes/contact';
import indexRouting from './routes/index'; 


var app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));
console.log("Express static name :", path.join(__dirname, '../public'));

app.set('views', path.join(__dirname, '../public/views'));
console.log("Pasta das views :", app.get('views'));

console.log("Diretorio do projeto ", __dirname);
console.log("Diretorio do projeto com path.join", path.join(__dirname, '../public'));
console.log("Diretorio full do projeto ", express.static(path.join(__dirname, '../public')));

app.use((req, res) => res.status(404).json({ message: 'No route found' }));

app.use('/', indexRouting);
app.use('/contact', contactRouting);

// app.all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next();
// });

export default app;


