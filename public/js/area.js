/**
 * Created by YT on 2017/6/12.
 */
$(function () {
  $(".date li").click(function () {
      $(this).addClass("color").siblings("li").removeClass("color");
  })
    
});
var link;
$("body").on("click",".area-list",function () {
    var num = $(this).find(".num").html();
    console.log(num);
    location.href = "tickets?num="+num;
});

