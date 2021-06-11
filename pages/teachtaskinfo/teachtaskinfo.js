// pages/teachtaskinfo/teachtaskinfo.js
const {
  jiaoxueTaskDetail
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    epid: '',
    detail: {}
  },

  // 选课人数
  curriculavariable() {
    wx.navigateTo({
      url: '/pages/curriculavariable/curriculavariable?epid=' + this.data.epid,
    })
  },

  // 查看合班
  viewinclass() {
    wx.navigateTo({
      url: '/pages/viewinclass/viewinclass?epid=' + this.data.epid,
    })
  },

  // 初始化数据
  async init() {
    let data = {
      epid: this.data.epid
    }
    let res = await jiaoxueTaskDetail(data)
    this.setData({
      detail: res.data
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      epid: options.eqid
    })
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