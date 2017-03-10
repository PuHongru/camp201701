//const threshold = 50; //滚动 50px 之后出按钮

/**
 * 返回顶部组件
 * @param {string} id 返回顶部按钮的id
 * @param {number} threshold 在滚动threshold px 后出现按钮
 * @param {number} duration 回到顶部滚动的时间，以毫秒计时
 * */
function GoTop(id, threshold, duration){
    this.button = document.getElementById(id);

    var self = this,
        timer = null;

    this.button.onclick = function(){
        //window.scrollTo(0, 0);
        cancelAnimationFrame(timer);
        var startTime = Date.now();
        timer = requestAnimationFrame (function fn (){
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0){
                var p = Math.min(1.0, (Date.now() - startTime) / duration);
                document.body.scrollTop = oTop - oTop * p;
                document.documentElement.srcollTop = oTop - oTop * p;
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        })
    };

    window.onscroll = function(evt){
        self.update();
    }

    this.update();
}

GoTop.prototype.update = function(){
    if(window.scrollY > threshold){
        this.button.className = 'scroll';
    }else{
        this.button.className = '';
    }
}

var gotop = new GoTop('go-top', 50, 2000);






