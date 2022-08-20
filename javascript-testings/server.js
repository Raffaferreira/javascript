import express from 'express';
const app = express();
import path from 'path';
import http from 'http';
import https from 'https';
import { ContactRouting, IndexRouting } from './routes/exports.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 9090;

const isProduction = process.env.NODE_ENV === 'production';

//app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'views')));

if (!isProduction) {
    //app.use(errorhandler());
  }

app.use((req, res) => res.status(404).json({ message: 'No route found' }));
app.use('/contact', ContactRouting);
app.use('/index', IndexRouting);

var server = app.listen(PORT, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(app);

httpServer.listen(8080);
httpsServer.listen(8082)
