/**
 * Created by YT on 2017/6/10.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
    sql.selectAll("list",function (data) {
        res.render("list",{
            val:data
        });
    });
});
module.exports = router;