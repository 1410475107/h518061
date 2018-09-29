// pages/students/students.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      students: ['邓坚',  '徐小杨' , '洪星'],
      students1: [{ name: '邓坚', age: 20 }, { name: '徐小杨', age: 18 }, { name: '洪星', age:19}],
      ifshow:true
  },
    hideme:function(){
        this.setData({
            ifshow:false
        });
    },
    clikeMe:function(e){
        console.log(e);
        console.log(e.currentTarget.dataset.id);

    },
    longclikeMe:function(){
        console.log(123);
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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