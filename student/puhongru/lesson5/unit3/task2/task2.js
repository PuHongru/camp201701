/**
 * Created by puhongru on 2017/2/22.
 */

/*
* 跨浏览器事件处理
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

var input = document.getElementById('input');
var btn = document.getElementsByClassName('submit')[0];

var o = {
    input : input
};

//var objUnique = unique.bind(o);
EventUtil.addHandler(btn, 'click', unique.bind(o));

function unique(){
    let input = this.input.value.trim();
    let inputArr = input.split(',');

    let set = new Set(inputArr);
    alert(Array.from(set).toString());
}