/*
 * @Description: login
 * @Version: 2.0
 * @Autor: yanghui
 * @Date: 2020-07-22 14:13:15
 * @LastEditors: yanghui
 * @LastEditTime: 2020-08-08 11:26:13
 */ 

//app.js
// 安装扩展组件的方法 npm i @miniprogram-component-plus/tabs --save
// 引入扩展组件 "usingComponents": {"mp-tabs": "@miniprogram-component-plus/tabs"} @miniprogram-component-plus这个名字看根目录下是什么名字
// 引入组件的方法 "usingComponents": {"mp-dialog": "weui-miniprogram/dialog/dialog",}
// const {
//   closeWechat
// } = require('./utils/api')
import { login } from './utils/api'
App({
  onLaunch: function () {
    console.log('展示本地存储能力')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // if (!wx.getStorageSync('token')) {
    //   console.log('token不存在')
    //   wx.navigateTo({
    //     url: '/pages/accountlogin/accountlogin',
    //   })
    //   return
    // }
    // wx.reLaunch({
    //   url: '/pages/index/index',
    // })
  },

  onHide: async () => {
    console.log('onhide 切换后台的时候触发')
    // let params = {}
    // let res = closeWechat(params)
    // if (res.code == 1) {
    //   wx.clearStorageSync()
    // } else {
    //   wx.clearStorageSync()
    // }
  },

  // wx.getStorageSync('key')
  globalData: {
    userInfo: null,
    uid: wx.getStorageSync('uid'),
  }
})