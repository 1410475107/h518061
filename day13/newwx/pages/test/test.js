// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        qlist: [],
        page: 1,
        stopdown: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //防止this指向被修改
        let _this = this;
        //加载试题数据  ajax思想  request是一个异步操作  需要在回调函数里面接收数据
        wx.request({
            url: 'http://lulaoshi:81/wx/qlist',
            success: function (res) {
                console.log(res);
                _this.setData({ qlist: res.data.questions });
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
        let _this = this;
        if (_this.data.stopdown) return;
        //显示一个提示信息
        wx.showToast({ title: '', icon: 'loading', mask: true })

        wx.request({
            url: 'http://lulaoshi:81/wx/qlist',
            method: 'GET',
            data: { page: _this.data.page * 1 + 1 },
            success: function (res) {
                let qlist = _this.data.qlist.concat(res.data.questions);
                //防止当前页面显示数据过多，造成客户端卡死
                qlist.length > 50 && qlist.splice(0, qlist.length - 50);
                _this.setData({
                    //解决触底刷新时历史数据被覆盖的问题
                    qlist: qlist
                    //修改当前页数
                    , page: res.data.page
                });
                //如果数据加载完成，就要停止 触底刷新
                !res.data.questions.length && _this.setData({
                    stopdown: true
                });
            }
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})