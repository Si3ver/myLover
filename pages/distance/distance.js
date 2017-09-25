// pages/distance/distance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
        {
            id: 0,
            longitude: 116.3577700000,
            latitude: 39.9615800000,
            iconPath: '/assets/icons/pin.png',
            width: 22,
            height: 40,
            callout: {
                content: '小明',
                fontSize: 14,
                color: '#000',
                padding: 8,
                bgColor: '#ffffff',
                borderRadius: 4,
                boxShadow: '4px 8px 16px 0 rgba(0, 0, 0, 0.18)'
            }
        },
        {
            id: 1,
            longitude: 113.3707200000,
            latitude: 23.0407300000,
            iconPath: '/assets/icons/pin.png',
            width: 22,
            height: 40,
            callout: {
                content: '小珍',
                fontSize: 14,
                color: '#000',
                padding: 8,
                bgColor: '#ffffff',
                borderRadius: 4,
                boxShadow: '4px 8px 16px 0 rgba(0, 0, 0, 0.18)'
            }
        }
    ],

    left_seperate_days: 0
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
