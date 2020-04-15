<template>
	<!--header部分 -->
	<div class="banner"> 
		<transition 
				enter-active-class="bounceInLeft"
				leave-active-class="bounceOutLeft"
		>
			<div class="banner-left animated" v-show="toshow">侧边栏</div>
		</transition>
		<div class="banner-header">
			<div class="banner-top">
				<div class="top-left" @click="toCity">
					{{cityName}}
					<i class="iconfont">&#xe64a;</i>
				</div>
				<div class="top-search">
					<input type="text" placeholder="泰国"/>
				</div>
				<div class="top-right">
					<img src="@/assets/img/show.png" @click="toShow()">
				</div>
			</div>
			<div class="banner-swiper">
				<swiper :options="swiperOptions">
				<swiper-slide>
						<img src="@/assets/img/banner1.png" alt="">
					</swiper-slide>
				<swiper-slide>
						<img src="@/assets/img/banner2.png" alt="">
					</swiper-slide>
				<swiper-slide>
						<img src="@/assets/img/banner3.png" alt="">
					</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	//引入vuex
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				toshow:false,
				swiperOptions:{
					autoplay:true,
					loop:true,
					pagination: {
					el: '.swiper-pagination'
					}	
				}
			}
		},
		// vuex改变数据
		computed:{
			...mapState(['cityName'])
		},
		methods:{
			// 显示与隐藏
			toShow(){
				this.toshow=!this.toshow;
			},
			//跳转到City页面
			toCity(){
				this.$router.push({
					path:"/city"
				})
			}
	
		}
	}
</script>

<style scoped>
	.banner-header{
		background: red;
		width: 100%;
		height: 5.6rem;
		position: relative;
	}
	.banner-top{
		position: absolute;
		left: 0;
		top: .4rem;
		z-index: 2;
		height: .8rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.banner-left{
		position: absolute;
		left: 0;
		top:0;
		z-index: 888;
		background: #000;
		width: 6.66666rem;
		height: 100%;
		color: #fff;
	}
	.top-left{
		padding: .2rem .4rem;
		color: #fff;
		font-size: .426666rem;
		margin-top: .15rem;
	}
	.top-search input{
		flex: 1;
		color: #333;
		border-radius: .1rem;
		font-size: .3733333rem;
		padding: .2rem .2rem;
		border: 0;
		height:.4rem;
	}
	.top-right{
		padding: .2rem .4rem;
		margin-top: .15rem;
		margin-left: 1rem;
	}
	.top-right img{
		height: .533333rem;
		width: .533333rem;
	}
	.banner-swiper{
		width: 100%;
		height: 5.6rem;
	}
	.banner-swiper img{
		width: 100%;
		height: 100%;
	}
	
	.swiper-pagination >>> .swiper-pagination-bullet-active{
		background: orange;
	}
</style>
