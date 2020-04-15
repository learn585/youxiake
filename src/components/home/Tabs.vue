<template>
	<div class="tabs">
		<swiper :options="swiperOptions">
		<swiper-slide v-for="(item,index) in TabsList" :key="index">
			<div class="tabs-content">
				<img :src="item.imgUrl">
				<p>{{item.title}}</p>
			</div>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				TabsList:[
					{
						id:0,
						imgUrl:'img/tabs1.png',
						title:'签证'
					},
					{
						id:1,
						imgUrl:'img/tabs2.png',
						title:'签证'
					},
					{
						id:2,
						imgUrl:'img/tabs3.png',
						title:'签证'
					},
					{
						id:3,
						imgUrl:'img/tabs4.png',
						title:'签证'
					},
					{
						id:4,
						imgUrl:'img/tabs5.png',
						title:'签证'
					},
					{
						id:5,
						imgUrl:'img/tabs6.png',
						title:'签证'
					},
					{
						id:6,
						imgUrl:'img/tabs7.png',
						title:'签证'
					},
					{
						id:7,
						imgUrl:'img/tabs8.png',
						title:'签证'
					},
					{
						id:8,
						imgUrl:'img/tabs9.png',
						title:'签证'
					},
					{
						id:9,
						imgUrl:'img/tabs10.png',
						title:'签证'
					},
				],
				swiperOptions:{
					slidesPerView:4.8
				}	
			} 
		}
	}
</script>

<style scoped>
	.tabs{
		padding:.3rem 0;
	}
	.tabs-content{
		
	}
	.tabs-content img{
		width:.773333rem;
		width:.773333rem;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
	.tabs-content p{
		font-size: .37333333rem;
		text-align: center;
	}
</style>
