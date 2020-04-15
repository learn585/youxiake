<template>
	<div class="list">
		<div class="city-item">
			<p>定位/附近城市</p>
			<div @click="toHome(item.name)" v-for="(item,index) in mapCities" :key="index">{{item.name}}</div>			
		</div>
		<div class="city-item">
			<p>已开通周边游站点</p>
			<div @click="toHome(item.name)" v-for="(item,index) in cities" :key="index">{{item.name}}</div>			
		</div>
		<div class="city-item">
			<p>热门玩乐城市</p>
			<div @click="toHome(item.name)" v-for="(item,index) in hotCities" :key="index">{{item.name}}</div>			
		</div>
	</div>
</template>

<script>
	// 引入vuex中改变值得方法
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				mapCities:[],
				cities:[],
				hotCities:[]
			}
		}, 
		// 请求数据
		mounted(){
			let That = this;
			this.axios.get("http://localhost:8080/data/city.json").then((res)=>{
				let data = res.data.data; 
				That.mapCities = data.mapCities;
				That.cities = data.cities;
				That.hotCities = data.hotCities;
			})
		},
		methods:{ 
			toHome(city){
				this.changeCity(city)
				this.$router.push({
					path:"/"
				})
			},
			...mapMutations(['changeCity'])
			
		}
	}
</script>

<style scoped="scoped">
.city-item{
	margin-top: .3rem;
	padding-left: .4rem;
	color: #999;
	font-size: .45rem;
}
.city-item p{
	padding:.3rem 0;
}
.city-item div{
	display: inline-block;
	width: 2rem;
	height: .82rem;
	line-height: .82rem;
	border: 1px solid #ccc;
	border-radius: .2rem;
	text-align: center;
	margin-right: .4rem;
	box-sizing: border-box;
	margin-bottom: .2rem;
}

</style>
