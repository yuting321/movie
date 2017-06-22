/**
 * Created by YT on 2017/6/12.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
    
    sql.selectAll("area",function (data) {
        if(data.length>0){
            res.render("area",{
                val:data
            });
        }
    });
});

module.exports = router;



