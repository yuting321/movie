/**
 * Created by YT on 2017/6/5.
 */
$(function() {
    var can = document.querySelector("canvas");
    var pen = can.getContext('2d');
    var arr = [];
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var m = i * 20 + 10 * i;
            var n = j * 20 + 10 * j;
            arr.push({
                x: n,
                y: m,
                status:0
            });
            pen.rect(n, m + 1, 20, 20);
            pen.stroke();
        }
    }
    
    $('body').on('mousedown', function(e) {
        var num =0;
        var x = e.pageX;
        var y = e.pageY;
        console.log(x + ' ' + y);
        var l = $('canvas').offset().left;
        var t = $('canvas').offset().top;
        console.log('距离左边 ' + l + ' ' + '距离上边' + t);
        var w = $('canvas').width();
        var h = $('canvas').height();
        console.log(' 画布宽' + w + " " + '画布高' + h);
        var l_ = (x - l) * 300 / w;
        var t_ = (y - t) * 300 / h;
        var i_ = Math.floor(l_/30);
        var j_ = Math.floor(t_/30);
        console.log(' 画布' + l_ + " " + '画布' + t_);
        for (var k = 0; k < arr.length; k++) {
            if (crash(l_ - 2, t_ - 2, 4, 4, arr[k].x, arr[k].y, 20, 20)) {
                console.log('碰到第'+ j_ + '行'+ '第'+ i_ + '列');
                if( arr[k].status == 0){
                    pen.fillStyle = '#4caf50';
                    console.log(num);
                    pen.fillRect(i_*20 + 10 *i_,j_*20+10*j_,20,20);
                    arr[k].status = 1;
                }else{
                    pen.clearRect(i_*20 + 10 *i_,j_*20+10*j_,20,20);
                    pen.rect(i_*20 + 10 *i_,j_*20+10*j_,20,20);
                    pen.stroke();
                    arr[k].status = 0;
                }
            }
        }
        console.log(12);
    });


    function crash(x1, y1, w1, h1, x2, y2, w2, h2) {
        if(x1 + w1 < x2 || y1 + h1 < y2 || x1 > x2 + w2 || y1 > y2 + h2) {
            return false;
        } else {
            return true;
        }
    }
});












