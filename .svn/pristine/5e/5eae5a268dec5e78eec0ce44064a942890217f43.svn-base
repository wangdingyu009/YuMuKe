// pages/timetable/timeable.js
const {
  dropDown,
  courseKebiao,
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xuenian: [],
    xuenianIndex: 0,
    zhouci: [],
    zhouciIndex: 0,
    xingqi: ['全部', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    xingqiIndex: 8,
    list: [],
    currentXueqiShow: ''
  },

  // 点击当前学期
  goDetail() {
    wx.navigateTo({
      url: '/pages/currentsemester/currentsemester?title=2020春',
    })
  },

  // 下拉框列表的数据 每年多少个学期
  async dropDownData() {
    let params = {}
    let res = await dropDown(params)
    console.log(res,'xuenianindex')
    res.data.forEach((el,index) => {
      if (el.status == 0) {
        console.log(el,'el')
        this.setData({
          xuenianIndex: index,
          currentXueqiShow: el.showVal
        })
      }
    })
    this.setData({
      xuenian: res.data
    })
    this.init()
  },

  // 学年学期
  xuenianChange(e) {
    console.log(e.detail.value,'eeeeeeee',this.data.xuenian)
    this.setData({
      xuenianIndex: e.detail.value,
      currentXueqiShow: this.data.xuenian[Number(e.detail.value)].showVal
    })
    this.init()
  },

  // 第几周
  xingqiChange(e) {
    this.setData({
      xingqiIndex: e.detail.value
    })
    this.init()
  },

  // 星期几
  zhouciChange(e) {
    this.setData({
      zhouciIndex: e.detail.value
    })
    this.init()
  },

  async init() {
    let params = {
      whichWeek: Number(this.data.zhouciIndex) + 1, // 周次
      yearTerm: this.data.xuenian[this.data.xuenianIndex].showKey, // 学年学期
      // weeks: this.data.xingqiIndex, // 星期
    }
    if (this.data.xingqiIndex == 0 ) {
      params.weeks = ''
    } else {
      params.weeks = this.data.xingqiIndex
    }
    let res = await courseKebiao(params)
    console.log(res,'课程课表数据')
    if (res.code == 1) {
      this.setData({
        list: res.data
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
    let v = wx.getStorageSync('userInfo')
    let arr = []
    for (var i = 0; i < v.currYearTermTotalWeeks; i++ ) {
      let num = i + 1
      arr.push('第' + num + '周')
    }
    var today=new Date().getDay(); 
    this.setData({
      zhouci: arr,
      zhouciIndex: v.currTermWeek,
      xingqiIndex: Number(today)
    })
    
     console.log("today:"+today, typeof today);
    this.dropDownData()
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