// 工具函数库

const host='http://127.0.0.1:3000/api/'
export function request(url, method, data, header = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            data,
            method,
            header,
            url: host + url,
            success: function (res) {
                if (res.data.code === 0) {
                    resolve(res.data.data)
                    if(res.data.data.msg){
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
    return new Promise((resolve,reject)=>{
        wx.login({
            success (res) {
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



