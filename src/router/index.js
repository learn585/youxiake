import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入Home
import Home from '../components/home/Home.vue'
  const routes = [
	{
		path: '/',
		name: 'home', 
		component: Home
	},
  {
    path: '/city',
    name: 'city',
    component: () => import('../components/city/City.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../components/detail/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
