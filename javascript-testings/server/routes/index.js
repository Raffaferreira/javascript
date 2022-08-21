import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.send('Hello World!')
});

router.get('/about', (req, res) => {
    console.log(req);
    console.log(res);
    res.send('about')
});

router.get('/personalcontacts', (req, res) => {
    console.log(req);
    console.log(res);
    res.send('personalcontacts')
});

export { router as IndexRouting };
