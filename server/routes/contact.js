import helper from '../modules/helpers'
import extension from '../modules/extensions.js'
import { contact, getbookbycategory } from '../modules/routesnamed.js';
import { Alligator, myNumbers, myLogger } from '../modules/utils.js'

import express from 'express'
const router = express.Router();

/**
 * @param {any} request of this body
 * @param {any} response 
 */
router.get(contact, function (req, res, next) {

    helper.getFullName("", "");
    extension.returnMultiplication(5, 5);
    extension.returnSum(4, 4);

    myLogger();
    myNumbers;
    Alligator();

    console.log(req);
    console.log(res);
    //
    res.render("contact.html");
});

router.get(getbookbycategory, function (req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;

    console.log(username);
    console.log(category);
    res.send(req.params);
});

router.route('/article')
    .get(function (req, res) {
        res.send('Get the article');
    })
    .post(function (req, res) {
        res.send('Add an article');
    })
    .put(function (req, res) {
        res.send('Update the article');
    });

export default router;
//export { router as ContactRouting };
