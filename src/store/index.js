import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//本地存储设置默认值
let defaultCity = '北京';
//给本地存储存值  city 是设置的名字
defaultCity = localStorage.city;
export default new Vuex.Store({
  state: {
	cityName:defaultCity
  },
  mutations: {
	changeCity(state,city){
		state.cityName=city;
		//把改变的值存到本地存储
		localStorage.city = city
	}
  },
  actions: {
  },
  modules: {
  }
})
