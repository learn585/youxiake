<template>
	<div class="banner">
		<div class="banner-top">
			<img :src="item.imgUrl" alt="">
		</div>
		<div class="top-bottom">
			{{item.title}}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				item:''
			}
		},
		activated(){
			this.item = this.$route.query.item
		}
	}
</script>

<style scoped="scoped">
	.banner-top{
		height: 5.65rem;
		width: 100%;
	}
	.banner-top img{
		width: 100%;
		height: 100%;
	}
	.top-bottom{
		font-size: .55rem;
		margin-top: .2rem;
		padding: .2rem .2rem;
		letter-spacing: .1rem;
	}
</style>
