/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-21 10:50:32
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-23 17:30:19
 */
// pages/mine/mine.js
const {
  logOut,
  closeWechat,
  userAccountInfo
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    init: {}
  },

  // 获取账号信息
  async init() {
    let params = {

    }
    let res = await userAccountInfo(params)
    this.setData({
      init: res.data
    })
  },

  // 退出登录
  logOut() {
    wx.showModal({
      title: '温馨提示',
      content: '确定要退出吗',
      success: async (res) => {
        let params = {}
        let v = await closeWechat(params)
        console.log(v, '退出')
        // wx.clearStorage()
        if (v.code === 1) {
          // wx.clearStorageSync()
          // wx.redirectTo({
          //   url: '/pages/accountlogin/accountlogin',
          // })
        } else {
          // wx.clearStorageSync()
          // wx.redirectTo({
          //   url: '/pages/accountlogin/accountlogin',
          // })
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  jumpTap: function (e) {
    console.log(e)
    let type = e.currentTarget.dataset.type
    if (type == 1) {
      wx.navigateTo({
        url: '/pages/account/index', // 我的账户
      })
    } else if (type == 2) {
      wx.navigateTo({
        url: '/pages/mymessage/index', // 设置
      })
    } else if (type == 3) {
      wx.navigateTo({
        url: '/pages/setting/index', // 设置
      })
    } else if (type == 4) {
      wx.navigateTo({
        url: '/pages/contactus/index', // 联系我们
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