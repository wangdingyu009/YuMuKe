/*
 * @Description: api
 * @Version: 2.0
 * @Autor: yanghui
 * @Date: 2020-07-22 16:45:03
 * @LastEditors: xingJing
 * @LastEditTime: 2020-09-01 18:21:27
 */
import {
  request,
  request1
} from './request'

// 获取当前的日期
let currentDate = () => {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
// 截取日期 保留 2020-05-06格式
let splitDate = function (item) {
  let date = item.trim()
  return date.substring(0, 10)
}
// 根据日期获取星期几
let getWeek = function(dateString) {
  var dateArray = dateString.split("-");
  var date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
  return "星期" + "日一二三四五六".charAt(date.getDay());
};
// 把code传给后台获取信息
let getCodeByWeixin = (data) => {
  return request('/app/umooc/login_by_weixin', data, 'post')
}
// 登录
let login = (data) => {
  return request1('/app/umooc/login', data, 'post')
}
// 退出登录接口
let logOut = (data) => {
  return request('/app/umooc/dsUserLogout', data, 'post')
}
// 小程序关闭进入后台的时候
let closeWechat = (data) => {
  return request('/app/umooc/logout', data, 'post')
}
// 首页加载数据
let loadingIndex = (data) => {
  return request('/app/umooc/home', data, 'post')
}
// 消息模块三种类型消息
let messageModel = (data) => {
  return request('/app/umooc/message/index', data, 'post')
}
// 根据消息类型获取每种类型的消息列表
let messageModelByType = (data) => {
  return request('/app/umooc/message/list', data, 'post')
}
// 根据消息类型获取每种类型的消息列表详情页
let messageDetail = (data) => {
  return request('/app/umooc/message/detail', data, 'post')
}
// 课程成绩
let courseScore = (data) => {
  return request('/app/umooc/courseachievement/list', data, 'post')
}
// 课程课表
let courseKebiao = (data) => {
  // return request('/app/umooc/getCourseArrangementList', data, 'get')
  return request('/app/umooc/coursearrangement/queryList', data, 'post')
}
// 课程考试
let courseExam = (data) => {
  // return request('/app/umooc/findCourseExamList', data, 'get')
  return request('/app/umooc/courseexam/list', data, 'post')
}
// 监考任务列表
let jiankaoTask = (data) => {
  return request('/app/umooc/getInvigilateTaskList', data, 'post')
}
// 监考任务详情
let jiankaoTaskInfo = (data) => {
  return request('/app/umooc/getInvigilateTaskDetail', data, 'post')
}
// 等级考试
let levelExam = (data) => {
  return request('/app/umooc/getRankExamList', data, 'post')
}
// 校区和教学楼
let xiaoqu = (data) => {
  return request('/app/umooc/roomScheduleList', data, 'post')
}
// 教室时间
let roomTime = (data) => {
  return request('/app/umooc/roomScheduleResultList', data, 'get')
}
// 教室搜索
let searchRoom = (data) => {
  return request('/app/umooc/searchResRoom', data, 'get')
}
// 综合审查
let zongheQuery = (data) => {
  // return request('/app/umooc/getCheckProjectList', data, 'get')
  return request('/app/umooc/checkproject/getList', data, 'get')
}
// 联系我们
let concatUs = (data) => {
  return request('/app/umooc/getContactUs', data, 'get')
}
// 联系我们列表
let concatUsList = (data) => {
  return request('/app/umooc/getContactUsList', data, 'get')
}
// 意见反馈
let feedBack = (data) => {
  return request('/app/umooc/postFeedBack', data, 'post')
}
// 消息列表
let messageList = (data) => {
  return request('/app/umooc/getUserMessage', data, 'get')
}
// 代课任务
let daikeTask = (data) => {
  return request('/app/umooc/getCourseTransferRecordList', data, 'post')
}
// 代课任务详情
let daikeTaskDetail = (id, data) => {
  return request('/app/umooc/getCourseTransferRecordDetail/' + id, data, 'get')
}

// 教学任务列表
let jiaoxueTaskList = (data) => {
  return request('/app/umooc/teachingtask/getList', data, 'post')
}

/// 本学期教学任务列表
let currentJiaoxueTaskList = (data) => {
  return request('/app/umooc/teachingtask/getCurrTermTask', data, 'get')
}

// 教学任务详情
let jiaoxueTaskDetail = (data) => {
  return request('/app/umooc/teachingtask/getDetail', data, 'get')
}

//选课人数
let xuankePeople = (data) => {
  return request('/app/umooc/teachingtask/getCourseArrangementStuList', data, 'get')
}

// 查看合班
let viewHeban = (data) => {
  return request('/app/umooc/teachingtask/getAmalgamativeClassNames', data, 'get')
}

// 用户的账号信息
let userAccountInfo = (data) => {
  return request('/app/umooc/userInfo', data, 'post')
}

// 课程成绩下拉框数据
let dropDown = (data) => {
  return request('/app/umooc/queryCurrYearTerms', data, 'get')
}

// 调课申请列表
let switchApplyList = (data) => {
  return request('/app/umooc/teachercoursetransferapply/getResultList', data, 'post')
}

// 调课申请详情
let switchApplyDesc = (data) => {
  return request('/app/umooc/teachercoursetransferapply/getResultDetail/' + data.id, {},'get')
}

// 调课审批列表
let courseexamine = (data) => {
  return request('/app/umooc/teachercoursetransferapproval/getList', data, 'post')
}

// 调课审批详情
let courseexamineDesc = (data) => {
  return request('/app/umooc/teachercoursetransferapproval/getDetail', data, 'post')
}

// 调课审批 查询合班
let courseexamineHeban = (data) => {
  return request('/app/umooc/teachercoursetransferapproval/getAmalgamativeClassNames/' + data.id, {}, 'get')
}

// 调课审批确认拒绝
let approvalOfCourseTransfer = (data) => {
  return request('/app/umooc/teachercoursetransferapproval/approval', data, 'post')
}

// 教室审批
let roomCheck = (data) => {
  return request('/app/umooc/classroomapproval/getList', data, 'post')
}

// 教室审批详情
let roomCheckInfo = (data) => {
  return request('/app/umooc/classroomapproval/getDetail/'+ data.borrowId, {}, 'get')
}

// 教室审批确认拒绝
let confirmOrRefuse = (data) => {
  return request('/app/umooc/classroomapproval/approval', data, 'post')
}

// 教室申请
let roomApply = (data) => {
  return request('/app/umooc/roomborrowapply/getList', data, 'post')
}

// 教室申请详情
let roomApplyInfo = (data) => {
  return request('/app/umooc/roomborrowapply/getDetail/' + data.borrowId, {}, 'get')
}

module.exports = {
  currentDate,
  login,
  logOut,
  closeWechat, // 关闭小程序，小程序进入后台
  messageModel,
  messageModelByType,
  messageDetail,
  getCodeByWeixin,
  getWeek,
  splitDate,
  loadingIndex,
  courseScore,
  courseKebiao,
  courseExam,
  jiankaoTask,
  jiankaoTaskInfo,
  levelExam,
  xiaoqu,
  searchRoom,
  roomTime,
  zongheQuery,
  concatUs,
  concatUsList,
  feedBack,
  messageList,
  daikeTask,
  daikeTaskDetail,
  jiaoxueTaskList,
  currentJiaoxueTaskList,
  jiaoxueTaskDetail,
  xuankePeople,
  viewHeban,
  userAccountInfo,
  dropDown,
  roomCheck,
  roomCheckInfo,
  switchApplyList,
  switchApplyDesc,
  courseexamine,
  roomApply,
  roomApplyInfo,
  courseexamineDesc,
  courseexamineHeban, // 调课审批查询合班
  confirmOrRefuse,
  approvalOfCourseTransfer, // 调课审批接口
}