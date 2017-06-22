/**
 * Created by YT on 2017/6/5.
 */
//input值改变时，边框图标颜色改变，
$(".user").keyup(function () {
    $(".login-name span").css({"color":"#eb354e"});
    $(".login-name").css({"border-bottom":"1px solid #eb354e"});
    $(".login-name p").html("&#xe66b;");
    if($(".user").val().length==0){
        $(".login-name p").html("&#xe621;");
    }
});

$(".pwd2").keyup(function () {
    $(".clear2").show();
    $(".login-pwd span").css({"color":"#eb354e"});
    $(".login-pwd").css({"border-bottom":"1px solid #eb354e"});
});

$(".user").blur(function () {
    $(".login-name p").html("&#xe621;");
    $(".login-name span").css({"color":"#939393"});
    $(".login-name").css({"border-bottom":"1px solid #939393"});
});
$(".pwd2").blur(function () {

    $(".login-pwd span").css({"color":"#939393"});
    $(".login-pwd").css({"border-bottom":"1px solid #939393"});
});

//input有效值大于0时，点击叉叉可清空
$(".login-name p").click(function () {
    $(".user").val('');
    $(this).html("&#xe621;");
});


$(".clear2").click(function () {
    console.log(333);
    $(".pwd2").val('');
});

//点击密码可见图标  可根据状态显示或不显示密码
var status = 0;
$(".visable").click(function () {
    if(status == 0) {
        $(".pwd2").attr({"type": "text"});
        $(this).css("color", "black");
        status=1;
    } else {
        $(".pwd2").attr({"type": "password"});
        $(this).css("color", "#939393");
        status = 0;
    }
});


//验证手机正则
var mobile =/^1[34578]\d{9}$/;
var test;
$(".user").keyup(function () {
    var val = $(this).val();
    if(mobile.test(val)){
        test=1;
    }
});


//当input中有效值都不为空，确认登录才可点击
$(".user,.pwd2").keyup(function () {
    if($(".user").val().length>0 && $(".pwd2").val().length>0){
        $(".confirm-login").css({"background-color":"#eb354e","color":"white"});
    }else {
        $(".confirm-login").css({ "background-color":"#939393"});
    }
});

$(".confirm-login").click(function () {

    if(test!==1){
        $(".warning2").show().html("请输入正确的手机号！");
    }
    else if($(".pwd2").val().length<6){
        $(".warning2").show().html("请输入大于6的字符！");
    }
        setInterval(function () {
            $(".warning2").fadeOut();
        },2000);
   
});

$(".for").click(function () {
    location.href = "setpwd";
    
})