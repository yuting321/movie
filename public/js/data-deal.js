/**
 * Created by YT on 2017/6/8.
 */
// 注册页面提交数据
$(".confirm").click(function () {
    if(stau==1 && code!==0 && $(".pass").val().length>0) {
        var mobile = $(".mobile").val();
        var pwd = $(".pass").val();
        $.post("/signup", {un: mobile, up: pwd,status:"find"}, function (data) {
            if (data == false) {
                $.post("/signup", {un: mobile, up: pwd,status:"add"}, function (data) {

                });
                location.href='list';
            }else{
                $(".warning").show();
                $(".warning").html("用户已存在").css({"background":"#939393;"});
                setInterval(function () {
                    $("warning").fadeOut();
                },2000);
            }
        })
    }
});

function cookie() {
    var date = new Date();
    date.setTime(date.getTime() + (3 * 24 * 60 * 60 * 1000));
    $.cookie("userName",$(".user").val(),{
        path:"login",
        expires:7
    });
}

//登录界面验证数据
$(".confirm-login").click(function () {
    if(test==1 && $(".pwd2").val().length>5){
        var mobile =$(".user").val();
        var pwd =$(".pwd2").val();
        $.post("/login",{name:mobile,pwd:pwd},function (data) {
            if(data == true){
                location.href='personal?name='+mobile;
            }else{
                $(".warning2").show();
                $(".warning2").html("账号或密码不正确！").css({"background":"#939393"});
                setInterval(function () {
                    $(".warning2").fadeOut();
                },2000);
            }
        });
    }
});

