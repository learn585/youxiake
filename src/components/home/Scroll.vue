<template>
	<div class="scroll">
		<div class="scroll-content">
				<div class="scroll-right">
					<ul :class="{animatedTop}">
						<li v-for="(item,index) in scrollList" :key="index">
							<img src="@/assets/img/scroll.png" alt="">
							{{item.title}}
						</li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				animatedTop:true,
				scrollList:[
					{
						id:0,
						title:"清迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					},
					{
						id:1,
						title:"你迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					},
					{
						id:2,
						title:"是迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					},
					{
						id:3,
						title:"最迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					},
					{
						id:4,
						title:"绑迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					},
					
					{
						id:5,
						title:"撒迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					},
					{
						id:6,
						title:"大迈旅游落地签如何搞定? 360带你了解台北小城清迈"
					}
				]	
			}
		},
		
		mounted(){
			setInterval(this.showScroll,2000);
		},
		methods:{
			showScroll(){
				this.animatedTop=true;
				setTimeout(()=>{
					this.scrollList.push(this.scrollList[0]);
					this.animatedTop=false;
				},500)
			}
		}
	}
</script>

<style scoped="scoped">
	/* 滚动 */
	.animatedTop{
		transition: all .5s;
		margin-top: -.66666666rem;
	}
	.scroll{
		padding:.3rem 0;
	}
	.scroll-content{
		background: url('http://localhost:8080/img/scroll.png') no-repeat;
		background-size: 100%;
		width: 100%;
		height: 1.3333333rem;
		position: relative;
	}
	.scroll-right{
		position: absolute;
		right: 0;
		width: 8.13333333rem;
		height: 1.3333333rem;
		overflow: hidden;
	}
	li{
		font-size: .35rem;
		color: #333;
		line-height: .66666666rem;
		/* 溢出隐藏 */
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	li img{
		height: .16rem;
		height: .16rem;
	}
</style>
