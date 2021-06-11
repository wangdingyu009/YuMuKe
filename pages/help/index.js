/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-22 13:45:54
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-23 14:20:14
 */
// pages/help/index.js
const {
  concatUsList
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['0'],
    list: []
  },

  async init() {
    let params = {}
    let res = await concatUsList(params)
    if (res.code === 1) {
      this.setData({
        list: res.data
      })
    }
    console.log(res,'帮助列表')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
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