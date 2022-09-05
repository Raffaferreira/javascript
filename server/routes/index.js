import express from 'express'

const router = express.Router();

router.get('/', function(req, res) {
    console.log(req);
    console.log(res);

    res.render('index.html');
});

router.get('/about', (req, res) => {
    console.log(req);
    console.log(res);
    res.sendFile(__dirname + '../public/views/about.html')
});

router.get('/contacts', (req, res) => {
    console.log(req);
    console.log(res);
    res.sendFile('contact.html', { root: app.get('views') })
});


export default router;
