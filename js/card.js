$(function(){
     
    // 判断游览器的类型是否为ie6 7 8 9
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }
    if ((/msie [9|10]/i.test(navigator.userAgent))){
        // $(".c4conboxstep").show();
        // $(".c4conbox").css({
        //     borderWidth: '1px',
        //     borderStyle: 'dashed',
        //     borderColor: '#b4daf8'
        // })
    }
    var wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated', 
        offset: 20, 
        mobile: true, 
        live: true 
    })
    //增加wow方法
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });
    $(".navs span").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings().removeClass('hover');
            $(".m3-ul").hide().stop().eq(index).show()
        })
    })
   
    $(".zjla").click(function(){
        $(".zg_cover,.zjsming").fadeIn()
    })
    $(".zj-close").click(function(){
        $(".zg_cover,.zjsming").fadeOut()
    })
    $(".cyfs").click(function(){
        $(".adw-text").animateCss("tada")
    })
    $(".m3-ul a").each(function(index){
        $(this).hover(function(){
            $(this).children("div").hide()
            $(this).find(".m3a-card").show()
        },function(){
            $(this).children("div").hide()
            $(this).find(".m3-card").show()
        })
    })
})