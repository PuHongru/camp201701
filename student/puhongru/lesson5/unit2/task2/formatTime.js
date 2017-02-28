/**
 * Created by puhongru on 2017/2/27.
 */

/**
 * format time to YYYY-MM-DD HH:MM:SS
 * @param {object || string} date ����ʱ�䣬������Date����Ҳ�������ַ�����ʽ��ʱ�䣬�ַ�����ʽ�ĵ�ʱ����/:-��ո����ʽ�ָ�
 * @return {string} time ���ظ�ʽ�����ʱ�䣬������ɶ��Ѻã���ʽΪ YYYY-MM-DD HH:MM:SS
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
            time = '��ʽ����';
    }

    return time;
}

exports.formatTime = formatTime;

// test
//var date = new Date();
var date = '2014 12 3';
console.log(formatTime(date));