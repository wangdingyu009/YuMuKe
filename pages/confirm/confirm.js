// pages/confirm/confirm.js  confirmOrRefuse
const {
  confirmOrRefuse
} = require('../../utils/api') // 教室审批
const {
  approvalOfCourseTransfer
} = require('../../utils/api') // 调课审批
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '', // 审批意见
    type: '', // 值为TKSP 调课审批，默认和值为JSSP 教室审批
    borrowId: '', // 教室审批 id
    stepId: '', // 调课审批步骤Id
    id: '', // 调课申请id
  },

  // 文本域
  onChangeInputing(e) {
    this.setData({
      content: e.detail.value
    })
  },

  async submit() {
    let params = null
    let res = null
    switch (this.data.type) {
      case 'TKSP': // 调课审批，确认审批页面
        params = {
          id: this.data.id,
          stepId: this.data.stepId,
          remark: this.data.content,
          approval: 'Y'
        }
        res = await approvalOfCourseTransfer(params)
        break;
      case 'JSSP': // 教室审批，确认审批页面
        params = {
          borrowId: this.data.borrowId,
          approvalRemark: this.data.content,
          approval: 'Y'
        }
        res = await confirmOrRefuse(params)
        break;
      default: // 教室审批，确认审批页面
        params = {
          borrowId: this.data.borrowId,
          approvalRemark: this.data.content,
          approval: 'Y'
        }
        res = await confirmOrRefuse(params)
        break;
    }
    console.log(res, '确认')
    if (res.code == 1) {
      wx.lin.showToast({
        title: '提交成功~',
        icon: 'success',
        success: (res) => {
          wx.navigateBack({
            delta: 1
          })
        }
      })
    } else {
      wx.lin.showToast({
        title: '审批失败，请稍后重试~',
        icon: 'warning',
        success: (res) => {}
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, '确认')
    switch (options.type) {
      case 'TKSP': // 调课审批，确认审批页面
        this.setData({
          id: options.id,
          stepId: options.stepId,
          type: options.type,
        })
        break;
      case 'JSSP': // 教室审批，确认审批页面
        this.setData({
          borrowId: options.borrowId,
          type: options.type,
        })
        break;
      default: // 教室审批，确认审批页面
        this.setData({
          borrowId: options.borrowId,
          type: options.type,
        })
        break;
    }
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