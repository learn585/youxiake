import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入css初始化样式  reset.css ==> 重置样式
import './assets/css/reset.css'
//fastClick  ==> 解决click事件在移动端300ms延迟的问题
import FastClick from 'fastclick'
FastClick.attach(document.body)
//引入字体图标
import './assets/css/iconfont.css'
//引入适配font.js文件
import './assets/js/font.js'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//引入swiper的css样式
import './assets/css/swiper.css'
//引入动画库animate.css
import animate from 'animate.css'
//引入axios
import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
