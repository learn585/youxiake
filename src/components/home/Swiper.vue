<template>
	<div class="swiper">
		<swiper :options="swiperOptions">
		<swiper-slide>
				<img src="@/assets/img/swiper1.png" alt="">
			</swiper-slide>
		<swiper-slide>
				<img src="@/assets/img/swiper2.png" alt="">
			</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				swiperOptions:{
					autoplay:true,
					loop:true,
					pagination: {
					el: '.swiper-pagination'
					}	
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper{
		background: #007AFF;
		width: 100%;
		height: 3.2rem;
	}
	.swiper img{
		width: 100%;
		height: 3.2rem;
	}
	.swiper-pagination >>> .swiper-pagination-bullet-active{
		background: orange;
	}
</style>
