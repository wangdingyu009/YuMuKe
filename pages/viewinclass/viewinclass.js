// pages/viewinclass/viewinclass.js
const {
  viewHeban,
  courseexamineHeban
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    epid: '',
    tiaokeshenpi: '',
    list: []
  },
  async init() {
    if (this.data.tiaokeshenpi == 'tiaokeshenpi') {
      let data = {
        id: this.data.epid
      }
      let res = await courseexamineHeban(data)
      this.setData({
        list: res.data
      })
      return
    }
    let data = {
      epid: this.data.epid
    }
    let res = await viewHeban(data)
    this.setData({
      list: res.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options,'options')
    this.setData({
      epid: options.epid,
      tiaokeshenpi: options.tiaokeshenpi ? options.tiaokeshenpi : ''
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