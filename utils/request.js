/*
 * @Description: request
 * @Version: 2.0
 * @Autor: yanghui
 * @Date: 2020-07-22 15:32:53
 * @LastEditors: yanghui
 * @LastEditTime: 2020-07-25 11:13:08
 */ 
import { BASE_URL } from './config'
const request = (url, data = {}, method = 'GET') => {
	return new Promise((resolve, reject) => {
		// if (!wx.getStorageSync('token')) {
		// 	wx.redirectTo({
		// 		url: '/pages/accountlogin/accountlogin',
		// 	})
		// 	return
		// }
		try {
			wx.request({
				method,
				url: BASE_URL + url,
				timeout: 155000,
				dataType: 'json',
				data: data,
				header: {
					// 'content-type': 'application/json;charset=utf-8', // 默认值
					'content-type': 'application/x-www-form-urlencoded',
					'X-Umooc-Token': wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
				},
				success(res) {
					resolve(res.data);
				},
				fail(res) {
					resolve({
						code: 500,
						message: res.message,
						data: ''
					});
				}
			});
		} catch (error) {
			resolve({
				code: 500,
				message: error.message,
				data: ''
			});
			// 异常处理
		}
	});
};
const request1 = (url, data = {}, method = 'GET') => {
	return new Promise((resolve, reject) => {
		try {
			wx.request({
				method,
				url: BASE_URL + url,
				timeout: 30000,
				dataType: 'json',
				data: data,
				header: {
					// 'content-type': 'application/json;charset=utf-8', // 默认值
					'content-type': 'application/x-www-form-urlencoded',
					'X-Umooc-Token': wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
				},
				success(res) {
					resolve(res.data);
				},
				fail(res) {
					resolve({
						code: 500,
						message: res.message,
						data: ''
					});
				}
			});
		} catch (error) {
			resolve({
				code: 500,
				message: error.message,
				data: ''
			});
			// 异常处理
		}
	});
};



module.exports = {
	request,
	request1
};
