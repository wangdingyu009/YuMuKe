// pages/timetable/timetable.js
const { getWeek, roomTime } = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftIndex: [
      {name: 1},
      {name: 2},
      {name: 3},
      {name: 4},
      {name: 5},
      {name: 6},
      {name: 7},
      {name: 8},
      {name: 9},
      {name: 10},
      {name: 11},
      {name: 12},
      {name: 13},
      {name: 14},
    ], // 左边索引1-14
    array: [
      {
        name: '全部'
      },
      {
        name: '2020年春季'
      },
      {
        name: '2020年夏季'
      },
      {
        name: '2020年秋季'
      },
      {
        name: '2020年冬季'
      },
    ], // 底部弹出框
    itemWidth: 125,
    list: [], // 列表
    jiaoxuelouId: null, // 教学楼id
    zhou: '', // 第一周 第二周 第三周.....
    whichWeek: '', // 第几周
    selectRoom: '选择教室', // 教室的名称
    roomId: '', // 教室id
    dateList: [], // 周一-周日的具体日期
  },

  // 点击下拉框 跳转
  searchDetail() {
    wx.navigateTo({
      url: '/pages/roomselect/roomselect?type=w&BId=' + this.data.jiaoxuelouId,
    })
  },

  async init() {
    let params = {
      queryType: 0,
      // queryDate: this.data.dates,
      whichWeek: parseInt(this.data.whichWeek),
      bId: parseInt(this.data.jiaoxuelouId),
      roomId: this.data.roomId
    }
    let res = await roomTime(params)
    if (res.code === 1) {
      this.setData({
        roomId: res.data.roomList[0].rid,
        selectRoom: res.data.roomList[0].rname,
        list: res.data.roomList[0].roomSchedule,
        dateList: res.data.dateList
      })
    }

  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      jiaoxuelouId: options.jiaoxuelouId,
      whichWeek: options.whichWeek,
      zhou: options.zhou
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