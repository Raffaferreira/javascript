import express from 'express'

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
});

router.get('/contacts', (req, res) => {
    console.log(req);
    console.log(res);
    res.sendFile('contact.html', { root: app.get('views') });
});


export default router;
