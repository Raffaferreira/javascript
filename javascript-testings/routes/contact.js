'use strict';

import { Router } from 'express';
const router = Router();

router.get('/contact', function (req, res) {
    console.log(req);
    console.log(res);
    res.render("contact.html");
});

router.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});

export { router as ContactRouting };
