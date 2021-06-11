// pages/switchapply/switchapply.js 调课审批
const {
  courseexamine
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuangtai: [ '待审批', '已审批'],
    zhuangtaiIndex: 0,
    dateStart: '',
    limitStart: '',
    limitEnd: '',
    dateEnd: '',
    list: []
  },

  // 开始日期
  bindDateChangeStart(e) {
    this.setData({
      dateStart: e.detail.value
    })
    this.init()
  },

  // 结束日期
  bindDateChangeEnd(e) {
    this.setData({
      dateEnd: e.detail.value
    })
    this.init()
  },

  goDesc(e) {
    let v = e.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/courseexamineinfo/courseexamineinfo?id=' + v.id + '&stepid=' + v.stepid,
    })
  },

  zhuangtaiChange(e) {
    console.log(e,'status')
    this.setData({
      zhuangtaiIndex: e.detail.value
    })
    this.init()
  },

  async init() {
    let params = {
      status: this.data.zhuangtaiIndex ,
      startTime: this.data.dateStart,
      endTime: this.data.dateEnd
    }

    if (this.data.dateEnd) {
      params.endTime = this.data.dateEnd
    }

    // if (this.data.zhuangtaiIndex == 0) {
    //   params.status = '2'
    // } 
    // if (this.data.zhuangtaiIndex == 1) {
    //   params.status = '0'
    // } 
    // if (this.data.zhuangtaiIndex == -1) {
    //   params.status = ''
    // } 

    let res = await courseexamine(params)
    this.setData({
      list: res.data.showData
    })
    console.log(res,'调课审批列表')
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
    console.log(v.currYearTermStartDay,typeof v.currYearTermEndDay)
    this.setData({
      zhuangtaiIndex: 0,
      limitStart: v.currYearTermStartDay,
      // dateStart:  v.currYearTermStartDay,
      // dateEnd: v.currYearTermEndDay,
      limitEnd: v.currYearTermEndDay,
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