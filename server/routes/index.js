'use strict'
import express from 'express'
const fs = require('fs').promises;

const router = express.Router();

router.get('/', function(req, res) {
    console.log(req);
    console.log(res);

    res.render('index.html');
});

router.get('/about', function(req, res) {
    console.log(req);
    console.log(res);
    
    console.log(app.get('views'));
    //res.sendFile(path.join(__dirname, '../public/views/about.html'));
    //res.sendFile('about.html', { root: app.get('views') });
    fs.readFile(__dirname + "/about.html")
    // fs.readFile(__dirname + "/index.html")
    //     .then(contents => {
    //         res.setHeader("Content-Type", "text/html");
    //         res.writeHead(200);
    //         res.end(contents);
    //     })
});

router.get('/contacts', (req, res) => {
    console.log(req);
    console.log(res);
    res.sendFile('contact.html', { root: app.get('views') });
});


export default router;
