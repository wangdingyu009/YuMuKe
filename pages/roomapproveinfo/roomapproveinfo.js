// pages/roomapproveinfo/roomapproveinfo.js
const {
  roomCheckInfo
} = require('../../utils/api')
const {
  BASE_URL
} = require('../../utils/config')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    borrowId: '',
    roomapproveinfo: {},
    borrowRoomInfoList:[],
    zipUrl: '',
    hiddenmodalput: true
  },
  
  // 确认按钮
  goConfirm() {
    wx.navigateTo({
      url: '/pages/confirm/confirm?borrowId=' + this.data.borrowId + '&type=JSSP',
    })
  },

  // 拒绝按钮
  goRefuse() {
    wx.navigateTo({
      url: '/pages/refuse/refuse?borrowId=' + this.data.borrowId+ '&type=JSSP',
    })
  },

  
  downLoad(e) {
    console.log(e);
    
    var v = e.currentTarget.dataset.item
    let arr = v.fileName.split('.')
    if (v.fileType === 'zip' || v.fileType === 'ZIP') {
      this.setData({
        zipUrl: BASE_URL + v.fileUrl,
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
      url: BASE_URL + v.fileUrl, //仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          if (v.fileType === 'doc' || v.fileType === 'docx' || v.fileType === 'xls' || v.fileType === 'xlsx' || v.fileType === 'ppt' || v.fileType === 'pptx' || v.fileType === 'pdf') {
            wx.openDocument({ //一般采用这个打开 但是不支持txt所以我换了一种
              filePath: res.tempFilePath,
              fileType: String(v.fileType),
              success: (res) => {
                wx.hideLoading()
              },
              fail: (err) => {}
            })
          } else if (v.fileType === 'jpg' || v.fileType === 'png') {
            wx.hideLoading()
            wx.previewImage({
              current: res.tempFilePath, // 当前显示图片的http链接  
              urls: [res.tempFilePath] // 需要预览的图片http链接列表  
            })
          } else if (v.fileType === 'txt') {
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
      borrowId: this.data.borrowId
    }
    let res = await roomCheckInfo(params)
    console.log(res, 'roomCheckInfooooooooooo')
    this.setData({
      roomapproveinfo: res.data,
      borrowRoomInfoList: res.data.borrowRoomInfoList || []
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 'roomapplyinfo')
    this.setData({
      borrowId: options.borrowid,
      // statusval: options.reviewStatus // 审批状态
      statusval: options.statusval
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