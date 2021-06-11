/*
 * @Descripttion: 
 * @version: 
 * @Author: yanghui
 * @Date: 2020-10-21 17:46:38
 * @LastEditors: yanghui
 * @LastEditTime: 2020-10-21 18:50:39
 */
// pages/aboutus/index.js
const {
  concatUs,
} = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '优慕课在线教育科技(北京)有限责任公司是国家高新技术企业，公司于2014年底由原清华大学教育技术研究所数字化学习研究与应用中心改制成立 ，“清华教育在线”系列科研成果和技术支持团队转入公司。目前公司已经拥有多项自主知识产权软件产品。公司团队已历经18年数字化学习平台和教学管理系统的研究、设计、开发、应用、评价历程，参与500余所院校教育信息化项目建设,对促进院校教学改革起到了重要推动作用。'
  },

  async init() {
    let params = {

    } 
    let res = await concatUs(params)
    if (res.code === 1) {
      this.setData({
        info: res.data.content
      })
    }
    console.log(res,'关于我们')
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