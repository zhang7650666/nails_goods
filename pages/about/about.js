const app = getApp()
// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"我是关于我们页面"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载完成')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('初次加载渲染')
    wx.hideNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('后台进入前台')
    wx.setNavigationBarTitle({
      title: "关于我们"
    })
    wx.showNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('前台进入后台')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    conosle.log('页面关闭')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    consoel.log('滑动到底部加载下已页')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log('分享功能')
   return{
     titile:"我是分享页"
   }
  },
  change(){
    this.setData({
      msg:"点击之后改变了"
    })
  }
})

