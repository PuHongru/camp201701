/**
 * Created by puhongru on 2017/2/21.
 */

/*
 *  跨浏览器事件处理
 * */
var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    }
};

var submit = document.getElementsByTagName('button')[0];
var result = document.getElementsByClassName('result')[0];
var input = document.getElementById('input');
var maxLen = 20;

var o = {
    input: input,
    maxLen: maxLen,
    result: result
};

var objTest = test.bind(o);
EventUtil.addHandler(submit, 'click', objTest);

function test(){
    var input = this.input.value.trim();
    var maxLen = this.maxLen;
    var result = this.result;

    var filter = input.replace(/-/g, '').toLocaleUpperCase();

    if (filter.length == maxLen){
        result.innerHTML = filter;
        return filter;
    } else {
        result.innerHTML = '异常：无效的密码格式！';
        return false;
    }
}

