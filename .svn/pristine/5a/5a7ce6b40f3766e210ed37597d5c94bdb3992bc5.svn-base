// pages/messagedetial/index.js
const {
  messageDetail
} = require('../../utils/api')
const {
  BASE_URL
} = require('../../utils/config')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    type: null,
    detail: {}
  },

  // 下载附件
  downFile(e) {
    let v = e.currentTarget.dataset.name
    let arr = v.split('.')
    console.log(v, arr[arr.length - 1])
    // doc docx xls xlsx ppt pptx pdf

    wx.downloadFile({
      url: BASE_URL + e.currentTarget.dataset.url,
      success: function (res) { //下载成功是临时文件
        console.log(res, '下载的文件')
        if (arr[arr.length - 1] === 'doc' || arr[arr.length - 1] === 'docx' || arr[arr.length - 1] === 'xls' || arr[arr.length - 1] === 'xlsx' || arr[arr.length - 1] === 'ppt' || arr[arr.length - 1] === 'pptx' || arr[arr.length - 1] === 'pdf') {
          wx.openDocument({ //一般采用这个打开 但是不支持txt所以我换了一种
            filePath: res.tempFilePath,
            success: function (res) {
              console.log("打开成功") //doc, xls, ppt, pdf, docx, xlsx, pptx需要有相对应的软件，自动打开对应软件显示比如docx打开word
            }
          })
        } else {
          wx.navigateTo({
            url: '/pages/readfile/readfile?a=' + res.tempFilePath, //跳转页面显示
          })
        }
      }
    })
  },

  async init() {
    let params = {
      messageId: this.data.id,
      messageType: this.data.type
    }
    let res = await messageDetail(params)
    if (res.code === 1) {
      console.log(res, '消息类型详情页')
      this.setData({
        detail: res.data.message
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      type: options.type
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