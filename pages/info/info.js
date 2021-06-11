/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-21 10:50:32
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-23 18:18:11
 */
// pages/info/info.js
const {
  messageModel
} = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    message0: null,
    message1: null,
    message2: null,
  },

  // 列表
  async init() {
    let params = {}
    let res = await messageModel(params)
    if (res.code === 1) {
      // let message0 = res.data.message0 ? res.data.message0 : ''
      // let message1 = res.data.message1 ? res.data.message1 : ''
      // let message2 = res.data.message2 ? res.data.message2 : ''
      this.setData({
        list: res.data,
        message0: res.data.message0,
        message1: res.data.message1,
        message2: res.data.message2
      })
    }
    console.log(res,'消息列表')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  detialTap: function(e) {
    console.log(e, 'e')
    wx.navigateTo({
      url: '/pages/infotypelist/infotypelist?type=' + e.currentTarget.dataset.type, // 消息类型列表
    })
    // url: '/pages/messagedetial/index'
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