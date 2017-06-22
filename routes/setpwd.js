/**
 * Created by YT on 2017/6/9.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
    res.render('setpwd', { title: 'Express' });
});

router.post("/",function (req,res) {
    if(req.body.status == "find") {
        sql.select("user",{userName: req.body.un}, function (data) {
            if (data.length > 0) {
                res.send(data[0].userPwd);
            }
            else {
                res.send(false);
            }
        })
    }
        if(req.body.status =="update"){
            console.log(2);
            sql.update("user",{"userPwd":req.body.old}, {$set: {"userPwd": req.body.up}});
        }
});
module.exports = router;




