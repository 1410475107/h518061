// pages/my/my.js
let app = getApp();  //小程序提供的获取App对象接口


Page({

    /**
     * 页面的初始数据
     */
    data: {
        myname: '李强',
        add:'科华北路17号',
        hostname: app.hostname
    },
    clickme: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    },
    changeAdd: function () {
        this.setData({
            add:'科华北路99#',
            myname:'任敏'
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(app.globalData.students[2]);
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
        //让当前页面只能下拉刷新一次
        wx.stopPullDownRefresh({});
        console.log('下拉刷新，到服务器重新加载数据');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log('到服务器加载数据---懒加载');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (obj) {
        console.log(obj);
    },
    onPageScroll:function(event){
        console.log(event);
    }
})