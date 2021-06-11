/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-21 16:06:36
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-21 17:20:38
 */
// pages/account/index.js
const { userAccountInfo } = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    init: {}
  },

  async init() {
    let params = {

    }
    let res = await userAccountInfo(params)
    console.log(res,'res')
    this.setData({
      init: res.data
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  photoTap: function() {
    if (!this.data.init.realName) {return}
    wx.navigateTo({
      url: '/pages/photo/index?new=' + this.data.init.base64Photo + '&old=' + this.data.init.base64GraduatePhoto, 
    })
  },
  // 修改密码
  changePassword: function() {
    wx.navigateTo({
      url: '/pages/changepassword/index',
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