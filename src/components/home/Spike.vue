<template>
	<div class="spike">
		<swiper :options="swiperOptions">
			<swiper-slide v-for="(item,index) in spikeList" :key="index">
				<div class="spike-content" @click="toDetail(item)">
				<div class="spike-top">
					<img src="@/assets/img/spike1.png">
					<span>距离结束</span>
					<count-down
					:currentTime="item.startTime" 
					:startTime="item.startTime"
					:endTime="item.endTime"
					:dayTxt="'天'"
					:hourTxt="'时'"
					:minutesTxt="'分'"
					:secondsTxt="'秒'"
					>
					</count-down>
				</div>
				<div class="spike-bottom">
					<img :src="item.imgUrl">
					<div class="bottom-title">
						<p>
							{{item.title}}
						</p>
						<div class="bottom-price">
							<span>
								￥{{item.price}}
							</span>
							<p>剩下{{item.num}}个</p>
						</div>
					</div>
				</div>
				</div>
			</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	// 倒计时插件
	import CountDown from 'vue2-countdown'
	export default{
		//引用父组件传过来的数据
		props:['spikeList'],
		//引入组件
		components: {
		CountDown
		},
		data(){
			return{
				swiperOptions:{
					loop:true,
					pagination: {
					el: '.swiper-pagination'
					}	
				}
			}
		},
		methods:{
			toDetail(item){
				this.$router.push({
					path:"/details",
					query:{
						item
					}
				})
			}
		}
		}
</script>

<style scoped="scoped">
	.spike{
		width: 100%;
		height: 4.377777rem;
	}
	.spike-content{
		padding: .3rem;
	}
	.spike-top{
		width: 100%;
		height:1.293333rem;
		display: flex;
		align-items: center;
		font-size: .35rem;
	}
	.spike-top img{
		height: .41333333rem; 
		width: 1.89333333rem;
	}
	.spike-top span{
		margin-left: .15rem;
		margin-right: .15rem;
	}
	.spike-top >>> div span{
		color: #fff;
		border-radius: .1rem;
		background: #8b8b8b;
		margin-left: .1rem;
		padding: 0 .1rem;
	}
	.spike-bottom{
		display: flex;
		justify-content: space-between;
	}
	.spike-bottom img{
		width: 3.093333rem;
		height: 2.12rem;
	}
	.spike-bottom .bottom-title{
		width: 5.86rem;
	}
	.bottom-title p{
		line-height: .38rem;
		color: #333;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: .35rem;
	}
	.bottom-price{
		margin-top: .8rem; 
		display: flex;
		justify-content: space-between;
		font-size: .35rem;
	}
	.bottom-price p{
		padding: .1rem;
		border: 1px solid #444;
		border-radius: .1rem;
		background: #fed101;
	}
	.swiper-container{
		overflow: visible;
	}
	.swiper-pagination >>> .swiper-pagination-bullet-active{
		background: orange;
	}
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
		bottom: -.5rem;
	}
</style>
