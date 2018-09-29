// pages/question/question.js
let app = getApp();
let hostname = app.hostname;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        qinfo:{},
        ifshow:false,
        qid:0
    },
    showAnswer:function(){
        this.setData({ifshow:!this.data.ifshow});
    },
    /**
     * 生命周期函数--监听页面加载
     */
    doit:function(obj){
        let _this = this;
        console.log(obj);
        //提交数据到服务器
        //把qid追加到提交的数据里面
        obj.detail.value.qid = _this.data.qid;
        wx.request({
            url: hostname + '/wx/doit',
            data:obj.detail.value,
            method:'POST',
            success:function(res){
                console.log(res.data);
            }
        })
    },
    onLoad: function (options) {
        //加载试题数据
        let _this = this;
        console.log(options);
        //获取当前试题的qid  options = {qid:20} 赋值给data里面的qid
        _this.setData(options);
        // _this.setData({qid:20});

        wx.request({
            url: hostname + '/wx/qinfo',
            data: options,
            method: 'GET',
            success: function (res) {
                console.log(res.data);
                _this.setData({
                    qinfo: res.data
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