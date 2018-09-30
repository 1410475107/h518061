// pages/person/person.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        qlist: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //this指向可能会被改变
        let _this = this;
        //和服务器通信  wx.request   fs.readFile    document.getElementById
        wx.request({
            url: 'http://lulaoshi:81/wx/getmylist',
            method: 'GET',
            data: { openid: wx.getStorageSync('openid') },
            success: function (res) {
                console.log(res);
                _this.setData({
                    qlist: res.data.questions
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