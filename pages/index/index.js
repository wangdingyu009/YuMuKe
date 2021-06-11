// pages/index/index.js
const {
  loadingIndex
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columnArr: [], // 判断首页宫格的显示
    list: [], // 消息列表
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    bannerList: [
      // {
      //   img: '../../images/banner.png'
      // },
    ],
    currentSwiper: 0,
  },

  // 课程成绩
  viewScore(e) {
    wx.navigateTo({
      url: '/pages/coursescore/coursescore',
    })
    return
    // console.log(e, 'e')
    let v = e.currentTarget.dataset.title
    console.log(v, 'vvvv')
    switch (v) {
      case '课程成绩':
        wx.navigateTo({
          url: '/pages/coursescore/coursescore',
        })
        break;
      case '课程课表':
        wx.navigateTo({
          url: '/pages/timetable/timetable',
        })
        break;
      case '课程考试':
        wx.navigateTo({
          url: '/pages/courseexamination/courseexamination',
        })
        break;
      case '监考任务':
        wx.navigateTo({
          url: '/pages/watchtask/watchtask',
        })
        break;
      case '等级考试':
        wx.navigateTo({
          url: '/pages/gradeexamination/gradeexamination',
        })
        break;
      case '教室时间':
        wx.navigateTo({
          url: '/pages/roomtime/roomtime',
        })
        break;
      case '综合审查':
        wx.navigateTo({
          url: '/pages/synthesize/synthesize',
        })
        break;
      case '代课任务':
        wx.navigateTo({
          url: '/pages/supplytask/supplytask',
        })
        break;
      case '校历查询':
        wx.navigateTo({
          url: '/pages/schoolcalendar/index',
        })
        break;
      case '教学任务':
        wx.navigateTo({
          url: '/pages/teachtask/teachtask',
        })
        break;
      case '调课申请':
        wx.navigateTo({
          url: '/pages/switchapply/switchapply',
        })
        break;
      case '教室申请':
        wx.navigateTo({
          url: '/pages/roomapply/roomapply',
        })
        break;
      case '调课审批':
        wx.navigateTo({
          url: '/pages/courseexamine/courseexamine',
        })
        break;
      case '教室审批':
        wx.navigateTo({
          url: '/pages/roomapprove/roomapprove',
        })
        break;
      case '学业预警':
        wx.navigateTo({
          url: '/pages/studywarn/studywarn',
        })
        break;
      default:

        break;
    }

  },

  // 课程课表
  goTimetable() {
    wx.navigateTo({
      url: '/pages/timetable/timetable',
    })
  },

  // 课程考试
  goExamination() {
    wx.navigateTo({
      url: '/pages/courseexamination/courseexamination',
    })
  },

  // 监考任务
  goWatchTask() {
    wx.navigateTo({
      url: '/pages/watchtask/watchtask',
    })
  },
  // 校历查询
  schoolCalendar() {
    wx.navigateTo({
      url: '/pages/schoolcalendar/index',
    })
  },
  // 等级考试
  gogradeexamination() {
    wx.navigateTo({
      url: '/pages/gradeexamination/gradeexamination',
    })
  },

  // 教室时间
  goRoomTime() {
    wx.navigateTo({
      url: '/pages/roomtime/roomtime',
    })
  },

  // 综合审查
  goSynthesize() {
    wx.navigateTo({
      url: '/pages/synthesize/synthesize',
    })
  },

  // 代课任务
  goSupply() {
    wx.navigateTo({
      url: '/pages/supplytask/supplytask',
    })
  },

  // 教学任务
  goTeachTask() {
    wx.navigateTo({
      url: '/pages/teachtask/teachtask',
    })
  },

  // 调课申请
  switchapply() {
    wx.navigateTo({
      url: '/pages/switchapply/switchapply',
    })
  },

  // 教室申请
  roomapply() {
    wx.navigateTo({
      url: '/pages/roomapply/roomapply',
    })
  },

  // 调课审批
  courseExamine() {
    wx.navigateTo({
      url: '/pages/courseexamine/courseexamine',
    })
  },

  // 教室审批
  roomapprove() {
    wx.navigateTo({
      url: '/pages/roomapprove/roomapprove',
    })
  },

  // 学业预警
  studyWarn() {
    wx.navigateTo({
      url: '/pages/studywarn/studywarn',
    })
  },

  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },

  // 点击消息列表进入列表
  infoList() {
    wx.switchTab({
      url: '/pages/info/info',
    })
  },

  toActivityDetails() {},

  async init() {
    let params = {
      // userId: wx.getStorageSync('uid') ? wx.getStorageSync('uid') : 2
    }
    let res = await loadingIndex(params)
    console.log(res, '首页加载')
    if (res.code === 1) {
      this.setData({
        list: res.data.newMessageList,
        bannerList: res.data.sliderData
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.init()
    console.log(typeof wx.getStorageSync('permission'), 'permission')
    let v = wx.getStorageSync('permission')
    let arr = []
    v.forEach((el, index) => {
      for (var key in el) {
        if (el[key]) {
          arr.push({
            title: key
          })
        }
      }
    })
    this.setData({
      columnArr: arr
    })
    console.log(arr, 'arr')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})