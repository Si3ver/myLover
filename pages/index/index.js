import helper from '../../libs/helper/helper.js';
const app = getApp();

Page({
    data: {
        greeting: ''
    },
    greet(greeting) {
        return greeting[Math.floor(Math.random() * greeting.length)];
    },
    tapGreeting(event) {
        console.log(event);
        this.setData({
            greeting: helper.randItem(app.globalData.greeting)
        });
    },
    onLoad() {
        console.log('页面加载');
        this.setData({
            greeting: helper.randItem(app.globalData.greeting)
        });
    },
    onShow() {
        console.log('页面显示');
    },
    onReady() {
        console.log('页面首次渲染完成');
    },
    onHide() {
        console.log('页面隐藏');
    },
    onUnLoad() {
        console.log('页面卸载');
    },
    onPullDownRefresh() {
        console.log('页面下拉刷新');
    },
    onReachBottom() {
        console.log('页面到底儿了');
    },
    onPageScroll(calculations) {
        console.log(calculations);
    }
})
