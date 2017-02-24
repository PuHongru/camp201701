/**
 * Created by puhongru on 2017/2/23.
 */

/**
* ��̬����
* */
var _CAL = {
  /**
   * �����ڶ��������ַ�����ʽ��Ϊָ�������ַ���
   * @name _CAL#formatDate
   * @param {object|string} vArg ��Ϊ���ڶ�����������ַ��������ڶ����ʽΪnew Date(yyyy, mm, dd)�������ַ�����ʽΪyyyy-mm|m-dd|d
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
     * ������������֮����������
     * @name _CAL#daysBefore
     * @param {object} desDate ʱ�����Ŀ������
     * @param {object} date ʱ����󣬾���Ŀ�����ڵ�����
     * @function
     * @return number ����
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