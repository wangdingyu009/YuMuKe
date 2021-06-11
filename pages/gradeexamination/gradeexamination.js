// pages/gradeexamination/gradeexamination.js
const { levelExam } = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [], // 等级考试列表
  },

  async init() {
    let params = {

    }
    let res = await levelExam(params)
    if (res.code === 1) {
      this.setData({
        list: res.data
      })
    }
    console.log(res,'等级考试')
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