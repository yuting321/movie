/**
 * Created by YT on 2017/6/8.
 */
    $(".confirm").click(function () {
        if(stau==1 && code!==0 && $(".pass").val().length>5) {
            var mobile = $(".mobile").val();
            var pwd = $(".pass").val();
            $.post("/setpwd", {un: mobile, up:pwd,status:"find"}, function (data) {
                if (data!==false) {
                    console.log(data);
                    $.post("/setpwd", {un: mobile, up:pwd,old:data,status:"update"});
                        $(".warning").show();
                        $(".warning").html("密码修改成功！").css({"background":"#3fcf3c"});
                          location.href = "login";
                        setInterval(function () {
                            $(".warning").fadeOut();
                        },2000);
                    
                    
                            
                }else{
                    $(".warning").show();
                    $(".warning").html("用户不存在").css({"background":"#939393;"});
                    setInterval(function () {
                        $(".warning").fadeOut();
                    },2000);

                }
            })
        }
    });