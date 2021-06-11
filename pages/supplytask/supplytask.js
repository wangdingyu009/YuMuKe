// pages/supplytask/supplytask.js
const { daikeTask, currentDate} = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhouci: [],
    zhouciIndex: '',
    xingqi: ['全部','星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    xingqiIndex: 0,
    list: []
  },

  /// 代课任务详情
  goDesc(e) {
    wx.navigateTo({
      url: '/pages/supplytaskinfo/supplytaskinfo?id=' + e.currentTarget.dataset.id,
    })
  },

  xingqiChange(e) {
    this.setData({
      xingqiIndex: e.detail.value
    })
    this.init()
  },

  zhouciChange(e) {
    this.setData({
      zhouciIndex: e.detail.value
    })
    this.init()
  },

  // 比较两个日期的大小 判断date1是否大于date2
  compareDate(date1, date2) {
    var result = false;
    if (new Date(date1).getFullYear() > new Date(date2).getFullYear()) {
      result = true;
    } else if (new Date(date1).getFullYear() == new Date(date2).getFullYear()) {
      if (new Date(date1).getMonth() > new Date(date2).getMonth()) {
        result = true;
      } else if (new Date(date1).getMonth() == new Date(date2).getMonth()) {
        if (new Date(date1).getDate() > (date2).getDate()) {
          result = true;
        }
      }
    }
    return result;
  },

  async init() {
    let params = {
      // yearId: 41,  // 上线之后去掉
      // termId: 1,  // 上线之后去掉
      whichWeek: this.data.zhouciIndex,
      weeks: this.data.xingqiIndex
    }
    let res = await daikeTask(params)
    if (res.code == 1) {
      var v = []
      res.data.forEach(el => {
        el.overDueStatus = this.compareDate(currentDate(),el.trandsferDate)
        v.push(el)
      })
      this.setData({
        list: v
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
    let arr = ['全部']
    for (var i = 0; i < v.currYearTermTotalWeeks; i++ ) {
      let num = i + 1
      arr.push('第' + num + '周')
    }
    this.setData({
      zhouci: arr,
      // zhouciIndex: v.currTermWeek
    })
    this.init()
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