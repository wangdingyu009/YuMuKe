// pages/courseexamineinfo/courseexamineinfo.js
const {
  courseexamineDesc
} = require('../../utils/api')
const { BASE_URL } = require('../../utils/config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    stepId: '',
    epid: '',
    desc: {},
    zipUrl: '',
    hiddenmodalput: true
  },

  // 确认按钮
  goConfirm() {
    wx.navigateTo({
      url: '/pages/confirm/confirm?id=' + this.data.id + '&stepId=' + this.data.stepId + '&type=TKSP',
    })
  },

  // 拒绝按钮
  goRefuse() {
    wx.navigateTo({
      url: '/pages/refuse/refuse?id=' + this.data.id + '&stepId=' + this.data.stepId + '&type=TKSP',
    })
  },

  // 查看合班
  viewInfo() {
    wx.navigateTo({
      url: '/pages/viewinclass/viewinclass?epid=' + this.data.id + '&tiaokeshenpi=tiaokeshenpi',
    })
  },

  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },

  confirmM: function (e) {
    wx.setClipboardData({
      data: this.data.zipUrl,
      success: function (res) {

      }

    })
    this.setData({
      hiddenmodalput: true
    })
  },

  downLoad(e) {
    let v = e.currentTarget.dataset.item
    let arr = v.fileName.split('.')
    if (arr[arr.length - 1] === 'zip' || arr[arr.length - 1] === 'ZIP') {
      this.setData({
        zipUrl: BASE_URL + v.fileURL,
        hiddenmodalput: false
      })
      return
    }
    // if (arr[arr.length - 1] !== 'txt') {
    wx.showLoading({
      title: '加载中',
    })
    // }
    wx.downloadFile({
      url: BASE_URL + v.fileURL, //仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          if (arr[arr.length - 1] === 'doc' || arr[arr.length - 1] === 'docx' || arr[arr.length - 1] === 'xls' || arr[arr.length - 1] === 'xlsx' || arr[arr.length - 1] === 'ppt' || arr[arr.length - 1] === 'pptx' || arr[arr.length - 1] === 'pdf') {
            wx.openDocument({ //一般采用这个打开 但是不支持txt所以我换了一种
              filePath: res.tempFilePath,
              fileType: arr[arr.length - 1],
              success: (res) => {
                wx.hideLoading()
              },
              fail: (err) => {
              }
            })
          } else if (arr[arr.length - 1] === 'jpg' || arr[arr.length - 1] === 'png') {
            wx.hideLoading()
            wx.previewImage({
              current: res.tempFilePath, // 当前显示图片的http链接  
              urls: [res.tempFilePath] // 需要预览的图片http链接列表  
            })
          } else if (arr[arr.length - 1] === 'txt') {
            wx.hideLoading()
            wx.navigateTo({
              url: '/pages/readfile/readfile?a=' + res.tempFilePath, //跳转页面显示
            })
          } else {

          }
        } else {
          wx.showToast({
            title: '下载失败，请稍后重试',
            icon: 'none'
          })
        }
      }
    })
  },

  // 初始化列表
  async init() {
    let params = {
      id: this.data.id,
      stepId: this.data.stepId
    }
    let res = await courseexamineDesc(params)
    console.log(res, '调课审批详情')
    this.setData({
      desc: res.data
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      stepId: options.stepid
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