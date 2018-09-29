// pages/question/question.js
let app = getApp();
let hostname = app.hostname;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        qlist: [],
        page: 1
    },
    question: function (obj) {
        console.log(obj);
        wx.navigateTo({
            url: '/pages/question/question?qid=' + obj.currentTarget.dataset.qid
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        //加载试题数据
        wx.request({
            url: hostname + '/wx/qlist',
            method: 'GET',
            success: function (res) {
                let data = res.data;
                _this.setData({
                    qlist: data.questions
                });
                console.log(data);
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
        console.log('加载更多数据');
        let _this = this;
        //加载试题数据
        //当前正在加载数据---模态框
        wx.showToast({
            title: '数据加载中...',
            icon: 'loading',
            mask: true,
            duration: 2000
        }
        )
        wx.request({
            url: hostname + '/wx/qlist',
            method: 'GET',
            data: { page: _this.data.page * 1 + 1 },
            success: function (res) {
                let data = res.data;
                let qlist = _this.data.qlist.concat(data.questions);
                //判断有没有超过50条
                if (qlist.length > 50) {
                    qlist.splice(0, qlist.length - 50);
                }
                _this.setData({
                    qlist: qlist,
                    page: data.page
                });
                //隐藏提示框
                // wx.hideToast();
            }
        })

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})