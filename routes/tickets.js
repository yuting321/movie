/**
 * Created by YT on 2017/6/14.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/',function (req, res) {
    sql.select("id1", {}, function (data) {
        if (data.length > 0) {
            res.render("tickets", {
                val: data
            });
        }
    });
});
module.exports = router;



