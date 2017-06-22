/**
 * Created by YT on 2017/6/4.
 */
//当手机号，验证码 密码的input的有效值发生改变时
var mobile =/^1[34578]\d{9}$/;
var stau;
var code;
$(".mombile input").on("keyup",function () {
    val = $(this).val();
    $(".clear").show();
    $(".mombile").css({"border-bottom":"1px solid #eb354e"});
    if (val.length > 0) {
        $(".get-cap").css({"background-color": "#eb354e","color":"white"});
    } else {
        $(".clear").hide();
        $(".get-cap").css({"background-color": "#939393"});
    }
    //验证手机正则
    if(mobile.test(val)){
        stau=1;
    }
});

$(".captcha").on("keyup",function () {
    $(".clear-ch").show();
    $(".cap").css({"border-bottom":"1px solid #eb354e"});
    if($(this).val().length==0){
        $(".clear-ch").hide();
    }
});

$(".pass").keyup(function () {
    $(".empty").show();
    $(".pwd").css({"border-bottom":"1px solid #eb354e"});
    if($(this).val().length==0){
        $(".empty").hide();
    }
});

//input失去焦点时，叉叉消失
 function clear(dom1,dom3) {
     $(dom1).blur(function () {
         $(dom3).css({"border-bottom":"1px solid #e8e8e8"})
     });
 }
     clear(".mobile",".mombile");
     clear(".captcha",".cap");
     clear(".pass",".pwd");

$(".clear").click(function () {
    $(".mombile input").val("");
    $(this).hide();
});

$(".clear-ch").click(function () {
    console.log(22);
    $(".captcha").val("");
    $(this).hide();
});
$(".empty").click(function () {
    console.log(222);
    $(".pass").val("");
    $(this).hide();  
});
//密码可见操作
var status = 0;
$(".visable").click(function () {
    if(status == 0) {
        $(".pwd input").attr({"type": "text"});
        $(this).css("color", "black");
        status=1;
    } else {
        $(".pwd input").attr({"type": "password"});
        $(this).css("color", "#939393");
        status = 0;
    }
});
//点击获取验证码
var status = 0;
var set;
var time =60;
var x = '';
$(".get-cap").click(function () {
    if(!(stau==1)){
        $(".warning").show();
        $(".warning").html("请输入正确的手机号");
    }
    if (stau == 1) {
        if (status == 0) {
            status = 1;
            for (var i = 0; i < 4; i++) {
                x += (Math.floor(Math.random() * 9)) + '';
                $(".random").html(x);
            }
             setInterval(function () {
                if (time > 0) {
                    time--;
                    $(".get-cap").val(time + "s")
                }
                else {
                    clearInterval(set);
                    status = 0;
                    $(".get-cap").val('获取验证码');
                }

            }, 1000);
        }
    }
});

//当三个input有效值长度都大于0时，提交按钮背景颜色改变
$('.mombile,.captcha,.pass').keyup(function () {

    if($(".mombile input").val().length>0 && $(".captcha").val().length>0 && $(".pass").val().length>0){
        $(".confirm").css({ "background-color":"#eb354e","color":"white"});
    }else {
        $(".confirm").css({ "background-color":"#939393"});
    }
});

$(".confirm").click(function () {
    if(!(stau==1)){
        $(".warning").show();
        $(".warning").html("请输入正确的手机号");
    }

    if(x !== $(".captcha").val()){
        code=0;
        $(".warning").show();
        $(".warning").html("验证码错误");
    }
    if($(".pass").val().length<6){
        $(".warning").show();
        $(".warning").html("请输入大于6的字符！");
    }
    setInterval(function () {
        $(".warning").fadeOut();
    },2000);
});






