//轮播图
    var oNext = document.querySelector("#next");
    var oPrev = document.querySelector("#prev");
    var aLi = document.querySelectorAll(".banner .slide-container .slide");
    var oUl = document.querySelector(".banner .slide-container");
    var banner_index = 0;
    var banner = document.querySelector(".banner");
    var flag = false //最后一张是否在动画之中;
    var timer = null;
    oNext.onclick = function(){
        clearInterval(timer);
        if(flag){
            return 0;
        }
        // 未经过 运算的 banner_index;
        if(banner_index == aLi.length - 1){
            banner_index = 1;
            oUl.style.left = 0;
        }else{
            banner_index ++;
        }
        // banner_index => 经过运算的banner_index;
        if(banner_index == aLi.length - 1){
            flag = true; //表示的就是 当前最后一张图片开始动画了;
        }
        move(oUl, -1120 * banner_index , "left" ,function(){
            flag = false; //最后一张动画执行结束
        });
    }
    timer = setInterval(oNext.onclick,3000)
    banner.onmouseover = function(){
        oNext.style.display = "block"
        oPrev.style.display = "block"

    }
    oPrev.onclick = function(){
        clearInterval(timer);
        if(flag){
            return 0;
        }
        // 未经过 运算的 banner_index;
        if(banner_index == 0){
            banner_index = aLi.length - 1;
            oUl.style.left = banner_index * -1120 + "px";
        }else{
            banner_index --;
        }
        // banner_index => 经过运算的banner_index;
        if(banner_index == aLi.length - 1){
            flag = true; //表示的就是 当前最后一张图片开始动画了;
        }
        move(oUl, -1120 * banner_index , "left" ,function(){
            flag = false; //最后一张动画执行结束
        });
    }
    banner.onmouseleave = function(){
        oNext.style.display = "none"
        oPrev.style.display = "none"
    }
    //回到顶部      //导航定位
    var toTop = document.getElementById("totop");
    onscroll = function(){
        var scrollTop = document.documentElement.scrollTop;

        if(scrollTop >= 400){
            toTop.style.display = "block";
        }else{
            toTop.style.display = "none";

        }
    }
    toTop.onclick = function(){
        
        document.documentElement.scrollTop = 0;
    }

    

    

    