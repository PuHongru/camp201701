/**
 * Created by puhongru on 2017/2/27.
 */

/**
 * format time to YYYY-MM-DD HH:MM:SS
 * @param {object || string} date 输入时间，可以是Date对象，也可以是字符串形式的时间，字符串形式的的时间以/:-或空格的形式分隔
 * @return {string} time 返回格式化后的时间，对人类可读友好，格式为 YYYY-MM-DD HH:MM:SS
 * */
function formatTime (date){
    var time;

    switch (typeof date){
        case 'object' :
            time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +
                    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            break;
        case 'string' :
            date = date.split(/-|\/|:| /);
            console.log(date);
            var len = date.length;
            var i;

            for (i = len; i < 6; i++){
                if (i == 0){
                    date.push('0000');
                } else if (i < 3){
                    date.push('1');
                } else {
                    date.push(0);
                }
            }
            time = date[0] + '-' + date[1] + '-' + date[2] + ' ' +
                    date[3] + ':' + date[4] + ':' + date[5];
            break;
        default :
            time = '格式错误！';
    }

    return time;
}

exports.formatTime = formatTime;

// test
//var date = new Date();
var date = '2014 12 3';
console.log(formatTime(date));