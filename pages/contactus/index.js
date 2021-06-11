/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-21 17:29:50
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-22 13:46:23
 */
// pages/contactus/index.js
const {
  concatUs,
  concatUsList
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '关于我们',
        type: 1
      },
      {
        name: '意见反馈',
        type: 2
      },
      {
        name: '帮助',
        type: 3
      }
    ]
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  jumpTap: function(e) {
    let type = e.currentTarget.dataset.type
    if(type == 1) {
      wx.navigateTo({
        url: '/pages/aboutus/index', // 关于我们
      })
    } else if(type == 2) {
      wx.navigateTo({
        url: '/pages/Feedback/index' // 意见反馈
      })
    } else {
      wx.navigateTo({
        url: '/pages/help/index' // 帮助
      })
    }
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