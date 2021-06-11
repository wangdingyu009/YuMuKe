/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-21 11:39:00
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-26 14:14:26
 */
// pages/schoolcalendar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: ["#5D88FF", "#FFAB5C", "#6CCB85", "#FF5D5D"],
    list: [{
        name: '上课',
        color: '#5D88FF',
        type: 1
      },
      {
        name: '代课',
        color: '#FFAB5C',
        type: 2
      },
      {
        name: '考试',
        color: '#6CCB85',
        type: 3
      },
      {
        name: '监考',
        color: '#FF5D5D',
        type: 4
      }
    ],
    week: [{
        name: 1
      },
      {
        name: 2
      },
      {
        name: 3
      },
      {
        name: 4
      },
      {
        name: 5
      },
      {
        name: 6
      }
    ],
    weekType: 'cn',
    speciallist: [],
    txtlist: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // mystatus: [1, null, 1, 1, 1, 1, 1, null, null, 1, 1, 1, 1, 1, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      speciallist: [{
          date: '2020-10-02',
          background: '#FFAEAE',
          text: '文字1',
          color: ''
        },
        {
          date: '2020-10-05',
          background: '#FFAEAE',
          text: '文字2'
        },
        {
          date: '2020-10-11',
          background: '#FFAEAE',
          text: '文字'
        },
        {
          date: '2020-10-12',
          background: '#FFAEAE',
          text: '文字'
        },
        {
          date: '2020-11-06',
          background: '#FFAEAE',
          text: '文字'
        },
      ],
    })
  },
  // 点击日期
  selectDate(e) {
    console.log(e, 'e')
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