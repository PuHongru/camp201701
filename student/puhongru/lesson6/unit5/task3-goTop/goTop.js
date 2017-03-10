//const threshold = 50; //���� 50px ֮�����ť

/**
 * ���ض������
 * @param {string} id ���ض�����ť��id
 * @param {number} threshold �ڹ���threshold px ����ְ�ť
 * @param {number} duration �ص�����������ʱ�䣬�Ժ����ʱ
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






