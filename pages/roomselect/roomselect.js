// pages/roomselect/roomselect.js
const { searchRoom } = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    BId: '', // 教学楼id 从上个页面带过来的
    list: [], // 列表
    searchText: '',
    roomId: '', //教室id 需要带到上个页面
    roomName: '', // 选中的教室名字 需要带到上个页面
    type: null, // type判断是日期还是周次进来的 d日期w周次
  },

  // 搜索
  confirmSearch() {
    this.init()
  },

  inputChange(e) {
    this.setData({
      searchText: e.detail.value
    })
  },

  // 清空文本框内容
  clear() {
    this.setData({
      searchText: ''
    })
  },

  // 取消
  cancel() {
    wx.navigateBack({
      delta: 1
    })
  },

  // 点击教室列表的时候 获取教室详情
  getRoomInfo(e) {
    let v = e.currentTarget.dataset
    var pages = getCurrentPages();
    // var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
 
    //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      selectRoom: v.rname,
      roomId: v.rid
    })
    wx.navigateBack({
      delta: 1
    })
  },

  async init() {
    let params = {
      bId: this.data.BId,
      roomName: this.data.searchText
    }
    let res = await searchRoom(params)
    this.setData({
      list: res.data.roomList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      BId: options.BId,
      type: options.type
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
    // this.init()
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