// pages/roomapprove/roomapprove.js
const {
  roomCheck
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuangtai: [ '待审批', '已审批'],
    zhuangtaiIndex: 0,
    dateStart: '',
    limitStart: '',
    limitEnd: '',
    dateEnd: '',
    list: []
  },

  // 进入详情页
  goDetail(e) {
    console.log(e);
    
    let v = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/roomapproveinfo/roomapproveinfo?borrowid=' + v.borrowid,
    })
  },

   // 开始日期
   bindDateChangeStart(e) {
    this.setData({
      dateStart: e.detail.value
    })
    this.init()
  },

  // 结束日期
  bindDateChangeEnd(e) {
    this.setData({
      dateEnd: e.detail.value
    })
    this.init()
  },

  // 状态
  zhuangtaiChange(e) {
    console.log(e,'status')
    this.setData({
      zhuangtaiIndex: e.detail.value
    })
    this.init()
  },

  async init() {
    let params = {
      reviewStatus: String(this.data.zhuangtaiIndex),
      startTime: String(this.data.dateStart),
      endTime: String(this.data.dateEnd)
    }
    let res = await roomCheck(params)
    console.log(res,'教室给我审批通过好吗、？')
    this.setData({
      list: res.data.showData
    })
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
    console.log(v.currYearTermStartDay,typeof v.currYearTermEndDay)
    this.setData({
      limitStart: v.currYearTermStartDay,
      limitEnd: v.currYearTermEndDay,
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