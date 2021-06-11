// pages/currenttask/currenttask.js
// 
const {
  currentJiaoxueTaskList
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  // 教学任务详情
  goDesc(e) {
    wx.navigateTo({
      url: '/pages/teachtaskinfo/teachtaskinfo?eqid=' + e.currentTarget.dataset.eqid,
    })
  },

  async init() {
    let data = {}
    let res = await currentJiaoxueTaskList(data)
    console.log(res,'本学期任务')
    this.setData({
      list: res.data
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