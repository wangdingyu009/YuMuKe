// pages/watchtask/watchtask.js
const {
  jiankaoTask,
  currentDate
} = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: '',
    endDate: '结束日期',
    list: []
  },

  // 进入监考任务详情页面
  goInfo(e) {
    console.log(e, 'click监考任务详情')
    wx.navigateTo({
      url: '/pages/watchtaskinfo/watchtaskinfo?id=' + e.currentTarget.dataset.id,
    })
  },

  // 点击日期
  bindDateChangeStart(e) {
    this.setData({
      startDate: e.detail.value
    })
    this.init()
  },


  // 结束日期
  bindDateChangeEnd(e) {
    this.setData({
      endDate: e.detail.value
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

  // 初始化列表数据
  async init() {
    let params = {
      startTime: this.data.startDate,
      // startTime: '2000-01-01',
      endTime: this.data.endDate === '结束日期' ? '' : this.data.endDate,
      currentPage: 1,
      pageSize: 20
      // userId: wx.getStorageSync('uid') ? wx.getStorageSync('uid') : 100
    }
    let res = await jiankaoTask(params)
    if (res.code === 1) {
      var v = []
      console.log(res.data,'监考任务')
      res.data.forEach((el,index) => {
        el.overDueStatus = this.compareDate(currentDate(),el.invigilateDate.split('.').join('-'))
        v.push(el)
      })
      this.setData({
        list: v
      })
    }
    console.log(res, '监考任务列表',v)
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
    // console.log(this.compareDate(),this.compareDate())
    this.setData({
      startDate: currentDate()
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