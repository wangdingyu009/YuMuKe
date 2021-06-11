// pages/accountlogin/accountlogin.js
const {
  getCodeByWeixin,
  login
} = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 课程成绩，测试号:ws2lj7r3fz  xzh7wakhb2
    // 课程课表  教师:nj3w80tejr  学生:ws2lj7r3fz
    // 监考任务 测试号:ip76iqs0px
    // 等级考试 rme7hxdcju
    // 教室时间测试号: ws2lj7r3fz  hbjljh1uey 清华维护   4kpfd429wc  教务处长
    // 综合审查 c47u3fjv2t
    // 代课任务:tehprcicxt
    // 教学任务 3o02ah9vdr  bilt07tyya  xp8j3nu7xx
    // 密码 gK7aILZsMhWT6C3ImdsC
    // 新的账号密码 0019960310
    // 0020080830
    // 2017310213
    // weirong wangyan
    
    mobile: 'wangyan',
    password: 'wangyan',
    isAllowLogin: true,
    isAllowWechatLogin: true,
    accountDisable: false,
    wechatDisable: false,
  },
  telChange(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  pswChange(e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 微信登录
  goLoginWechat() {
    this.setData({
      wechatDisable: true,
      isAllowLogin: false
    })
    if (!this.data.isAllowWechatLogin) {
      return
    }
    wx.login({
      success: async (r) => {
        let params = {
          code: r.code
        }
        let res = await login(params)
        if (res.code === 1) {
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('permission', res.data.userBusiPermission)
          wx.setStorageSync('roles', res.data.userRoles)
          wx.setStorageSync('userInfo', res.data)
          
          wx.lin.showToast({
            title: '登录成功~',
            icon: 'success',
            success: res => {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
          
        } else {
          this.setData({
            wechatDisable: false,
            accountDisable: false,
            isAllowLogin: true,
            isAllowWechatLogin: true
          })
          wx.lin.showToast({
            title: res.message,
            icon: 'warning',
          })
        }
      }
    })
  },
  // 点击登录
 goLogin() {
   this.setData({
    accountDisable: true,
    isAllowWechatLogin: false
   })
   if (!this.data.isAllowLogin) {return}
   if (!this.data.mobile) {
    wx.lin.showToast({
      title: '账号不能为空',
      icon: 'warning',
    })
    return
   }
   if (!this.data.password) {
    wx.lin.showToast({
      title: '密码不能为空',
      icon: 'warning',
    })
    return
   }
    wx.login({
      success: async (res1) => {
        let params = {
          userName: this.data.mobile,
          password: this.data.password,
          code: res1.code
        }
        let res11 = await login(params)
        if (res11.code === 1) {
          wx.setStorageSync('token', res11.data.token)
          wx.setStorageSync('permission', res11.data.userBusiPermission)
          wx.setStorageSync('roles', res11.data.userRoles)
          wx.setStorageSync('userInfo', res11.data)
          
          wx.lin.showToast({
            title: '登录成功~',
            icon: 'success',
            success: res => {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
          
        } else {
          this.setData({
            wechatDisable: false,
            accountDisable: false,
            isAllowLogin: true,
            isAllowWechatLogin: true
          })
          wx.lin.showToast({
            title: res11.message,
            icon: 'warning',
          })
        }
      }
    })
  },

  // 是否已经绑定了微信号 如果已经绑定了微信号那么就不用走账号登录了 直接进首页
  isBindWechat() {
    wx.login({
      success: async (res) => {
        let params = {
          code: res.code
        }
        let res1 = await login(params)
      }
    })
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
    wx.hideHomeButton()
    // let v = wx.getStorageSync('token')
    // if (v) {
    //   wx.switchTab({
    //     url: '/pages/index/index',
    //   })
    // }
    // this.isBindWechat()
    this.setData({
      isAllowLogin: true,
      isAllowWechatLogin: true,
      accountDisable: false,
      wechatDisable: false,
    })
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