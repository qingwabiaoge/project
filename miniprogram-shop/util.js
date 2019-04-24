// 工具函数库

import config from './config'

export function request(url, method, data, header = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            data,
            method,
            header,
            url: config.host + '/api/' + url,
            success: function (res) {
                const data = res.data.data
                if (res.data.code === 0) {
                    for (let item in data) {
                        if (Array.isArray(data[item])) {
                            data[item].forEach(ite => {
                                    ite.image = ite.image ? config.host + ite.image : '';
                                    ite.icon = ite.image ? config.host + ite.icon : '';
                                    if (ite.children.length > 0) {
                                        ite.children.forEach(
                                            i => {
                                                i.image = i.image ? config.host + i.image : ''
                                                i.icon = i.icon ? config.host + i.icon : ''
                                            }
                                        )
                                    }
                                }
                            )
                        }
                    }


                    resolve(res.data.data)
                    if (res.data.data.msg) {
                        showModal('提交成功', res.data.data.msg)
                    }
                } else {
                    reject(res.data)
                    showModal('失败', res.data.data.msg)
                }
            }
        })
    })
}

// http get工具函数 获取数据
export function get(url, data) {
    return request(`${url}`, 'GET', data)
}

export function post(url, data) {
    return request(url, 'POST', data)
}

export function weixinGetUserInfo() {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            success: function (res) {
                resolve(res)
            }
        })
    })
}

export function weixinLogin() {
    return new Promise((resolve, reject) => {
        wx.login({
            success(res) {
                resolve(res)
            }
        })

    })
}

export function showModal(title, content) {
    wx.showModal({
        title,
        content,
        showCancel: false
    })
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success'
    })
}

export function addImageHttp(arr) {
    return arr.map(item => config.host + item.image)
}


