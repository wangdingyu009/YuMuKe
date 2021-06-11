// pages/courseexamination/courseexamination.js
const {
  courseExam
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFixedTitle: false, // 顶部标题是否显示 
    fixedTitle: '',
    selectDate: '开始时间',
    startTime: '',
    selectDate1: '结束时间',
    endTime: '',
    list: [],
    listHeight: [], // 包含每一个子项的总高度 用来计算固定在头部的标题显示什么
    currentPage: 1,
    pageSize: 10
  },

  // 监听页面滚动距离

  onPageScroll(e) {
    this.setData({
      isFixedTitle: true
    })
    // list[0][0].examdate + ' ' + list[0][0].week
    // 日期标题 51 + (多个列表数据每一个136) + 8（上边框）
    let v = e.scrollTop
    for (var i = 0; i < this.data.listHeight.length; i++) {
      let height1 = this.data.listHeight[i]
      let height2 = this.data.listHeight[i + 1]
      if (v < 0 ) {
        this.setData({
          fixedTitle: this.data.list[0][0].examday + ' ' + this.data.list[0][0].week
        })
      }
      if (v >= height1 && v <= height2) {
        this.setData({
          fixedTitle: this.data.list[i][0].examday + ' ' + this.data.list[i][0].week
        })
      }
    }
  },


// 开始时间
  bindPickerChange(e) {
    console.log(e, '选中开始日期')
    this.setData({
      selectDate: e.detail.value,
      startTime: e.detail.value
    })
    this.init()
  },

  // 结束时间
  bindPickerChange1(e) {
    console.log(e, '选中结束日期')
    this.setData({
      selectDate1: e.detail.value,
      endTime: e.detail.value
    })
    this.init()
  },

  async init() {
    let params = {
      startTime: this.data.startTime,
      endTime: this.data.endTime,
      currentPage: this.data.currentPage,
      pageSize: this.data.pageSize
    }
    let res = await courseExam(params)
    let arr = res.data.list
    console.log(res, '课程考试列表', this.sortClass(arr))
    let v = this.sortClass(arr)
    let height = 0
    let listHeight = []
    listHeight.push(height)
    for (var i = 0 ; i < v.length; i++) {
      height += 59 + v[i].length * 136
      listHeight.push(height)
    }
    console.log(listHeight,'get listHeight')
    
    this.setData({
      list: this.sortClass(arr),
      listHeight: listHeight
    })

  },

  // 将数组中相同的元素进行分组
  sortClass(sortData) {
    let groupBy = (array, f) => {
      let groups = {}
      array.forEach((o) => {
        let group = JSON.stringify(f(o))
        groups[group] = groups[group] || []
        groups[group].push(o)
      })
      return Object.keys(groups).map((group) => {
        return groups[group]
      })
    }
    let sorted = groupBy(sortData, (item) => {
      return item.examday // 返回需要分组的对象
    })
    return sorted
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
      isFixedTitle: false
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