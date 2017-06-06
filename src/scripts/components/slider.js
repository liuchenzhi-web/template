$(function() {
    var i = 0;
    var clone = $(".banner .img li").first().clone();
    $(".banner .img").append(clone);
    var size = $(".banner .img li").size();
    for (var j = 0; j < size - 1; j++) {
        $(".banner .num").append("<li></li>");
    }
    $(".banner .num li").first().addClass('on');
    //鼠标划入圆点
    $(".banner .num li").hover(function() {
        var index = $(this).index();
        i = index;
        $(".banner .img").stop().animate({ left: -index * 1000 }, 500);
        $(this).addClass('on').siblings().removeClass('on');
    })

    /*自动轮播*/
    var t = setInterval(function() {
        i++;
        move();
    }, 2000);

    //对banner定时器的操作
    $(".banner").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(move, 2000);
    })


    /*向左按钮*/
    $(".banner .btn_l").click(function() {
            i++;
            move();
        })
        /*向右按钮*/
    $(".banner .btn_r").click(function() {
        i--;
        move();
    })

    function move() {
        if (i == size) {
            $(".banner .img").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {
            $(".banner .img").css({ left: -(size - 1) * 1000 });
            i = size - 2;
        }

        $(".banner .img").stop().animate({ left: -i * 1000 }, 500);

        if (i == size - 1) {
            $(".banner .num li").eq(0).addClass('on').siblings().removeClass('on');
        } else {
            $(".banner .num li").eq(i).addClass('on').siblings().removeClass('on');
        }
    }
})