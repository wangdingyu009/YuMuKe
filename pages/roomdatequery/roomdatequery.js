// pages/roomdatequery/roomdatequery.js
const { getWeek, roomTime } = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    square: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
    list: [], // 列表
    jiaoxuelouId: '', // 从上个页面带过来的教学楼id
    dates: '',
    weeks: '', //星期几
    selectRoom: '选择教室', // 教室的名称
    roomId: '', // 教室id
  },

  // 点击下拉框 跳转
  searchDetail() {
    wx.navigateTo({
      url: '/pages/roomselect/roomselect?type=d&BId=' + this.data.jiaoxuelouId,
    })
  },

  async init() {
    let params = {
      queryType: 1,
      queryDate: this.data.dates,
      bId: this.data.jiaoxuelouId,
      roomId: this.data.roomId
    }
    let res = await roomTime(params)
    if (res.code === 1) {
      this.setData({
        list: res.data.roomList
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      jiaoxuelouId: options.jiaoxuelouid,
      dates: options.dates,
      weeks: getWeek(options.dates)
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