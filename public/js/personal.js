/**
 * Created by YT on 2017/6/14.
 */
$(".foot-nav div").click(function () {
    $(this).addClass("click").siblings("div").removeClass("click");
});
$(".buy").click(function () {

    location.href = 'list';

})