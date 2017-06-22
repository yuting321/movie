/**
 * Created by YT on 2017/6/10.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
   var name =req.query.name;
    sql.select("user", {userName: name}, function (data) {
        if (data.length > 0) {
            res.render("personal", {
                val: data
            });
            console.log(data);
        } else {
            res.send(false);
        }
    });
});
module.exports = router;