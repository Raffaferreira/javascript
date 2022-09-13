import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import contactRouting from './routes/contact';
import indexRouting from './routes/index'; 

var app = express()

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    //index: true,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }

app.set('views', path.join(__dirname, '../public/views/'));
app.use(logger('dev'));
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'), options));

console.log("Diretorio do projeto ", __dirname);
console.log("Pasta das views :", app.get('views'));
console.log("Express static name :", path.join(__dirname, '../public'));

app.use((_, res) => res.status(404).json({ message: 'No route found' }));

app.use('/', indexRouting);
app.use('/contact', contactRouting);
app.use('/admin', function(req, res){
    res.render("<p>Random texts</p>");
})

 
// app.all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next();
// });

export default app;


