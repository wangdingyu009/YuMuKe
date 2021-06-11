// pages/readfile/readfile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let fs=wx.getFileSystemManager()//文件系统管理
    const w=this;
    fs.readFile({//读取文件
      filePath:options.a,//这是传过来的本地路径
      encoding:"utf-8",
      complete(res){
        console.log(res,'下载的附件')
        w.setData({
          text:res.data//这是data里面的text 然后在wxml页面{{text}}渲染
        })
      }
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