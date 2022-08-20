'use strict';
import helper from '../modules/helpers.js'
import extension from '../modules/extensions.js'
import { myLogger, myNumbers, Alligator } from '../modules/utils.js'
import * as routesNamed from '../modules/routesnamed.js'
import { Router } from 'express';
const router = Router();

router.get(routesNamed.contact, function (req, res, next) {

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

    console.log(username);
    console.log(category);
    res.send(req.params);
});

router.route('/article')
.get(function(req, res) {
    res.send('Get the article');
})
.post(function(req, res) {
    res.send('Add an article');
})
.put(function(req, res) {
    res.send('Update the article');
});


export { router as ContactRouting };
