/**
 * Created by YT on 2017/6/12.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/',function (req, res) {
    console.log(req.query.num);
    sql.select("list", {id: req.query.num}, function (data) {
        if (data.length > 0) {
            res.render("detail", {
                val: data
            });
        }
    })
});
module.exports = router;



