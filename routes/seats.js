/**
 * Created by YT on 2017/6/9.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
     res.render('select-seat', { title: 'Express' });
});

module.exports = router;