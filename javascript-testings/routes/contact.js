'use strict';
const helper =  require('../modules/helpers')
import extension from '../modules/extensions'
import { myLogger, myNumbers, Alligator } from '../modules/utils'
const routesNamed = require('../modules/routesnamed')
import { Router } from 'express';
const router = Router();

router.get(routesNamed.contact, function (req, res) {

    helper.getFullName("","");
    extension.returnMultiplication(5, 5);
    extension.returnSum(4, 4);

    myLogger();
    myNumbers;
    Alligator();

    console.log(req);
    console.log(res);
    res.render("contact.html");
});

router.get(routesNamed.getbookbycategory, function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});

export { router as ContactRouting };
