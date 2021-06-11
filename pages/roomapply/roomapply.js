// pages/roomapply/roomapply.js
const {
  roomApply
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhouci: [],
    zhouciIndex: 0,
    xingqi: ['全部','星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
    xingqiIndex: 0,
    // zhuangtai: ['全部', '待审批', '已通过', '已拒绝','未提交'],
    zhuangtai: ['全部', '待审批', '已通过', '已拒绝'],
    zhuangtaiIndex: 0,
    list: []
  },

  // 进入教室申请详情
  goDetail(e) {
    let v = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/roomapplyinfo/roomapplyinfo?borrowid=' + v.borrowid + '&statusval=' + v.statusval,
    })
  },

  xingqiChange(e) {
    this.setData({
      xingqiIndex: e.detail.value
    })
  },
  
  zhouciChange(e) {
    this.setData({
      zhouciIndex: e.detail.value
    })
  },

  zhuangtaiChange(e) {
    this.setData({
      zhuangtaiIndex: e.detail.value
    })
    this.init()
  },

  async init() {
    let params = {}
    if (this.data.xingqiIndex == 0) {
      params.weeks = ''
    } else {
      params.weeks = parseInt(this.data.xingqiIndex)
    }
    if (this.data.zhouciIndex == 0) {
      params.termWeek = ''
    } else {
      params.termWeek =  parseInt(this.data.zhouciIndex)
    }

    if (this.data.zhuangtaiIndex == 0) {
      params.reviewStatus = ''
    } else {
      params.reviewStatus = Number(this.data.zhuangtaiIndex) - 1
    }

    let res = await roomApply(params)
    console.log(res,'教室申请列表')
    this.setData({
      list: res.data
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let v = wx.getStorageSync('userInfo')
    let arr = ['全部']
    for (var i = 0; i < v.currYearTermTotalWeeks; i++ ) {
      let num = i + 1
      arr.push('第' + num + '周')
    }
    this.setData({
      zhouci: arr,
      // zhouciIndex: v.currTermWeek
    })
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