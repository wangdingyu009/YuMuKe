/*
 * @Description: 公共
 * @Version: 2.0
 * @Autor: yanghui
 * @Date: 2020-07-08 10:09:44
 * @LastEditors: yanghui
 * @LastEditTime: 2020-07-29 18:15:04
 */ 

import {hexMD5} from './md5'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const forameDate = (data) => {
  var newDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(data)
  return newDate
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const showTime = (date) => {
  var now = new Date();
  var hours = now.getHours();
  var timeValue = "" +((hours >= 12) ? "下午" : "上午" )
  return timeValue
}
// sign加密
const buildStr = (params) => {
  let s = "";
  Object.keys(params).sort().map(key => {
    // if (params[key] || params[key] == 0)
    
    // {
        if (key !== 'timestamp' && key !== 'sign')
        {
            if (typeof params[key] === "object")
            {
                s += dataSort(params[key]);
            } else {
                s += params[key] + "#";
            }
        }
    // }
  });
  return s;
}
let getDateDiff = (time) => {
  // 当前时间
  console.log(time)
  var nowTime = new Date();
  var day = nowTime.getDate();
  var hours = parseInt(nowTime.getHours());
  var minutes = nowTime.getMinutes();
  // 传来time 2018-05-25 18:14:02 分解
  var timeday = time.substring(8, 10);
  var timehours = parseInt(time.substring(11, 13));
  var timeminutes = time.substring(14, 16);
  var d_day = Math.abs(day - timeday);
  var d_hours = hours - timehours;
  var d_minutes = Math.abs(minutes - timeminutes);
  if(d_day <= 1){
    switch(d_day){
      case 0:
        if(d_hours==0 && d_minutes > 0){
          return d_minutes + '分钟前';
        }else if(d_hours==0 && d_minutes==0){
          return '1分钟前';
        }else{
          return d_hours + '小时前';
        }
        break;
      case 1:
        if(d_hours<0){
          return (24+d_hours) + '小时前';
        }else{
          return d_day + '天前';
        }
        break;
    }
  }else if(d_day > 1 && d_day<10){
    return d_day + '天前';
  }else{
    return time.substring(0,10);
  }

}
const utf8 = (inputStr) => { //将中文转为UTF8
  var outputStr = "";
  for (var i = 0; i < inputStr.length; i++) {
    var temp = inputStr.charCodeAt(i);
    //0xxxxxxx
    if (temp < 128) {
      outputStr += String.fromCharCode(temp);
    }
    //110xxxxx 10xxxxxx
    else if (temp < 2048) {
      outputStr += String.fromCharCode((temp >> 6) | 192);
      outputStr += String.fromCharCode((temp & 63) | 128);
    }
    //1110xxxx 10xxxxxx 10xxxxxx
    else if (temp < 65536) {
      outputStr += String.fromCharCode((temp >> 12) | 224);
      outputStr += String.fromCharCode(((temp >> 6) & 63) | 128);
      outputStr += String.fromCharCode((temp & 63) | 128);
    }
    //11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
    else {
      outputStr += String.fromCharCode((temp >> 18) | 240);
      outputStr += String.fromCharCode(((temp >> 12) & 63) | 128);
      outputStr += String.fromCharCode(((temp >> 6) & 63) | 128);
      outputStr += String.fromCharCode((temp & 63) | 128);
    }
  }
  return outputStr;
}
const buildSign = (params, timestamp) => {
  return hexMD5(utf8(buildStr(params) + `|t${timestamp}`)).toString();
}
// 获取10位时间戳
const createTimestamp = () => {
  return Math.round((new Date()).valueOf()/1000);
}

//封装toast方法
const toast = (icon,title) =>{
  wx.showToast({
    title: title,
    icon:icon
  })
}
const showLoading = (title = '加载中') => {
  wx.showLoading({
      title: title,
      mask: true
  })
}
module.exports = {
  formatTime: formatTime,
  buildSign: buildSign,
  createTimestamp: createTimestamp,
  showTime: showTime,
  toast:toast,
  forameDate: forameDate,
  showLoading: showLoading,
  getDateDiff: getDateDiff
}
