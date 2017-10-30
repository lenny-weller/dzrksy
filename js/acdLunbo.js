$(function(){

    var i=0;
    var timer=null;
    $('.lisList li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$('.imgList li').first().clone(); //复制第一张图片
    $('.imgList').append(firstimg).width($('.imgList li').length*($('.imgList li').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.btnRight').click(function(){
        i++;
        if (i==$('.imgList li').length) {
            i=1; //这里不是i=0
            $('.imgList').css({left:0}); //保证无缝轮播，设置left值
        };

        $('.imgList').stop().animate({left:-i*1000},500);
        if (i==$('.imgList li').length-1) {  //设置小圆点指示
            $('.lisList li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.lisList li').eq(i).addClass('active').siblings().removeClass('active');
        }

    })

    // 上一个按钮
    $('.btnLeft').click(function(){
        i--;
        if (i==-1) {
            i=$('.imgList li').length-2;
            $('.imgList').css({left:-($('.imgList li').length-1)*1000});
        }
        $('.imgList').stop().animate({left:-i*1000},500);
        $('.lisList li').eq(i).addClass('active').siblings().removeClass('active');
    })


    //鼠标划入圆点
    $('.lisList li').mouseover(function(){
        var _index=$(this).index();
        $('.imgList').stop().animate({left:-_index*1000},150);
        $('.lisList li').eq(_index).addClass('active').siblings().removeClass('active');
    })

    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.imgList li').length) {
            i=1;
            $('.imgList').css({left:0});
        };

        $('.imgList').stop().animate({left:-i*1000},500);
        if (i==$('.imgList li').length-1) {
            $('.lisList li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('.lisList li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },4000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.acdLunbo').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.imgList li').length) {
                i=1;
                $('.imgList').css({left:0});
            };

            $('.imgList').stop().animate({left:-i*1000},500);
            if (i==$('.imgList li').length-1) {
                $('.lisList li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('.lisList li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },4000)
    })

})