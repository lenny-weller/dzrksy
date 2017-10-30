$(function(){

    var i=0;
    var timer=null;

    var firstimg=$('.docList li').first().clone(); //复制第一张图片
    $('.docList').append(firstimg).width($('.docList li').length*860); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度


    // 下一个按钮
    $('.next').click(function(){
        i++;
        if (i==$('.docList li').length) {
            i=1; //这里不是i=0
            $('.docList').css({left:0}); //保证无缝轮播，设置left值
        };

        $('.docList').stop().animate({left:-i*860},500);
    })

    // 上一个按钮
    $('.prev').click(function(){
        i--;
        if (i==-1) {
            i=$('.docList li').length-2;
            $('.docList').css({left:-($('.docList li').length-1)*860});
        }
        $('.docList').stop().animate({left:-i*860},500);
    })



    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$('.docList li').length) {
            i=1;
            $('.docList').css({left:0});
        };

        $('.docList').stop().animate({left:-i*860},500);
    },4000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.acdLunbo').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('.docList li').length) {
                i=1;
                $('.docList').css({left:0});
            };

            $('.docList').stop().animate({left:-i*860},500);
        },4000)
    })

})