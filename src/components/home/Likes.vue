<template>
	<div class="likes">
		<div class="likes-list" v-for="(item,index) in likeList" :key="index">
			<div class="likes-top">
				<div class="top-left">
					<span>{{item.title}}</span>
				</div>
				<p class="top-right">更多></p>
			</div>
			<div class="likes-bottom" @click="toDetail(item)">
				<div class="bottom-header"
				:style="{'background':'url('+item.imgUrl+') no-repeat center center'}"
				>
					<div class="header-info">
						<span>
							{{item.Introduction}}
						</span>
						<span>
							￥{{item.price}}起
						</span>
					</div>
				</div>
				<ul>
					<li v-for="(v,index) in item.cityList" :key="index" @click="toDetail(item)"> 
						<img :src="v.imgUrl" alt="">
						<span class="title">{{v.title}}</span>
						<span class="price">￥{{v.price}}起</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['likeList'],
		methods:{
			toDetail(item){
				this.$router.push({
					path:"/details",
					query:{
						item
					}	
				})
			}
		},
	}
</script>

<style scoped="scoped">
	.likes{
		padding-bottom: 1.5rem;
		font-size: .35rem;
		margin-top: .7rem;
	}
	.likes-list{
		margin-top: .4rem;
	}
	.likes-top{
		display: flex;
		justify-content: space-between;
	}
	.likes-top .top-left{
		position: relative;
	}
	.likes-top .top-left:before{
		position: absolute;
		content: "";
		background: #fed101;
		width: .1rem;
		height: .48rem;
		top: 0;
	}
	.likes-top .top-left span{
		padding-left: .5rem;
		font-size: .5rem;
	}
	.likes-top .top-right{
		padding-right: .5rem;
		color: #999;
		font-weight: 500;
		font-size: .4rem;
	}
	.likes-bottom{
		padding: .3rem;
	}
	.likes-bottom .bottom-header{
		position: relative;
		height: 4.466666rem;
		width: 100%;
		background-size: 100%;
	}
	.likes-bottom .bottom-header .header-info{
		position: absolute;
		bottom:.1rem;
		left: .2rem;
		display: flex;
		justify-content: space-between; 
	}
	.likes-bottom .bottom-header .header-info span:nth-child(1){
		font-size: .5rem;
		color: #fff;
		font-weight: 400;
		width: 5.78rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.likes-bottom .bottom-header .header-info span:nth-child(2){
		font-size: .45rem;
		color:orange;
		font-weight: 500;
		margin-left: 1rem;
	}
	.likes-bottom ul{
		display: flex;
		justify-content: space-between;
		margin-top: .3rem;
	}
	.likes-bottom ul li{
		width: 2.96rem;
	}
	.likes-bottom ul li img{
		width: 100%;
		height: 1.9584rem;
	}
	.likes-bottom ul li span.title{
		font-size: .35rem;
		height: .6933333rem;
		width: 100%;
		display: block;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		margin-bottom: .2rem;
		letter-spacing: .02rem;
	}
	.likes-bottom ul li span.price{
		display: block;
		color: orange;
		font-weight: 500;
		font-size: .4rem;
		margin-top: .1rem;
	}
</style>
