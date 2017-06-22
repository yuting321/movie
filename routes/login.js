/**
 * Created by YT on 2017/6/9.
 */
var express = require('express');
var router = express.Router();
var sql = require("../sql/conn");

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;
    sql.select("user",{userName: name,userPwd: pwd},function(data){
        if(data.length > 0){
            res.send(true);
        }else{
            res.send(false);
        }
    });
});
module.exports = router;
