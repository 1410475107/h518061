//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        //最后检查有没有openid
        if (!wx.getStorageSync('openid')) {
            this.setData({
                hasUserInfo: false
            })
        }else{
            if (app.globalData.userInfo) {
                this.setData({
                    userInfo: app.globalData.userInfo,
                    hasUserInfo: true
                })
            } else if (this.data.canIUse) {
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                app.userInfoReadyCallback = res => {
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            }
        }
    },
    getUserInfo: function (e) {
        console.log(e)
        //如果用户拒绝
        if (e.detail.errMsg != "getUserInfo:ok") {
            wx.showModal({
                title: '操作错误',
                content: '授权失败，不能继续相关操作',
                showCancel:false
            })
            return;
        }

        //构建小程序用户体系
        wx.login({
            success:function(res){
                wx.request({
                    url: 'http://lulaoshi:81/wx/members',
                    method:'GET',
                    data:res,
                    success:function(res){
                        console.log(res.data.openid);
                        //保存openid到客户端
                        wx.setStorageSync('openid', res.data.openid);
                        //更新用户信息
                        app.globalData.userInfo = e.detail.userInfo;
                        this.setData({
                            userInfo: e.detail.userInfo,
                            hasUserInfo: true
                        });
                    }
                })
            }
        });
        
        
    }
})
