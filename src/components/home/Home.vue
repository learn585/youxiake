<template>
	<div class="home">
		<Banner></Banner>
		<Icons></Icons>
		<Tabs></Tabs>
		<Scroll></Scroll>
		<Swiper></Swiper>
		<Spike :spikeList="spikeList"></Spike>
		<Likes :likeList="likeList"></Likes>
		<Footer></Footer>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	//导入Banner组件
	import Banner from './Banner.vue'
	//导入Icons组件
	import Icons from './Icons.vue'
	//导入Tabs组件
	import Tabs from './Tabs.vue'
	//导入Scroll组件
	import Scroll from './Scroll.vue'
	//导入Swiper组件
	import Swiper from './Swiper.vue'
	//导入Spike组件
	import Spike from './Spike.vue'
	//导入Like组件
	import Likes from './Likes.vue'
	//导入Footer组件
	import Footer from './Footer.vue'
	export default{
		//引入组件
		components:{
			// Banner组件
			Banner,
			//Icons组件
			Icons,
			//Tabs组件
			Tabs,
			//Scroll组件
			Scroll,
			//Swiper组件
			Swiper,
			//Spike组件
			Spike,
			//Likes组件
			Likes,
			//Footer组件
			Footer
		},
		data(){
			return{
				spikeList:[],
				likeList:[],
				// 原来城市名
				changeCity:''
			}
		},
		//vuex的使用
		computed:{
			...mapState(['cityName'])
		},
		methods:{
			http(){
				let That = this;
				this.axios.get("http://localhost:8080/data/dataHome.json").then((res)=>{
					let data = res.data.data;
					// 显示对应城市的数据
					data.forEach((item)=>{
						//判断是否是对应的城市
						if(item.city == That.cityName){
							// spike的数据
							That.spikeList = item.spikeList;
							//like的数据
							this.likeList = item.likeList;
						}
					})
					
				})
			}
		},
		mounted(){
			//原来城市名
			this.changeCity = this.cityName;
			this.http();
		},
		// 请求性能优化
		activated(){
			//如果两个城市名不同则请求一次数据
			if(this.changeCity!=this.cityName){
				this.http();
				this.changeCity=this.cityName;
			}
		}
	}
</script>

<style scoped="scoped">
	.home{
		overflow: hidden;
	}
</style>
