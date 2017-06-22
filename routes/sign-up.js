/**
 * Created by YT on 2017/6/9.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
    res.render('sign-up', { title: 'Express' });
});

router.post("/",function (req,res,next) {
    if(req.body.status == "find"){
        sql.select("user",{userName:req.body.un},function (data) {
            if(data.length > 0){
                res.send(true);
            }else {
                res.send(false);
            }
        });
    }
    if(req.body.status == "add"){
        sql.insert("user",{userName:req.body.un,userPwd:req.body.up,balance:300});
    }
});
module.exports = router;