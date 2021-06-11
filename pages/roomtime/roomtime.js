// pages/roomtime/roomtime.js
const { xiaoqu } = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    findWay: ['日期','周次'],
    findWayIndex: 0,
    dates: '选择日期', //日期
    campus: [], // 校区
    campusId: '', //校区id
    campusIndex: 0, 
    week: ['第一周','第二周','第三周','第四周','第五周','第六周','第七周','第八周','第九周','第十周','第十一周','第十二周','第十三周','第十四周','第十五周','第十六周','第十七周','第十八周','第十九周','第二十周'], //周次
    weekIndex: 0,
    room: [], //教学楼
    roomId: '', // 教学楼id
    roomIndex: 0
  },

  // 确定
  submit() {
      if (String(this.data.findWayIndex) === '0') {
        // 教室时间 日期查询
        if (this.data.dates === '选择日期') {
          wx.showToast({
            title: '请选择日期',
            duration: 2000,
            icon: 'none'
          })
          return
        }
        wx.navigateTo({
          url: '/pages/roomdatequery/roomdatequery?dates=' + this.data.dates + '&jiaoxuelouid=' + this.data.roomId,
        })
      } else {
        // 教室时间 周次查询
        let v = Number(this.data.weekIndex) + 1
        wx.navigateTo({
          url: '/pages/roomweekquery/roomweekquery?whichWeek=' + v + '&jiaoxuelouId=' + this.data.roomId + '&zhou=' + this.data.week[this.data.weekIndex],
        })
      }
  },

  // 查询方式
  findWayChange(e) {
    this.setData({
      findWayIndex: e.detail.value,
      dates: '选择日期'
    })
  },

  // 日期
  dateChange(e) {
    this.setData({
      dates: e.detail.value
    })
  },

  // 周次
  weekChange(e) {
    this.setData({
      weekIndex: e.detail.value
    })
  },

  // 校区
  campusChange(e) {
    this.setData({
      campusIndex: e.detail.value,
      campusId: this.data.campus[e.detail.value].aid,
      room: this.data.campus[e.detail.value].resBuildingList,
      roomId: this.data.campus[e.detail.value].resBuildingList[0] ? this.data.campus[e.detail.value].resBuildingList[0].bid : '',
    })
  },

  // 教学楼
  roomChange(e) {
    this.setData({
      roomIndex: e.detail.value,
      roomId: this.data.room[e.detail.value].bid
    })
  },

  async init() {
    let params = {}
    let res = await xiaoqu(params)
    this.setData({
      campus: res.data.areaList,
      campusId: res.data.areaList[0].aid,
      room: res.data.areaList[0].resBuildingList,
      roomId: res.data.areaList[0].resBuildingList[0].bid,
    })
    console.log(res.data.areaList,'教室时间')
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
    this.init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      dates: '选择日期'
    })
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