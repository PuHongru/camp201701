/**
 * Created by puhongru on 2017/2/23.
 */

/**
* 静态方法
* */
var _CAL = {
  /**
   * 将日期对象、日期字符串格式化为指定日期字符串
   * @name _CAL#formatDate
   * @param {object|string} vArg 可为日期对象或者日期字符串，日期对象格式为new Date(yyyy, mm, dd)，日期字符串形式为yyyy-mm|m-dd|d
   * @function
   * @return string yyyy/mm|m/dd|d
   * */
    formatDate: function(vArg) {
      switch(typeof vArg) {
          case 'string' :
              vArg = vArg.split(/-|\//g);
              return vArg[0] + '/' + vArg[1] + '/' + vArg[2];
              break;
          case 'object' :
              return vArg.getFullYear() + '/' + (vArg.getMonth() + 1) + '/' + vArg.getDate();
              break;
      }
  },
    /**
     * 计算两个日期之间相差多少天
     * @name _CAL#daysBefore
     * @param {object} desDate 时间对象，目标日期
     * @param {object} date 时间对象，距离目标日期的日期
     * @function
     * @return number 天数
     * */
    daysBefore : function (desDate, date) {
        return parseInt((desDate.getTime() - date.getTime())/(24 * 60 * 60 * 1000));
    }
};


function getArr(starDate, day, endDate){
    let arr = [];
    let month = starDate.getMonth();
    while (starDate.getMonth() == month) {
        if (starDate.getDay() == day) {
            let daysBefore = _CAL.daysBefore(starDate, endDate);
            arr.push({
                date: _CAL.formatDate(feb),
                daysbefore:daysBefore
            });
        }
        starDate.setDate(starDate.getDate() + 1);
    }
    return arr;
}

var now = new Date();
var feb = new Date(2017, 1, 1);
var arr = getArr(feb, 3, now);
console.log(arr);