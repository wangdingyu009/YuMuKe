// pages/watchtaskinfo/watchtaskinfo.js
const { jiankaoTaskInfo } = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '', // 监考任务id 从上个页面传过来的
    desc: {}
  },

  async init() {
    let params = {
      id: this.data.id
    }
    let res = await jiankaoTaskInfo(params)
    console.log(res,'监考任务详情')
    if (res.code === 1) {
      this.setData({
        desc: res.data
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options,'监考任务详情options')
    this.setData({
      id: options.id
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