/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-22 10:03:10
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-22 13:16:57
 */
// pages/Feedback/index.js
const {
  feedBack
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    currentNum: 0,
    maxNum: 200,
    value: ''
  },

  async submit() {
    let params = {
      userId: wx.getStorageSync('uid') ? wx.getStorageSync('uid') : 2,
      title: '',
      tel: this.data.phone,
      content: this.data.value
    }
    let res = await feedBack(params)
    if (res.code === 1) {
      wx.showToast({
        title: '提交成功！',
        icon: 'none'
      })
      setTimeout(() => {
        wx.navigateBack({
          delta: 1,
        })
      }, 1200)
    }
    console.log(res,'意见反馈')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  telChange(e) {
    let v = e.detail.value
    this.setData({
      phone: v
    })
  },
  bindKeyInput: function (e) {
    let value = e.detail.value;

    let length = parseInt(value.length);

    if  (length > this.data.maxNum) {
      return;
    }

    this.setData({
      currentNum: length,
      value: value
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