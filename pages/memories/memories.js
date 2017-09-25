// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      countries: [
          '中国',
          '泰国',
          '日本'
      ],
      pick: '09:00',

      items: [
          {
              name: "中国",
              value: "CN"
          },
          {
              name: "泰国",
              value: "TH"
          },
          {
              name: "日本",
              value: "JP"
          }
      ],

      nodes: [
          {
              name: 'img',
              attrs: {
                  class: 'image',
                  src: '/assets/images/demo-1.jpg'
              }
          },
          {
              name: 'h3',
              attrs: {
                  class: 'header'
              },
              children: [
                  {
                      type: 'text',
                      text: 'hello ~'
                  }
              ]
          }
      ],
      currentView: 'red',
      images: [
          "/assets/images/demo-1.jpg",
          "/assets/images/demo-2.jpg",
          "/assets/images/demo-3.jpg"
      ]
  },

  play(event){
      console.log(event);
  },

  pause(event){
      console.log(event);
  },

  ended(event){
      console.log(event);
  },


  formSubmit(event){
      console.log(event.detail.value);
  },

  inputHandler(event){
      this.setData({
          pick: event.detail.value
      });
      console.log(event.detail.value);
  },

  setScrollView(event) {
      this.setData({
          currentView: event.target.dataset.view
      })
  },

  tapHandler(event) {
      console.log(event);
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
