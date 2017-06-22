window.onload = function () {
    //图片的轮播效果
    // var i=0;
    // function time(){
    //     set =setInterval(function () {
    //         if(i<$(".pic").length -1){
    //             i++;
    //         }else {
    //             i=0;
    //         }
    //         $(".all").animate({"left": - i*100+"%"});
    //     },1000);
    // }
    // time();

    //点击导航字体背景颜色改变
    $(".cagroy div").click(function () {
        $(this).addClass("hover").siblings("div").removeClass("hover");
    });
    $(".show div").click(function () {
        $(this).addClass("h").siblings("div").removeClass("h");
    });
    $(".foot-nav div").click(function () {
        $(this).addClass("click").siblings("div").removeClass("click");
    });

    
    $("body").on("click",".list",function () {
        var num = $(this).find(".num").html();
        console.log(num);
        location.href = "detail?num="+num;
    });


    // var dom= document.querySelector(".list");
    // document.body.addEventListener("click",function (event) {
    //     var target = event.target;
    //     if(target==dom){
    //         console.log($(".num").html())
    //     }
    // })


};
