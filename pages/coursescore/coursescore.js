// pages/coursescore/coursescore.js
const { courseScore, dropDown } = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectVal: '', // 下拉框选中的值
    index: 0, // 顶部下拉框的索引值
    currentIndex: -1, // 点击标题栏的索引
    array: [], // 底部弹出框
    list: [], // 分数详情
    currentPage: 1,
    total: 0,
    bottomShow: false
  },

  // 点击标题栏触发，英语 89
  titleColumn(e) {
    console.log(e,'item')
    let index = e.currentTarget.dataset.index
    if (this.data.currentIndex === index) {
      this.setData({
        currentIndex: -1
      })
      return
    }
    console.log(index,'index')
    this.setData({
      currentIndex: index
    })
  },
// 点击下拉框触发
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      selectVal: this.data.array[e.detail.value].showKey,
      currentPage: 1,
      total: 0,
      list: [],
      bottomShow: false
    })
    this.init()
    console.log(this.data.selectVal,'selectval')
  },

  async init() {
    let params = {
      queryYearTerm: this.data.selectVal ? this.data.selectVal : '',
      pageSize: 20,
      currentPage: this.data.currentPage
    }
    if (this.data.selectVal) {
      params.queryYearTerm = this.data.selectVal
    }
    wx.showLoading({
      title: '加载中...',
      icon: 'loading'
    })
    let res = await courseScore(params)
    console.log(res,'课程成绩列表')
    if (res.code === 1) {
      let v = res.data.showData
      this.setData({
        list: this.data.list.concat(v),
        total: res.data.page.totalPage
      })
      wx.hideLoading()
    }
  },
  // 下拉框列表的数据
  async dropDownData() {
    let params = {}
    let arr = [{showKey: '', name: '全部'}]
    let res = await dropDown(params)
    console.log(res,'下拉框')
    res.data.forEach(el => {
      arr.push({
				name: el.showVal,
				showKey: el.showKey,
				status: el.status
      })
    })
    this.setData({
      array: arr
    })
    console.log(this.data.array,'this.data.array')
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
    this.dropDownData()
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
    if (this.data.currentPage >= this.data.total) {
      if (this.data.list.length > 12) {
        this.setData({
          bottomShow: true
        })
      }
      return
    } else {
      this.setData({
        currentPage: this.data.currentPage + 1
      })
    }
    this.init()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})