// pages/request/request.js
let app = getApp();
let hostname = app.hostname;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        students: [],
        imgsrc:'/image/icon64_appwx_logo.png'
    },
    gotoC:function(){
        wx.switchTab({
            url:'/pages/index/index'
        });
    },

    searchStudents: function (obj) {
        console.log(obj);
        let _this = this;
        // let keywords = obj.detail.value;
        wx.request({
            url: hostname + '/search',
            data: obj.detail.value,
            method: 'POST',
            // header:{'content-type':'application/x-www-form-urlencoded'},
            success: function (data) {
                console.log(data);
                _this.setData({
                    students: data.data
                });
            }
        })
    },

    uploadImg:function(){
        let _this = this;
        wx.chooseImage({
            success(res) {
                const tempFilePaths = res.tempFilePaths
                wx.uploadFile({
                    url: hostname + '/uploads', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'images',
                    formData: {
                        'user': 'test'
                    },
                    success(res) {
                        //发起request请求
                        const data = JSON.parse(res.data);
                        console.log(data);
                        _this.setData({
                            imgsrc:data.data[0]
                        });
                    }
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        //到服务器拿数据
        wx.request({
            url: hostname + '/getstudents',
            success: function (data) {
                console.log(data);
                _this.setData({
                    students: data.data
                });
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