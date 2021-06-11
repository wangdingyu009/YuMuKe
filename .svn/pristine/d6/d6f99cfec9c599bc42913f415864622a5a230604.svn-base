// pages/login/login.js
const {
  login
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goLogin() {
    wx.navigateTo({
      url: '/pages/accountlogin/accountlogin',
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

  // 微信登录
  init() {
    wx.login({
      success: async (r) => {
        var storages = wx.getStorageSync('userInfo')
        console.log(storages, typeof storages, 'storages 首页登录页判断跳转登录页还是首页')
        let params = {
          code: r.code,
          // openId: 
        }
        if (storages.openId) {
          params.openId = storages.openId
        }
        if (storages.unionId) {
          params.unionId = storages.unionId
        }
        let res = await login(params)
        if (res.code === 1) {
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('permission', res.data.userBusiPermission)
          wx.setStorageSync('roles', res.data.userRoles)
          wx.setStorageSync('userInfo', res.data)
          wx.reLaunch({
            url: '/pages/index/index',
          })
          console.log(res, 'succ pages/login/login')
        } else {
          wx.redirectTo({
            url: '/pages/accountlogin/accountlogin',
          })
          console.log(res, 'err pages/login/login')
        }
      }
    })
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