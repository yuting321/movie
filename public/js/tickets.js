/**
 * Created by YT on 2017/6/13.
 */
$(function () {
  var status=1;
    $(".sign-up").click(function () {
        switch(status){
            case 0:{
                $(".sign-up").html("&#xe634;");
                status=1;
                $(".fav").show().html("取消收藏").fadeOut(2000);
            } break;

            case 1:{
                $(".sign-up").html("&#xe63e;").css({"color":"#ffcd03"});
                status=0;
                $(".fav").show().html("收藏成功").fadeOut(2000);
            } break;
        }

    });
    $(".choose").click(function () {
        var price = $(".price").html();
        
        location.href = "seats";
    })
});


