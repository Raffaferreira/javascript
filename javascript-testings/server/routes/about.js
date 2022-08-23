'use strict';
const helper =  require('../modules/helpers')
import extension from '../modules/extensions.js'
import * as Utils from '../modules/utils.js';

import { Router } from 'express';
const router = Router();

router.get('/test', function (req, res) {

    helper.getFullName("","");
    extension.returnMultiplication(5, 5);
    extension.returnSum(4, 4);
    Utils.myLogger();
    Utils.myNumbers;

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
