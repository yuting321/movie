/**
 * Created by YT on 2017/6/10.
 */
$(function () {
    $(window).scroll(function () {
        $(".head").show();
        $("footer").hide();
        if($(window).scrollTop()==0){
            $(".head").hide();
            $("footer").show();
        }
    });

    var status=0;
    $(".more").click(function () {
        switch(status){
            case 1:{
                $(".detail").css({"height":90 + "px","overflow":"hidden"});
                $(this).html("&#xe621;");
                status=0;
            }
                break;
            case 0:{
                $(".detail").css({"height":"auto","overflow":"auto"});
                $(this).html("&#xe66c;");
                status=1;
            }
                break;
        }
    });

    $(".sel").click(function () {
        location.href = 'area';
    })
});

