import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.render('index.html', { title: 'World' })
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


export default router;
//export { router as IndexRouting };
